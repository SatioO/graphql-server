import { GraphQLObjectType } from "graphql";
import { DemoResponseType } from "../types";

export const DemoResponseSchema = new GraphQLObjectType({
	name: "DEMOS",
	description: "Demo Response schema",
	fields: DemoResponseType
});
