"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.ProfileType = undefined;

var _graphql = require("graphql");

var _schema = require("../schema");

var ProfileType = exports.ProfileType = function ProfileType() {
	return {
		_id: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLID), description: "User ID" },
		provider: {
			type: _graphql.GraphQLString,
			description: "Login Type"
		},
		id: {
			type: _graphql.GraphQLString,
			description: "Unique User ID"
		},
		name: { type: _graphql.GraphQLString, description: "Username" },
		email: { type: _graphql.GraphQLString, description: "User email" },
		photograph: { type: _graphql.GraphQLString, description: "User profile picture URL" },
		profileStatus: {
			type: _graphql.GraphQLString,
			description: "User profile status"
		},
		designation: { type: _graphql.GraphQLString, description: "User Designation" },
		introduction: { type: _graphql.GraphQLString, description: "User Description" },
		blogUrl: { type: _graphql.GraphQLString, description: "Blog URL of User" },
		github: { type: _graphql.GraphQLString, description: "Github URL of User" },
		location: { type: _graphql.GraphQLString, description: "User Location" },
		education: { type: _graphql.GraphQLString, description: "Education Details of User" },
		aiclevel: {
			type: _graphql.GraphQLString,
			description: "Role of User"
		},
		skills: {
			type: _schema.SkillSchema,
			description: "Skills of User"
		},
		_firstCreatedBy: {
			type: _graphql.GraphQLString,
			description: "Account Created By"
		},
		_firstCreatedTimestamp: {
			type: _graphql.GraphQLString,
			description: "Account created date"
		},
		_lastUpdatedBy: {
			type: _graphql.GraphQLString,
			description: "Account Updated By"
		},
		_lastUpdatedTimestamp: {
			type: _graphql.GraphQLString,
			description: "Account Updated Date"
		}
	};
};