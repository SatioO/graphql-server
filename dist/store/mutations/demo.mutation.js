"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.DeleteDemo = exports.UpdateDemo = exports.CreateDemo = undefined;

var _graphql = require("graphql");

var _schema = require("../schema");

var _controllers = require("../../controllers");

var CreateDemo = exports.CreateDemo = {
	type: new _graphql.GraphQLNonNull(_schema.DemoSchema),
	description: "Create Demo",
	args: {
		data: {
			name: "Demo Data",
			type: _schema.DemoInputSchema
		}
	},
	resolve: _controllers.Demo.createDemo
};

var UpdateDemo = exports.UpdateDemo = {
	type: new _graphql.GraphQLNonNull(_schema.DemoSchema),
	description: "Update Demo",
	args: {
		data: {
			name: "Demo Data",
			type: _schema.DemoInputSchema
		}
	},
	resolve: _controllers.Demo.updateDemo
};

var DeleteDemo = exports.DeleteDemo = {
	type: new _graphql.GraphQLNonNull(_schema.DemoSchema),
	description: "Delete Demo",
	args: {
		id: {
			name: "Demo ID",
			type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)
		}
	},
	resolve: _controllers.Demo.deleteDemo
};