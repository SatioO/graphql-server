"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.ProfileModel = undefined;

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProfileSchema = _mongoose2.default.Schema({
	provider: { type: String, required: [true, "cant't be blank"] },
	id: { type: String, required: [true, "cant't be blank"] },
	name: { type: String },
	email: { type: String, required: [true, "cant't be blank"] },
	photograph: { type: String },
	profileStatus: { type: String, required: [true, "cant't be blank"] },
	designation: { type: String },
	introduction: { type: String },
	blogUrl: { type: String },
	github: { type: String },
	location: { type: String },
	education: { type: String },
	aiclevel: { type: String, required: [true, "cant't be blank"] },
	skills: { type: _mongoose2.default.Schema.Types.Mixed },
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

var ProfileModel = exports.ProfileModel = _mongoose2.default.model("profiles", ProfileSchema);