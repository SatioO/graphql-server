import { GraphQLString, GraphQLObjectType, GraphQLNonNull } from "graphql";

export const AuthorType = new GraphQLObjectType({
	name: "Author",
	description: "This represent an author",
	fields: () => ({
		id: { type: new GraphQLNonNull(GraphQLString) },
		name: { type: new GraphQLNonNull(GraphQLString) },
		twitterHandle: { type: GraphQLString }
	})
});
