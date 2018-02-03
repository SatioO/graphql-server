import { GraphQLSchema } from "graphql";
import { BlogQueryRootType } from "./blog.schema";

// This is the schema declaration
export const BlogAppSchema = new GraphQLSchema({
	query: BlogQueryRootType
});
