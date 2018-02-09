"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.DemoModel = undefined;

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DemoSchema = _mongoose2.default.Schema({
	id: { type: String, required: [true, "cant't be blank"] },
	title: { type: String, required: [true, "cant't be blank"] },
	tagline: { type: String, required: [true, "cant't be blank"] },
	thumbnail: { type: String },
	authors: { type: Array, default: [] },
	categories: { type: String },
	techstack: { type: _mongoose2.default.Schema.Types.Mixed },
	description: { type: String },
	type: { type: String },
	embedUrl: { type: String },
	slides: { type: _mongoose2.default.Schema.Types.Mixed },
	milestone: { type: String, required: [true, "cant't be blank"] },
	_firstCreatedBy: { type: String, required: [true, "cant't be blank"] },
	_firstCreatedTimestamp: {
		type: _mongoose2.default.Schema.Types.Date,
		required: [true, "cant't be blank"]
	},
	_lastUpdatedBy: { type: String, required: [true, "cant't be blank"] },
	_lastUpdatedTimestamp: {
		type: _mongoose2.default.Schema.Types.Date,
		required: [true, "cant't be blank"]
	}
}, { timestamps: true });

var DemoModel = exports.DemoModel = _mongoose2.default.model("demos", DemoSchema);