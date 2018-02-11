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

import { ProjectSchema, ProjectDocsSchema } from "../schema";

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
	project_name: { type: GraphQLString, description: "project name" },
	start_date: { type: GraphQLString, description: "project started on" },
	status: { type: GraphQLString, description: "project current status" },
	tags: { type: GraphQLString, description: "project tags" },
	team_size: { type: GraphQLInt, description: "project team size" },
	techstack: { type: GraphQLString, description: "project technical stack" },
	project_manager: { type: GraphQLString, description: "project manager" },
	active: { type: GraphQLString, description: "project status" },
	approved_by: { type: GraphQLString, description: "project approved by" },
	approved_on: { type: GraphQLString, description: "project approved on" },
	client_id: { type: GraphQLID, description: "project approved on" },
	client_name: { type: GraphQLString, description: "project client name" },
	description: { type: GraphQLString, description: "project description" },
	end_date: { type: GraphQLString, description: "project ending on" },
	is_approved: { type: GraphQLString, description: "project approval status" },
	manager: { type: GraphQLString, description: "project delivery manager" },
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
