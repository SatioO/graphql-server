import express from "express";
import compression from "compression";
import bodyParser from "body-parser";
import Promise from "bluebird";
import helmet from "helmet";
import logger from "morgan";
import mongoose from "mongoose";
import graphqlHTTP from "express-graphql";
import config from "./config";
// GraphQL store
import { LeadershipAppSchema } from "./store";

const app = express();

if (process.env.NODE_ENV === "local") {
	Promise.config({
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
const options = {
	promiseLibrary: Promise
};

mongoose.connect(config.database.connect_uri);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Compress responses that include a Cache-Control header with the no-transform directive,
app.use(compression());

// Server settings
app.use(helmet());

// CORS
app.use((req, res, next) => {
	const allowOrigin =
		req.headers.origin ||
		`http://:${config.web_server.host}:${config.web_server.port}`;

	// Website we wish to allow to connect
	res.setHeader("Access-Control-Allow-Origin", allowOrigin);

	// Set to true if we need the website to include cookies in the requests sent
	// to the API (e.g. in case we use sessions)
	res.setHeader("Access-Control-Allow-Credentials", true);

	// Request headers we wish to allow
	res.setHeader(
		"Access-Control-Allow-Headers",
		"Content-Type, Authentication, X-Access-Token"
	);

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
app.use(
	"/",
	graphqlHTTP({
		graphiql: true,
		pretty: true,
		schema: LeadershipAppSchema
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

// Production error handler
// No stacktraces leaked to user
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
