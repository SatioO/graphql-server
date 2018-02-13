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
	SearchProfileSchema,
	SearchDemosSchema,
	SearchProjectsSchema
} from "../schema";

export const SearchResponseType = () => ({
	pageLength: { type: GraphQLID, description: "page length" },
	pageOffset: { type: GraphQLID, description: "page offset" },
	profiles: {
		type: SearchProfileSchema,
		description: "list of all profiles"
	},
	demos: {
		type: SearchDemosSchema,
		description: "List of demos"
	},
	projects: {
		type: SearchProjectsSchema,
		description: "List of projects"
	}
});
