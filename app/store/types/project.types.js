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

import { ProjectSchema, ProjectDocsSchema, SkillSchema } from "../schema";

export const ProjectResponseType = () => ({
	total: {
		type: GraphQLInt,
		description: "Total number of projects"
	},
	items: {
		type: new GraphQLList(ProjectSchema)
	}
});

export const ProjectDocs = () => ({
	title: {
		type: GraphQLString,
		description: "Project document title"
	},
	url: {
		type: GraphQLString,
		description: "Project document url"
	}
});

export const ProjectType = () => ({
	project_name: { type: GraphQLString, description: "Project name" },
	start_date: { type: GraphQLString, description: "Project started on" },
	status: { type: GraphQLString, description: "Project current status" },
	tags: { type: GraphQLString, description: "Project tags" },
	team_size: { type: GraphQLInt, description: "Project team size" },
	techstack: { type: SkillSchema, description: "Project techstack" },
	project_manager: { type: GraphQLString, description: "Project manager" },
	active: { type: GraphQLString, description: "Project status" },
	approved_by: { type: GraphQLString, description: "Project approved by" },
	approved_on: { type: GraphQLString, description: "Project approved on" },
	client_id: { type: GraphQLID, description: "Project approved on" },
	client_name: { type: GraphQLString, description: "Project client name" },
	description: { type: GraphQLString, description: "Project description" },
	end_date: { type: GraphQLString, description: "Project ending on" },
	is_approved: { type: GraphQLString, description: "Project approval status" },
	manager: { type: GraphQLString, description: "Project delivery manager" },
	photograph: { type: GraphQLString, description: "Project delivery manager" },
	project_docs: {
		type: new GraphQLList(ProjectDocsSchema),
		description: "Project document list"
	},
	_firstCreatedBy: {
		type: GraphQLString,
		description: "Project Created By"
	},
	_firstCreatedTimestamp: {
		type: GraphQLString,
		description: "Project created date"
	},
	_lastUpdatedBy: {
		type: GraphQLString,
		description: "Project Updated By"
	},
	_lastUpdatedTimestamp: {
		type: GraphQLString,
		description: "Project Updated Date"
	}
});
