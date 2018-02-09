import { GraphQLObjectType } from "graphql";
import { ProfileType } from "../types";

export const ProfileSchema = new GraphQLObjectType({
	name: "PROFILE",
	description: "Profile schema",
	fields: ProfileType
});
