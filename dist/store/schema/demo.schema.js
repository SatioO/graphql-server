"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.DemoSchema = undefined;

var _graphql = require("graphql");

var _types = require("../types");

var DemoSchema = exports.DemoSchema = new _graphql.GraphQLObjectType({
	name: "DEMO",
	description: "Demo schema",
	fields: _types.DemoType
});