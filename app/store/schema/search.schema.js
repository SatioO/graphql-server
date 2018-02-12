import { GraphQLObjectType } from "graphql";
import { SearchResponseType } from "../types";

export const SearchResponseSchema = new GraphQLObjectType({
	name: "SEARCH",
	description: "Search Response schema",
	fields: SearchResponseType
});
