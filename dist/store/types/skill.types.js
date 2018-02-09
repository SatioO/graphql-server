"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.SkillType = undefined;

var _graphql = require("graphql");

var SkillType = exports.SkillType = function SkillType() {
	return {
		ui: { type: new _graphql.GraphQLList(_graphql.GraphQLString), description: "UI skills" },
		app: {
			type: new _graphql.GraphQLList(_graphql.GraphQLString),
			description: "Application Skills"
		},
		db: { type: new _graphql.GraphQLList(_graphql.GraphQLString), description: "Database Skills" },
		cloud: { type: new _graphql.GraphQLList(_graphql.GraphQLString), description: "Cloud Skills" },
		devops: { type: new _graphql.GraphQLList(_graphql.GraphQLString), description: "DevOps Skills" }
	};
};