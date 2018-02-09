"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.ProfileInputSchema = undefined;

var _graphql = require("graphql");

var _types = require("../types");

var ProfileInputSchema = exports.ProfileInputSchema = new _graphql.GraphQLInputObjectType({
	name: "PROFILEINPUT",
	description: "Profile Input schema",
	fields: _types.ProfileInputType
});