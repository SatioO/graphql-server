import { GraphQLObjectType } from "graphql";
import { SkillType } from "../types";

export const SkillSchema = new GraphQLObjectType({
	name: "SKILLS",
	description: "Skills schema",
	fields: SkillType
});
