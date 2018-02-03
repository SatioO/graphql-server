import express from "express";
import { buildSchema } from "graphql";
import graphqlHTTP from "express-graphql";
import { BlogAppSchema } from "./src/graphql";

const app = express();
const PORT = 4000;

app.use(
	"/",
	graphqlHTTP({
		graphiql: true,
		schema: BlogAppSchema
	})
);

app.listen(PORT, _ =>
	console.log(`GraphQL API server running on PORT ${PORT}`)
);
