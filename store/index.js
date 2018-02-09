(function() {
	"use strict";

	module.exports = app => {
		let fileNames = {
			server: "server.json",
			domains: "domains.json",
			manager: "managers.json",
			operation: "operations.json",
			administrator: "administrators.json",
			"content-editor": "content-editor.json",
			"technical-editor": "technical-editor.json",
			"project-manager": "project-managers.json",
			"delivery-manager": "delivery-managers.json",
			location: "locations.json"
		};

		return {
			get: name => {
				try {
					const path = fileNames[name];
					return require(__dirname + "/" + path);
				} catch (e) {
					process.exit();
				}
			}
		};
	};
})();
