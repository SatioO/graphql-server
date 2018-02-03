import { GraphQLSchema } from "graphql";
import { BlogQueryRootType } from "./blog.schema";
import { BlogMutationRootType } from "../mutations";

// This is the schema declaration
export const BlogAppSchema = new GraphQLSchema({
	query: BlogQueryRootType,
	mutation: BlogMutationRootType
});

export * from "./author.schema";
export * from "./post.schema";
export * from "./blog.schema";
