import {
	GraphQLObjectType,
	GraphQLList,
	GraphQLInt,
	GraphQLString,
	GraphQLNonNull
} from "graphql";

import { Profile, Demo, Store, Project, Search } from "../../controllers";
import {
	ProfileSchema,
	DemoSchema,
	StoreResponseSchema,
	DemoResponseSchema,
	ProjectResponseSchema,
	SearchResponseSchema,
	UnionSearchResultSchema,
	ProjectSchema,
	SearchType
} from "../index";

export const LeaderShipQueryRootSchema = new GraphQLObjectType({
	name: "LeaderShipAppSchema",
	description: "Schema of Leadership Demo Application",
	fields: () => ({
		profiles: {
			type: ProfileSchema,
			description: "List of all profiles",
			args: {
				category: {
					type: GraphQLString,
					description: "Profile category"
				},
				pageOffset: {
					type: GraphQLInt,
					description: "Skip n documents from the cursor"
				},
				pageLength: {
					type: GraphQLInt,
					description:
						"Cap the number of documents to be returned from the cursor"
				},
				sortBy: {
					type: GraphQLString,
					description:
						"Specify in the sort parameter the field or fields to sort by"
				},
				orderBy: {
					type: GraphQLInt,
					description:
						"1 or -1 to specify an ascending or descending sort respectively"
				}
			},
			resolve: Profile.find
		},
		profile: {
			type: ProfileSchema,
			description: "Get profile by id",
			args: {
				id: {
					type: new GraphQLNonNull(GraphQLString),
					description: "User id"
				}
			},
			resolve: Profile.findOne
		},
		demos: {
			type: DemoResponseSchema,
			description: "List of all demos",
			args: {
				pageOffset: {
					type: GraphQLInt,
					description: "Skip n documents from the cursor"
				},
				pageLength: {
					type: GraphQLInt,
					description:
						"Cap the number of documents to be returned from the cursor"
				},
				sortBy: {
					type: GraphQLString,
					description:
						"Specify in the sort parameter the field or fields to sort by"
				},
				orderBy: {
					type: GraphQLInt,
					description:
						"1 or -1 to specify an ascending or descending sort respectively"
				}
			},
			resolve: Demo.find
		},
		demo: {
			type: DemoSchema,
			description: "Get demo by id",
			args: {
				key: {
					type: GraphQLString,
					description: "demo key"
				},
				id: {
					type: new GraphQLNonNull(GraphQLString),
					description: "demo id"
				}
			},
			resolve: Demo.findOne
		},
		store: {
			type: StoreResponseSchema,
			description: "Get state from store",
			args: {
				key: {
					type: new GraphQLNonNull(GraphQLString),
					description: "Key name"
				}
			},
			resolve: Store.getKeys
		},
		projects: {
			type: ProjectResponseSchema,
			description: "List of all projects",
			args: {
				pageOffset: {
					type: GraphQLInt,
					description: "Skip n documents from the cursor"
				},
				pageLength: {
					type: GraphQLInt,
					description:
						"Cap the number of documents to be returned from the cursor"
				},
				sortBy: {
					type: GraphQLString,
					description:
						"Specify in the sort parameter the field or fields to sort by"
				},
				orderBy: {
					type: GraphQLInt,
					description:
						"1 or -1 to specify an ascending or descending sort respectively"
				}
			},
			resolve: Project.find
		},
		project: {
			type: ProjectSchema,
			description: "Get project by id",
			args: {
				key: {
					type: GraphQLString,
					description: "project key"
				},
				value: {
					type: new GraphQLNonNull(GraphQLString),
					description: "project id"
				}
			},
			resolve: Project.findOne
		},
		search: {
			type: SearchResponseSchema,
			description: "Search profiles, projects and presentations",
			args: {
				query: {
					type: new GraphQLNonNull(GraphQLString),
					description: "search term"
				},
				pageOffset: {
					type: GraphQLInt,
					description: "Skip n documents from the cursor"
				},
				pageLength: {
					type: GraphQLInt,
					description:
						"Cap the number of documents to be returned from the cursor"
				}
			},
			resolve: Search.find
		},
		searchOne: {
			type: SearchType,
			description: "Search profiles, projects and presentations",
			args: {
				category: {
					type: GraphQLString,
					description: "search term"
				},
				query: {
					type: new GraphQLNonNull(GraphQLString),
					description: "search term"
				},
				pageOffset: {
					type: GraphQLInt,
					description: "Skip n documents from the cursor"
				},
				pageLength: {
					type: GraphQLInt,
					description:
						"Cap the number of documents to be returned from the cursor"
				}
			},
			resolve: Search.findOne
		}
	})
});

export * from "./profile.schema";
export * from "./skill.schema";
export * from "./demo.schema";
export * from "./store.schema";
export * from "./project.schema";
export * from "./search.schema";
