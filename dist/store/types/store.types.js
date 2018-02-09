"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Store = undefined;

var _graphql = require("graphql");

var Store = exports.Store = new _graphql.GraphQLScalarType({
	name: "Store",
	serialize: function serialize(value) {
		return value;
	}
});