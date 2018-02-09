import { GraphQLInputObjectType } from "graphql";
import { SkillType } from "../types";

export const SkillInputSchema = new GraphQLInputObjectType({
	name: "SKILLSINPUT",
	description: "Skills Input schema",
	fields: SkillType
});
