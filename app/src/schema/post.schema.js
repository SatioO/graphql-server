import { GraphQLString, GraphQLObjectType, GraphQLNonNull } from "graphql";
import { AuthorType } from "./author.schema";
import { getAuthorByPost } from "../resolvers";

export const PostType = new GraphQLObjectType({
	name: "Post",
	description: "This represent a Post",
	fields: () => ({
		id: { type: new GraphQLNonNull(GraphQLString) },
		title: { type: new GraphQLNonNull(GraphQLString) },
		body: { type: GraphQLString },
		author: {
			type: AuthorType,
			resolve: getAuthorByPost
		}
	})
});
