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

import { DemoSchema } from "../schema";

export const DemoResponseType = () => ({
	total: {
		type: GraphQLInt,
		description: "Total number of demos"
	},
	items: {
		type: new GraphQLList(DemoSchema)
	}
});
