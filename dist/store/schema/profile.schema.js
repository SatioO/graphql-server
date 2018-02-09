"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.ProfileSchema = undefined;

var _graphql = require("graphql");

var _types = require("../types");

var ProfileSchema = exports.ProfileSchema = new _graphql.GraphQLObjectType({
	name: "PROFILE",
	description: "Profile schema",
	fields: _types.ProfileType
});