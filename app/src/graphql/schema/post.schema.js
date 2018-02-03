import { GraphQLString, GraphQLObjectType, GraphQLNonNull } from "graphql";
import find from "lodash/find";
import { AuthorType } from "./author.schema";

export const PostType = new GraphQLObjectType({
	name: "Post",
	description: "This represent a Post",
	fields: () => ({
		id: { type: new GraphQLNonNull(GraphQLString) },
		title: { type: new GraphQLNonNull(GraphQLString) },
		body: { type: GraphQLString },
		author: {
			type: AuthorType,
			resolve: post => find(Authors, a => a.id == post.author_id)
		}
	})
});
