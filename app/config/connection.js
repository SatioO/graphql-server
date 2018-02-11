import elasticsearch from "elasticsearch";
import config from "./index";

export const client = new elasticsearch.Client({
	host: `${config.web_server.host}:${config.web_server.elasticsearch}`
});
