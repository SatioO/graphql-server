process.env.NODE_ENV = process.env.NODE_ENV || "local";
process.env.PORT = process.env.PORT || 3003;
process.env.HOST = process.env.HOST || "127.0.0.1";

let config = {
	web_server: {
		host: process.env.HOST,
		port: process.env.PORT
	},
	database: {
		connect_uri: `mongodb://${process.env.HOST}:27017/aic`
	},
	jwt_secret: "aicteamisawesome"
};

if (process.env.NODE_ENV === "production") {
	config = {
		web_server: {
			host: process.env.HOST,
			port: process.env.PORT
		},
		database: {
			connect_uri: `mongodb://${process.env.HOST}:27017/aic`
		},
		jwt_secret: "aicteamisawesome"
	};
}

config.web_server.url =
	"http://" + config.web_server.host + ":" + config.web_server.port + "/";

console.log("Config Environment : " + process.env.NODE_ENV);
console.log("Config Host : " + process.env.HOST);

export default config;
