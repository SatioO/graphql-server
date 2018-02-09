"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.StoreSchema = undefined;

var _graphql = require("graphql");

var _types = require("../types");

var StoreSchema = exports.StoreSchema = new _graphql.GraphQLObjectType({
	name: "STORE",
	description: "Store schema",
	fields: function fields() {
		return {
			name: { type: _graphql.GraphQLString, description: "Store Description" },
			result: { type: new _graphql.GraphQLList(_types.Store), description: "Store result" }
		};
	}
});