import { GraphQLObjectType } from "graphql";
import { DemoType } from "../types";

export const DemoSchema = new GraphQLObjectType({
	name: "DEMO",
	description: "Demo schema",
	fields: DemoType
});
