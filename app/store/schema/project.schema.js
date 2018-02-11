import { GraphQLObjectType } from "graphql";
import { ProjectResponseType, ProjectType, ProjectDocs } from "../types";

export const ProjectResponseSchema = new GraphQLObjectType({
	name: "PROJECTS",
	description: "Project Response schema",
	fields: ProjectResponseType
});

export const ProjectSchema = new GraphQLObjectType({
	name: "PROJECT",
	description: "Project schema",
	fields: ProjectType
});

export const ProjectDocsSchema = new GraphQLObjectType({
	name: "PROJECTDOCS",
	description: "Project docs schema",
	fields: ProjectDocs
});
