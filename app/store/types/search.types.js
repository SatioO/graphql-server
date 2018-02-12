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

import { ProfileSchema, DemoSchema, ProjectSchema } from "../schema";

export const SearchResponseType = () => ({
	profiles: {
		type: new GraphQLList(ProfileSchema),
		description: "List of profiles"
	},
	demos: {
		type: new GraphQLList(DemoSchema),
		description: "List of demos"
	},
	projects: {
		type: new GraphQLList(ProjectSchema),
		description: "List of projects"
	}
});
