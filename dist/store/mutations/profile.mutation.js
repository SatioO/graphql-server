"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.DeleteProfile = exports.UpdateProfile = exports.CreateProfile = undefined;

var _graphql = require("graphql");

var _schema = require("../schema");

var _controllers = require("../../controllers");

var CreateProfile = exports.CreateProfile = {
	type: new _graphql.GraphQLNonNull(_schema.ProfileSchema),
	description: "Create Profile",
	args: {
		data: {
			name: "Profile Data",
			type: _schema.ProfileInputSchema
		}
	},
	resolve: _controllers.Profile.createProfile
};

var UpdateProfile = exports.UpdateProfile = {
	type: new _graphql.GraphQLNonNull(_schema.ProfileSchema),
	description: "Update Profile",
	args: {
		data: {
			name: "Profile Data",
			type: _schema.ProfileInputSchema
		}
	},
	resolve: _controllers.Profile.updateProfile
};

var DeleteProfile = exports.DeleteProfile = {
	type: new _graphql.GraphQLNonNull(_schema.ProfileSchema),
	description: "Delete Profile",
	args: {
		id: {
			name: "Profile ID",
			type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)
		}
	},
	resolve: _controllers.Profile.deleteProfile
};