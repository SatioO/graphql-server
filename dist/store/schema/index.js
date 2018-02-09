"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.LeaderShipQueryRootSchema = undefined;

var _profile = require("./profile.schema");

Object.keys(_profile).forEach(function (key) {
	if (key === "default" || key === "__esModule") return;
	Object.defineProperty(exports, key, {
		enumerable: true,
		get: function get() {
			return _profile[key];
		}
	});
});

var _profileInput = require("./profile-input.schema");

Object.keys(_profileInput).forEach(function (key) {
	if (key === "default" || key === "__esModule") return;
	Object.defineProperty(exports, key, {
		enumerable: true,
		get: function get() {
			return _profileInput[key];
		}
	});
});

var _skill = require("./skill.schema");

Object.keys(_skill).forEach(function (key) {
	if (key === "default" || key === "__esModule") return;
	Object.defineProperty(exports, key, {
		enumerable: true,
		get: function get() {
			return _skill[key];
		}
	});
});

var _skillInput = require("./skill-input.schema");

Object.keys(_skillInput).forEach(function (key) {
	if (key === "default" || key === "__esModule") return;
	Object.defineProperty(exports, key, {
		enumerable: true,
		get: function get() {
			return _skillInput[key];
		}
	});
});

var _demo = require("./demo.schema");

Object.keys(_demo).forEach(function (key) {
	if (key === "default" || key === "__esModule") return;
	Object.defineProperty(exports, key, {
		enumerable: true,
		get: function get() {
			return _demo[key];
		}
	});
});

var _demoInput = require("./demo-input.schema");

Object.keys(_demoInput).forEach(function (key) {
	if (key === "default" || key === "__esModule") return;
	Object.defineProperty(exports, key, {
		enumerable: true,
		get: function get() {
			return _demoInput[key];
		}
	});
});

var _store = require("./store.schema");

Object.keys(_store).forEach(function (key) {
	if (key === "default" || key === "__esModule") return;
	Object.defineProperty(exports, key, {
		enumerable: true,
		get: function get() {
			return _store[key];
		}
	});
});

var _graphql = require("graphql");

var _schema = require("../schema");

var _controllers = require("../../controllers");

var LeaderShipQueryRootSchema = exports.LeaderShipQueryRootSchema = new _graphql.GraphQLObjectType({
	name: "LeaderShipAppSchema",
	description: "Schema of Leadership Demo Application",
	fields: function fields() {
		return {
			profiles: {
				type: new _graphql.GraphQLList(_schema.ProfileSchema),
				description: "List of all profiles",
				args: {
					pageOffset: {
						type: _graphql.GraphQLInt,
						description: "Skip n documents from the cursor"
					},
					pageLength: {
						type: _graphql.GraphQLInt,
						description: "Cap the number of documents to be returned from the cursor"
					},
					sortBy: {
						type: _graphql.GraphQLString,
						description: "Specify in the sort parameter the field or fields to sort by"
					},
					orderBy: {
						type: _graphql.GraphQLInt,
						description: "1 or -1 to specify an ascending or descending sort respectively"
					}
				},
				resolve: _controllers.Profile.getProfiles
			},
			profile: {
				type: _schema.ProfileSchema,
				description: "Get profile by id",
				args: {
					id: {
						type: new _graphql.GraphQLNonNull(_graphql.GraphQLString),
						description: "User id"
					}
				},
				resolve: _controllers.Profile.getProfileById
			},
			demos: {
				type: new _graphql.GraphQLList(_schema.DemoSchema),
				description: "List of all demos",
				args: {
					pageOffset: {
						type: _graphql.GraphQLInt,
						description: "Skip n documents from the cursor"
					},
					pageLength: {
						type: _graphql.GraphQLInt,
						description: "Cap the number of documents to be returned from the cursor"
					},
					sortBy: {
						type: _graphql.GraphQLString,
						description: "Specify in the sort parameter the field or fields to sort by"
					},
					orderBy: {
						type: _graphql.GraphQLInt,
						description: "1 or -1 to specify an ascending or descending sort respectively"
					}
				},
				resolve: _controllers.Demo.getDemos
			},
			demo: {
				type: _schema.DemoSchema,
				description: "Get demo by id",
				args: {
					id: {
						type: new _graphql.GraphQLNonNull(_graphql.GraphQLString),
						description: "demo id"
					}
				},
				resolve: _controllers.Demo.getDemoById
			},
			store: {
				type: _schema.StoreSchema,
				description: "Get state from store",
				args: {
					key: {
						type: new _graphql.GraphQLNonNull(_graphql.GraphQLString),
						description: "Key name"
					}
				},
				resolve: _controllers.Store.getKeys
			}
		};
	}
});