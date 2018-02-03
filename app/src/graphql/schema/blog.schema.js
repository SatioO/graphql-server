import { GraphQLList, GraphQLObjectType } from "graphql";
import { Posts, Authors } from "../../data";
import { AuthorType } from "./author.schema";
import { PostType } from "./post.schema";

// This is the Root Query
export const BlogQueryRootType = new GraphQLObjectType({
	name: "BlogAppSchema",
	description: "Blog Application Schema Root",
	fields: () => ({
		authors: {
			type: new GraphQLList(AuthorType),
			description: "List of all Authors",
			resolve: _ => Authors
		},
		posts: {
			type: new GraphQLList(PostType),
			description: "List of all Posts",
			resolve: _ => Posts
		}
	})
});
