"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Slides = undefined;

var _graphql = require("graphql");

var Slides = exports.Slides = new _graphql.GraphQLScalarType({
	name: "Slides",
	serialize: function serialize(value) {
		return value;
	}
});