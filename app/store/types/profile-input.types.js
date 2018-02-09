import {
	GraphQLInputObjectType,
	GraphQLString,
	GraphQLInt,
	GraphQLID,
	GraphQLNonNull
} from "graphql";
import { SkillInputSchema } from "../schema";

export const ProfileInputType = () => ({
	_id: { type: GraphQLID, description: "User ID" },
	provider: {
		type: new GraphQLNonNull(GraphQLString),
		description: "Login Type"
	},
	id: {
		type: new GraphQLNonNull(GraphQLString),
		description: "Unique User ID"
	},
	name: { type: new GraphQLNonNull(GraphQLString), description: "Username" },
	email: { type: new GraphQLNonNull(GraphQLString), description: "User Email" },
	photograph: {
		type: GraphQLString,
		description: "User profile picture URL"
	},
	profileStatus: {
		type: new GraphQLNonNull(GraphQLString),
		description: "User profile status"
	},
	designation: { type: GraphQLInt, description: "User Designation" },
	introduction: { type: GraphQLString, description: "User Description" },
	blogUrl: { type: GraphQLString, description: "Blog URL of User" },
	github: { type: GraphQLString, description: "Github URL of User" },
	location: { type: GraphQLInt, description: "User Location" },
	education: {
		type: GraphQLString,
		description: "Education Details of User"
	},
	aiclevel: {
		type: new GraphQLNonNull(GraphQLString),
		description: "Role of User"
	},
	skills: {
		type: new GraphQLNonNull(SkillInputSchema),
		description: "Skills of User"
	},
	_firstCreatedBy: {
		type: new GraphQLNonNull(GraphQLString),
		description: "Account Created By"
	},
	_firstCreatedTimestamp: {
		type: new GraphQLNonNull(GraphQLString),
		description: "Account Created Date"
	},
	_lastUpdatedBy: {
		type: new GraphQLNonNull(GraphQLString),
		description: "Account Updated By"
	},
	_lastUpdatedTimestamp: {
		type: new GraphQLNonNull(GraphQLString),
		description: "Account Updated Date"
	}
});
