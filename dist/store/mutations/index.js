"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.LeaderShipAppMutationRootType = undefined;

var _profile = require("./profile.mutation");

Object.keys(_profile).forEach(function (key) {
	if (key === "default" || key === "__esModule") return;
	Object.defineProperty(exports, key, {
		enumerable: true,
		get: function get() {
			return _profile[key];
		}
	});
});

var _demo = require("./demo.mutation");

Object.keys(_demo).forEach(function (key) {
	if (key === "default" || key === "__esModule") return;
	Object.defineProperty(exports, key, {
		enumerable: true,
		get: function get() {
			return _demo[key];
		}
	});
});

var _graphql = require("graphql");

var LeaderShipAppMutationRootType = exports.LeaderShipAppMutationRootType = new _graphql.GraphQLObjectType({
	name: "LeaderShipAppMutation",
	description: "Leadership App Mutation",
	fields: function fields() {
		return {
			createProfile: _profile.CreateProfile,
			updateProfile: _profile.UpdateProfile,
			deleteProfile: _profile.DeleteProfile,
			createDemo: _demo.CreateDemo,
			updateDemo: _demo.UpdateDemo,
			deleteDemo: _demo.DeleteDemo
		};
	}
});