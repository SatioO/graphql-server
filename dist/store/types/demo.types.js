"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.DemoType = undefined;

var _graphql = require("graphql");

var _schema = require("../schema");

var _slide = require("./slide.types");

var DemoType = exports.DemoType = function DemoType() {
	return {
		_id: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLID), description: "Demo ID" },
		thumbnail: {
			type: _graphql.GraphQLString,
			description: "Demo Picture"
		},
		id: {
			type: _graphql.GraphQLString,
			description: "Unique Demo ID"
		},
		title: { type: _graphql.GraphQLString, description: "Demo Title" },
		tagline: {
			type: new _graphql.GraphQLNonNull(_graphql.GraphQLString),
			description: "Demo Tagline"
		},
		authors: {
			type: new _graphql.GraphQLList(_graphql.GraphQLString),
			description: "Demo authors"
		},
		categories: { type: _graphql.GraphQLString, description: "demo category" },
		techstack: {
			type: _schema.SkillSchema,
			description: "Demo techstack"
		},
		description: { type: _graphql.GraphQLString, description: "Demo description" },
		type: { type: _graphql.GraphQLString, description: "Demo Type" },
		embedUrl: { type: _graphql.GraphQLString, description: "Demo Url" },
		slides: { type: new _graphql.GraphQLList(_slide.Slides), description: "Demo Source" },
		milestone: { type: _graphql.GraphQLString, description: "Demo Milestone" },
		_firstCreatedBy: {
			type: _graphql.GraphQLString,
			description: "Demo Created By"
		},
		_firstCreatedTimestamp: {
			type: _graphql.GraphQLString,
			description: "Demo created date"
		},
		_lastUpdatedBy: {
			type: _graphql.GraphQLString,
			description: "Demo Updated By"
		},
		_lastUpdatedTimestamp: {
			type: _graphql.GraphQLString,
			description: "Demo Updated Date"
		}
	};
};