"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.ProfileInputType = undefined;

var _graphql = require("graphql");

var _schema = require("../schema");

var ProfileInputType = exports.ProfileInputType = function ProfileInputType() {
	return {
		_id: { type: _graphql.GraphQLID, description: "User ID" },
		provider: {
			type: new _graphql.GraphQLNonNull(_graphql.GraphQLString),
			description: "Login Type"
		},
		id: {
			type: new _graphql.GraphQLNonNull(_graphql.GraphQLString),
			description: "Unique User ID"
		},
		name: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString), description: "Username" },
		email: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString), description: "User Email" },
		photograph: {
			type: _graphql.GraphQLString,
			description: "User profile picture URL"
		},
		profileStatus: {
			type: new _graphql.GraphQLNonNull(_graphql.GraphQLString),
			description: "User profile status"
		},
		designation: { type: _graphql.GraphQLInt, description: "User Designation" },
		introduction: { type: _graphql.GraphQLString, description: "User Description" },
		blogUrl: { type: _graphql.GraphQLString, description: "Blog URL of User" },
		github: { type: _graphql.GraphQLString, description: "Github URL of User" },
		location: { type: _graphql.GraphQLInt, description: "User Location" },
		education: {
			type: _graphql.GraphQLString,
			description: "Education Details of User"
		},
		aiclevel: {
			type: new _graphql.GraphQLNonNull(_graphql.GraphQLString),
			description: "Role of User"
		},
		skills: {
			type: new _graphql.GraphQLNonNull(_schema.SkillInputSchema),
			description: "Skills of User"
		},
		_firstCreatedBy: {
			type: new _graphql.GraphQLNonNull(_graphql.GraphQLString),
			description: "Account Created By"
		},
		_firstCreatedTimestamp: {
			type: new _graphql.GraphQLNonNull(_graphql.GraphQLString),
			description: "Account Created Date"
		},
		_lastUpdatedBy: {
			type: new _graphql.GraphQLNonNull(_graphql.GraphQLString),
			description: "Account Updated By"
		},
		_lastUpdatedTimestamp: {
			type: new _graphql.GraphQLNonNull(_graphql.GraphQLString),
			description: "Account Updated Date"
		}
	};
};