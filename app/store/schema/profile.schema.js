import { GraphQLObjectType, GraphQLInputObjectType } from "graphql";
import { ProfileType, ProfileInputType } from "../types";

export const ProfileSchema = new GraphQLObjectType({
	name: "PROFILE",
	description: "Profile schema",
	fields: ProfileType
});

export const ProfileInputSchema = new GraphQLInputObjectType({
	name: "PROFILEINPUT",
	description: "Profile Input schema",
	fields: ProfileInputType
});
