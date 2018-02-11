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

import { SkillSchema, DemoSchema, SkillInputSchema } from "../schema";
import { Slides } from "./slide.types";

export const DemoResponseType = () => ({
	total: {
		type: GraphQLInt,
		description: "Total number of demos"
	},
	items: {
		type: new GraphQLList(DemoSchema)
	}
});

export const DemoType = () => ({
	_id: { type: new GraphQLNonNull(GraphQLID), description: "Demo ID" },
	thumbnail: {
		type: GraphQLString,
		description: "Demo Picture"
	},
	id: {
		type: GraphQLString,
		description: "Unique Demo ID"
	},
	title: { type: GraphQLString, description: "Demo Title" },
	tagline: {
		type: new GraphQLNonNull(GraphQLString),
		description: "Demo Tagline"
	},
	authors: {
		type: new GraphQLList(GraphQLString),
		description: "Demo authors"
	},
	related: {
		type: new GraphQLList(DemoSchema),
		description: "Related Demos"
	},
	categories: { type: GraphQLString, description: "demo category" },
	techstack: {
		type: SkillSchema,
		description: "Demo techstack"
	},
	description: { type: GraphQLString, description: "Demo description" },
	type: { type: GraphQLString, description: "Demo Type" },
	embedUrl: { type: GraphQLString, description: "Demo Url" },
	slides: { type: new GraphQLList(Slides), description: "Demo Source" },
	milestone: { type: GraphQLString, description: "Demo Milestone" },
	_firstCreatedBy: {
		type: GraphQLString,
		description: "Demo Created By"
	},
	_firstCreatedTimestamp: {
		type: GraphQLString,
		description: "Demo created date"
	},
	_lastUpdatedBy: {
		type: GraphQLString,
		description: "Demo Updated By"
	},
	_lastUpdatedTimestamp: {
		type: GraphQLString,
		description: "Demo Updated Date"
	}
});

export const DemoInputType = () => ({
	_id: { type: GraphQLID, description: "Demo ID" },
	thumbnail: {
		type: GraphQLString,
		description: "Demo Picture"
	},
	id: {
		type: new GraphQLNonNull(GraphQLString),
		description: "Unique Demo ID"
	},
	title: { type: new GraphQLNonNull(GraphQLString), description: "Demo Title" },
	tagline: {
		type: new GraphQLNonNull(GraphQLString),
		description: "Demo Tagline"
	},
	authors: {
		type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
		description: "Demo authors"
	},
	categories: {
		type: new GraphQLNonNull(GraphQLString),
		description: "demo category"
	},
	techstack: {
		type: new GraphQLNonNull(SkillInputSchema),
		description: "Demo techstack"
	},
	description: { type: GraphQLString, description: "Demo description" },
	type: { type: new GraphQLNonNull(GraphQLString), description: "Demo Type" },
	embedUrl: { type: GraphQLString, description: "Demo Url" },
	slides: { type: new GraphQLList(Slides), description: "Demo Source" },
	milestone: {
		type: new GraphQLNonNull(GraphQLString),
		description: "Demo Milestone"
	},
	_firstCreatedBy: {
		type: new GraphQLNonNull(GraphQLString),
		description: "Demo Created By"
	},
	_firstCreatedTimestamp: {
		type: new GraphQLNonNull(GraphQLString),
		description: "Demo created date"
	},
	_lastUpdatedBy: {
		type: new GraphQLNonNull(GraphQLString),
		description: "Demo Updated By"
	},
	_lastUpdatedTimestamp: {
		type: new GraphQLNonNull(GraphQLString),
		description: "Demo Updated Date"
	}
});
