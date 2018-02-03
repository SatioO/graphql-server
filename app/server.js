import express from "express";
import graphqlHTTP from "express-graphql";
import { buildSchema } from "graphql";
import { BlogAppSchema } from "./src";

const app = express();
const PORT = 4000;

app.use(
	"/",
	graphqlHTTP({
		graphiql: true,
		pretty: true,
		schema: BlogAppSchema
	})
);

app.listen(PORT, _ =>
	console.log(`GraphQL API server running on PORT ${PORT}`)
);
