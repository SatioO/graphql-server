"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.DemoInputType = undefined;

var _graphql = require("graphql");

var _schema = require("../schema");

var _slide = require("./slide.types");

var DemoInputType = exports.DemoInputType = function DemoInputType() {
	return {
		_id: { type: _graphql.GraphQLID, description: "Demo ID" },
		thumbnail: {
			type: _graphql.GraphQLString,
			description: "Demo Picture"
		},
		id: {
			type: new _graphql.GraphQLNonNull(_graphql.GraphQLString),
			description: "Unique Demo ID"
		},
		title: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString), description: "Demo Title" },
		tagline: {
			type: new _graphql.GraphQLNonNull(_graphql.GraphQLString),
			description: "Demo Tagline"
		},
		authors: {
			type: new _graphql.GraphQLNonNull(new _graphql.GraphQLList(_graphql.GraphQLString)),
			description: "Demo authors"
		},
		categories: {
			type: new _graphql.GraphQLNonNull(_graphql.GraphQLString),
			description: "demo category"
		},
		techstack: {
			type: new _graphql.GraphQLNonNull(_schema.SkillInputSchema),
			description: "Demo techstack"
		},
		description: { type: _graphql.GraphQLString, description: "Demo description" },
		type: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString), description: "Demo Type" },
		embedUrl: { type: _graphql.GraphQLString, description: "Demo Url" },
		slides: { type: new _graphql.GraphQLList(_slide.Slides), description: "Demo Source" },
		milestone: {
			type: new _graphql.GraphQLNonNull(_graphql.GraphQLString),
			description: "Demo Milestone"
		},
		_firstCreatedBy: {
			type: new _graphql.GraphQLNonNull(_graphql.GraphQLString),
			description: "Demo Created By"
		},
		_firstCreatedTimestamp: {
			type: new _graphql.GraphQLNonNull(_graphql.GraphQLString),
			description: "Demo created date"
		},
		_lastUpdatedBy: {
			type: new _graphql.GraphQLNonNull(_graphql.GraphQLString),
			description: "Demo Updated By"
		},
		_lastUpdatedTimestamp: {
			type: new _graphql.GraphQLNonNull(_graphql.GraphQLString),
			description: "Demo Updated Date"
		}
	};
};