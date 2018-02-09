import {
	GraphQLID,
	GraphQLBoolean,
	GraphQLString,
	GraphQLNonNull
} from "graphql";

import { SkillSchema } from "../schema";

export const ProfileType = () => ({
	_id: { type: new GraphQLNonNull(GraphQLID), description: "User ID" },
	provider: {
		type: GraphQLString,
		description: "Login Type"
	},
	id: {
		type: GraphQLString,
		description: "Unique User ID"
	},
	name: { type: GraphQLString, description: "Username" },
	email: { type: GraphQLString, description: "User email" },
	photograph: { type: GraphQLString, description: "User profile picture URL" },
	profileStatus: {
		type: GraphQLString,
		description: "User profile status"
	},
	designation: { type: GraphQLString, description: "User Designation" },
	introduction: { type: GraphQLString, description: "User Description" },
	blogUrl: { type: GraphQLString, description: "Blog URL of User" },
	github: { type: GraphQLString, description: "Github URL of User" },
	location: { type: GraphQLString, description: "User Location" },
	education: { type: GraphQLString, description: "Education Details of User" },
	aiclevel: {
		type: GraphQLString,
		description: "Role of User"
	},
	skills: {
		type: SkillSchema,
		description: "Skills of User"
	},
	_firstCreatedBy: {
		type: GraphQLString,
		description: "Account Created By"
	},
	_firstCreatedTimestamp: {
		type: GraphQLString,
		description: "Account created date"
	},
	_lastUpdatedBy: {
		type: GraphQLString,
		description: "Account Updated By"
	},
	_lastUpdatedTimestamp: {
		type: GraphQLString,
		description: "Account Updated Date"
	}
});
