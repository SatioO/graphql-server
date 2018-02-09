"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
process.env.NODE_ENV = process.env.NODE_ENV || "local";
process.env.PORT = process.env.PORT || 4000;
process.env.HOST = process.env.HOST || "127.0.0.1";

var config = {
	web_server: {
		host: process.env.HOST || "127.0.0.1",
		port: process.env.PORT
	},
	database: {
		connect_uri: "mongodb://" + process.env.HOST + ":27017/aic"
	},
	jwt_secret: ""
};

if (process.env.NODE_ENV === "production") {
	config = {
		web_server: {
			host: process.env.HOST || "127.0.0.1",
			port: process.env.PORT
		},
		database: {
			connect_uri: "mongodb://" + process.env.HOST + ":27017/aic"
		},
		jwt_secret: ""
	};
}

config.web_server.url = "http://" + config.web_server.host + ":" + config.web_server.port + "/";

console.log("Config Environment : " + process.env.NODE_ENV);
console.log("Config Host : " + process.env.HOST);

exports.default = config;