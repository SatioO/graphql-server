import {
	GraphQLObjectType,
	GraphQLList,
	GraphQLInt,
	GraphQLString,
	GraphQLNonNull
} from "graphql";

import { ProfileSchema, DemoSchema, StoreSchema } from "../schema";
import { Profile, Demo, Store } from "../../controllers";
import { DemoResponseSchema } from "./demo-response.schema";

export const LeaderShipQueryRootSchema = new GraphQLObjectType({
	name: "LeaderShipAppSchema",
	description: "Schema of Leadership Demo Application",
	fields: () => ({
		profiles: {
			type: new GraphQLList(ProfileSchema),
			description: "List of all profiles",
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
			resolve: Profile.getProfiles
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
			resolve: Profile.getProfileById
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
			resolve: Demo.getDemos
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
			resolve: Demo.getDemo
		},
		store: {
			type: StoreSchema,
			description: "Get state from store",
			args: {
				key: {
					type: new GraphQLNonNull(GraphQLString),
					description: "Key name"
				}
			},
			resolve: Store.getKeys
		}
	})
});

export * from "./profile.schema";
export * from "./profile-input.schema";
export * from "./skill.schema";
export * from "./skill-input.schema";
export * from "./demo.schema";
export * from "./demo-input.schema";
export * from "./store.schema";
export * from "./demo-response.schema";
