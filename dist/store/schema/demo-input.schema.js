"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.DemoInputSchema = undefined;

var _graphql = require("graphql");

var _types = require("../types");

var DemoInputSchema = exports.DemoInputSchema = new _graphql.GraphQLInputObjectType({
	name: "DEMOINPUT",
	description: "Demo Input schema",
	fields: _types.DemoInputType
});