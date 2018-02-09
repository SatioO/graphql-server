import { GraphQLObjectType, GraphQLInputObjectType } from "graphql";
import { ProfileInputType } from "../types";

export const ProfileInputSchema = new GraphQLInputObjectType({
	name: "PROFILEINPUT",
	description: "Profile Input schema",
	fields: ProfileInputType
});
