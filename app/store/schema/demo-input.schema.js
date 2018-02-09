import { GraphQLInputObjectType } from "graphql";
import { DemoInputType } from "../types";

export const DemoInputSchema = new GraphQLInputObjectType({
	name: "DEMOINPUT",
	description: "Demo Input schema",
	fields: DemoInputType
});
