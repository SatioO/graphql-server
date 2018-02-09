"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.LeadershipAppSchema = undefined;

var _schema = require("./schema");

Object.keys(_schema).forEach(function (key) {
	if (key === "default" || key === "__esModule") return;
	Object.defineProperty(exports, key, {
		enumerable: true,
		get: function get() {
			return _schema[key];
		}
	});
});

var _mutations = require("./mutations");

Object.keys(_mutations).forEach(function (key) {
	if (key === "default" || key === "__esModule") return;
	Object.defineProperty(exports, key, {
		enumerable: true,
		get: function get() {
			return _mutations[key];
		}
	});
});

var _types = require("./types");

Object.keys(_types).forEach(function (key) {
	if (key === "default" || key === "__esModule") return;
	Object.defineProperty(exports, key, {
		enumerable: true,
		get: function get() {
			return _types[key];
		}
	});
});

var _graphql = require("graphql");

// This is the schema declaration
var LeadershipAppSchema = exports.LeadershipAppSchema = new _graphql.GraphQLSchema({
	query: _schema.LeaderShipQueryRootSchema,
	mutation: _mutations.LeaderShipAppMutationRootType
});