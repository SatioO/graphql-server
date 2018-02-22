import {
	GraphQLID,
	GraphQLBoolean,
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLInt,
	GraphQLObjectType,
	GraphQLScalarType,
	GraphQLUnionType
} from "graphql";

import {
	ProfileResponseSchema,
	DemoResponseSchema,
	ProjectResponseSchema
} from "../schema";

export const SearchResponseType = () => ({
	pageLength: { type: GraphQLID, description: "page length" },
	pageOffset: { type: GraphQLID, description: "page offset" },
	profiles: {
		type: ProfileResponseSchema,
		description: "list of all profiles"
	},
	demos: {
		type: DemoResponseSchema,
		description: "List of all demos"
	},
	projects: {
		type: ProjectResponseSchema,
		description: "List of all projects"
	}
});
