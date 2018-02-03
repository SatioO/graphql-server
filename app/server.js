import express from "express";
import Promise from "bluebird";
import compression from "compression";
import bodyParser from "body-parser";
import graphqlHTTP from "express-graphql";
import helmet from "helmet";
import logger from "morgan";
import mongoose from "mongoose";
import config from "./config";

import { buildSchema } from "graphql";
import { BlogAppSchema } from "./store";

const app = express();

if (process.env.NODE_ENV === "local") {
	Promise.config({
		warnings: true,
		longStackTraces: true,
		cancellation: true,
		monitoring: true
	});
}

if (process.env.NODE_ENV === "local") {
	app.use(logger("combined"));
}

// connect to Mongo when the app initializes
const options = {
	promiseLibrary: Promise
};

mongoose.connect(config.database.connect_uri);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// compress responses that include a Cache-Control header with the no-transform directive,
app.use(compression());

// server settings
app.use(helmet());

app.use((req, res, next) => {
	const allowOrigin =
		req.headers.origin ||
		`http://:${config.web_server.host}:${config.web_server.port}`;

	// Website you wish to allow to connect
	res.setHeader("Access-Control-Allow-Origin", allowOrigin);

	// Set to true if you need the website to include cookies in the requests sent
	// to the API (e.g. in case you use sessions)
	res.setHeader("Access-Control-Allow-Credentials", true);

	// Request headers you wish to allow
	res.setHeader(
		"Access-Control-Allow-Headers",
		"Content-Type, Authentication, X-Access-Token"
	);

	// Request methods you wish to allow
	res.setHeader("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");

	// Handle preflight requests
	if (req.method === "OPTIONS") {
		return res.status(200).send();
	} else {
		next();
	}
});

// GraphQL Configuration
app.use(
	"/",
	graphqlHTTP({
		graphiql: true,
		pretty: true,
		schema: BlogAppSchema
	})
);

app.get("*", (req, res) => {
	res.status(404).send({
		responseDesc: "Not Found",
		data: null,
		error: "Sorry, invalid request"
	});
});

if (process.env.NODE_ENV === "local") {
	app.use((err, req, res, next) => {
		res.status(err.status || 500);
		return res.json({
			message: err.message,
			error: err
		});
	});
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
	res.status(err.status || 500);
	return res.json({
		message: err.message,
		error: {}
	});
});

app.listen(config.web_server.port, err => {
	if (err) {
		console.log("Error starting GraphQL server : ", err);
	} else {
		console.log("GraphQL server listening on PORT ", config.web_server.port);
	}
});
