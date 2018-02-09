"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.SkillSchema = undefined;

var _graphql = require("graphql");

var _types = require("../types");

var SkillSchema = exports.SkillSchema = new _graphql.GraphQLObjectType({
	name: "SKILLS",
	description: "Skills schema",
	fields: _types.SkillType
});