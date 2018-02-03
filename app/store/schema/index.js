import { GraphQLList, GraphQLObjectType } from "graphql";
import { AuthorType } from "./author.schema";
import { PostType } from "./post.schema";
import { getAuthors, getPosts } from "../resolvers";

// This is the Root Query
export const BlogQueryRootType = new GraphQLObjectType({
	name: "BlogAppSchema",
	description: "Blog Application Schema Root",
	fields: () => ({
		authors: {
			type: new GraphQLList(AuthorType),
			description: "List of all Authors",
			resolve: getAuthors
		},
		posts: {
			type: new GraphQLList(PostType),
			description: "List of all Posts",
			resolve: getPosts
		}
	})
});

export * from "./author.schema";
export * from "./post.schema";
