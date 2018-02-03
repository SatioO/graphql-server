import express from "express";
import { buildSchema } from "graphql";
import graphqlHTTP from "express-graphql";

const app = express();
const PORT = 4000;

const schema = buildSchema(`
    type Query {
        postTitle: String,
        blogTitle: String
    }
`);

const root = {
	postTitle: () => "Sample post title",
	blogTitle: () => "Sample blog title"
};

app.use(
	"/",
	graphqlHTTP({
		graphiql: true,
		schema: schema,
		rootValue: root
	})
);

app.listen(PORT, _ =>
	console.log(`GraphQL API server running on PORT ${PORT}`)
);
