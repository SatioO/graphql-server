import express from "express";
import { buildSchema } from "graphql";
import graphqlHTTP from "express-graphql";
import schema from "./src/schema";

const app = express();
const PORT = 4000;

app.use(
	"/",
	graphqlHTTP({
		graphiql: true,
		schema: schema
	})
);

app.listen(PORT, _ =>
	console.log(`GraphQL API server running on PORT ${PORT}`)
);
