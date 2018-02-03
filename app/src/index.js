import { GraphQLSchema } from "graphql";
import { BlogQueryRootType } from "./schema";
import { BlogMutationRootType } from "./mutations";

// This is the schema declaration
export const BlogAppSchema = new GraphQLSchema({
	query: BlogQueryRootType,
	mutation: BlogMutationRootType
});

export * from "./schema";
export * from "./resolvers";
export * from "./mutations";
export * from "./data";
