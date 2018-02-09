"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var Store = exports.Store = {
	files: {
		server: "server.json",
		administrators: "administrators.json",
		managers: "managers.json",
		designation: "designations.json",
		techstack: "techstack.json",
		aiclevel: "aiclevels.json",
		location: "locations.json",
		domains: "domains.json",
		project_config: "project_config.json",
		contentauditor: "content-editor.json",
		technicalauditor: "technical-editor.json",
		platforms: "platforms.json",
		research: "research.json",
		casestories: "casestories.json",
		account_managers: "account_managers.json",
		allowed_domains: "domains.json",
		delivery_managers: "delivery-managers.json",
		operations: "operations.json",
		categories: "categories.json",
		project_managers: "project-managers.json",
		coe: "coe.json"
	},
	getKeys: function getKeys(_, _ref) {
		var key = _ref.key;

		try {
			var path = Store.files[key];
			if (!path) {
				throw new Error("Unknown config requested");
			}
			return { name: "" + key, result: require("../../store/" + path) };
		} catch (error) {
			return error;
		}
	}
};