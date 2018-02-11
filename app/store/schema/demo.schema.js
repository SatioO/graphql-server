import { GraphQLObjectType, GraphQLInputObjectType } from "graphql";
import { DemoType, DemoResponseType, DemoInputType } from "../types";

export const DemoSchema = new GraphQLObjectType({
	name: "DEMO",
	description: "Demo schema",
	fields: DemoType
});

export const DemoResponseSchema = new GraphQLObjectType({
	name: "DEMOS",
	description: "Demo Response schema",
	fields: DemoResponseType
});

export const DemoInputSchema = new GraphQLInputObjectType({
	name: "DEMOINPUT",
	description: "Demo Input schema",
	fields: DemoInputType
});
