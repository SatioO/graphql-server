import {
	GraphQLObjectType,
	GraphQLInt,
	GraphQLList,
	GraphQLInputObjectType
} from "graphql";
import { ProfileType, ProfileInputType } from "../types";

export const ProfileListSchema = new GraphQLObjectType({
	name: "PROFILES",
	description: "Profile schema",
	fields: ProfileType
});

export const ProfileInputSchema = new GraphQLInputObjectType({
	name: "PROFILEINPUT",
	description: "Profile Input schema",
	fields: ProfileInputType
});

export const ProfileSchema = new GraphQLObjectType({
	name: "PROFILE",
	description: "Profile schema",
	fields: {
		pageOffset: { type: GraphQLInt, description: "total number of items" },
		pageLength: { type: GraphQLInt, description: "total number of items" },
		total: { type: GraphQLInt, description: "total number of items" },
		items: {
			type: new GraphQLList(ProfileListSchema),
			description: "profile items"
		}
	}
});
