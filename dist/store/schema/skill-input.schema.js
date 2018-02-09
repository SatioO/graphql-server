"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.SkillInputSchema = undefined;

var _graphql = require("graphql");

var _types = require("../types");

var SkillInputSchema = exports.SkillInputSchema = new _graphql.GraphQLInputObjectType({
	name: "SKILLSINPUT",
	description: "Skills Input schema",
	fields: _types.SkillType
});