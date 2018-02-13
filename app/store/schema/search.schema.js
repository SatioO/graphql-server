import {
	GraphQLObjectType,
	GraphQLInt,
	GraphQLList,
	GraphQLInterfaceType,
	GraphQLString,
	GraphQLUnionType
} from "graphql";
import { SearchResponseType } from "../types";
import { DemoSchema, ProfileSchema, ProjectSchema } from "./index";

export const SearchResponseSchema = new GraphQLObjectType({
	name: "SEARCH",
	description: "Search Response schema",
	fields: SearchResponseType
});

export class Profiles {
	constructor(total, items) {
		this.total = total;
		this.items = items;
	}
}

export class Projects {
	constructor(total, items) {
		this.total = total;
		this.items = items;
	}
}

export class Demos {
	constructor(total, items) {
		this.total = total;
		this.items = items;
	}
}

export const SearchType = new GraphQLInterfaceType({
	name: "SEARCHTYPE",
	resolveType(obj) {
		return obj instanceof Profiles
			? SearchProfileSchema
			: obj instanceof Projects
				? SearchProjectsSchema
				: obj instanceof Demos ? SearchDemosSchema : null;
	},
	fields: {
		total: { type: GraphQLInt, description: "total number of items" }
	}
});

export const SearchProjectsSchema = new GraphQLObjectType({
	name: "SEARCHPROJECTS",
	description: "Search projects schema",
	interfaces: [SearchType],
	isTypeOf: obj => obj instanceof Projects,
	fields: {
		total: { type: GraphQLInt, description: "total number of items" },
		items: {
			type: new GraphQLList(ProjectSchema),
			description: "projects items"
		}
	}
});

export const SearchDemosSchema = new GraphQLObjectType({
	name: "SEARCHDEMOS",
	description: "Search demos schema",
	interfaces: [SearchType],
	isTypeOf: obj => obj instanceof Demos,
	fields: {
		total: { type: GraphQLInt, description: "total number of items" },
		items: { type: new GraphQLList(DemoSchema), description: "demos items" }
	}
});

export const SearchProfileSchema = new GraphQLObjectType({
	name: "SEARCHPROFILE",
	description: "Search Profile schema",
	interfaces: [SearchType],
	isTypeOf: obj => obj instanceof Profiles,
	fields: {
		total: { type: GraphQLInt, description: "total number of items" },
		items: {
			type: new GraphQLList(ProfileSchema),
			description: "profile items"
		}
	}
});

export const UnionSearchResultSchema = new GraphQLUnionType({
	name: "SEARCHUNION",
	types: [SearchDemosSchema, SearchProfileSchema, SearchProjectsSchema]
});
