import { GraphQLObjectType } from "graphql";
import { AddPost } from "./post.mutation";

export const BlogMutationRootType = new GraphQLObjectType({
	name: "BlogAppMutation",
	fields: {
		add: AddPost
	}
});

export * from "./post.mutation";
