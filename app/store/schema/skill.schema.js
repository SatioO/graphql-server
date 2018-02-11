import { GraphQLObjectType, GraphQLInputObjectType } from "graphql";
import { SkillType } from "../types";

export const SkillSchema = new GraphQLObjectType({
	name: "SKILLS",
	description: "Skills schema",
	fields: SkillType
});

export const SkillInputSchema = new GraphQLInputObjectType({
	name: "SKILLSINPUT",
	description: "Skills Input schema",
	fields: SkillType
});
