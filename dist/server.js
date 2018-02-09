"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _compression = require("compression");

var _compression2 = _interopRequireDefault(_compression);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _bluebird = require("bluebird");

var _bluebird2 = _interopRequireDefault(_bluebird);

var _helmet = require("helmet");

var _helmet2 = _interopRequireDefault(_helmet);

var _morgan = require("morgan");

var _morgan2 = _interopRequireDefault(_morgan);

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _expressGraphql = require("express-graphql");

var _expressGraphql2 = _interopRequireDefault(_expressGraphql);

var _config = require("./config");

var _config2 = _interopRequireDefault(_config);

var _store = require("./store");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
// GraphQL store


if (process.env.NODE_ENV === "local") {
	_bluebird2.default.config({
		warnings: true,
		longStackTraces: true,
		cancellation: true,
		monitoring: true
	});
}

// if (process.env.NODE_ENV === "local") {
// 	app.use(logger("combined"));
// }

// Connect to Mongo when the app initializes
var options = {
	promiseLibrary: _bluebird2.default
};

_mongoose2.default.connect(_config2.default.database.connect_uri);

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));

// Compress responses that include a Cache-Control header with the no-transform directive,
app.use((0, _compression2.default)());

// Server settings
app.use((0, _helmet2.default)());

// CORS
app.use(function (req, res, next) {
	var allowOrigin = req.headers.origin || "http://:" + _config2.default.web_server.host + ":" + _config2.default.web_server.port;

	// Website we wish to allow to connect
	res.setHeader("Access-Control-Allow-Origin", allowOrigin);

	// Set to true if we need the website to include cookies in the requests sent
	// to the API (e.g. in case we use sessions)
	res.setHeader("Access-Control-Allow-Credentials", true);

	// Request headers we wish to allow
	res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authentication, X-Access-Token");

	// Request methods we wish to allow
	res.setHeader("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");

	// Handle preflight requests
	if (req.method === "OPTIONS") {
		return res.status(200).send();
	} else {
		next();
	}
});

// GraphQL Configuration
app.use("/", (0, _expressGraphql2.default)({
	graphiql: true,
	pretty: true,
	schema: _store.LeadershipAppSchema
}));

app.get("*", function (req, res) {
	res.status(404).send({
		responseDesc: "Not Found",
		data: null,
		error: "Sorry, invalid request"
	});
});

if (process.env.NODE_ENV === "local") {
	app.use(function (err, req, res, next) {
		res.status(err.status || 500);
		return res.json({
			message: err.message,
			error: err
		});
	});
}

// Production error handler
// No stacktraces leaked to user
app.use(function (err, req, res, next) {
	res.status(err.status || 500);
	return res.json({
		message: err.message,
		error: {}
	});
});

app.listen(_config2.default.web_server.port, function (err) {
	if (err) {
		console.log("Error starting GraphQL server : ", err);
	} else {
		console.log("GraphQL server listening on PORT ", _config2.default.web_server.port);
	}
});