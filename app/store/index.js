import { GraphQLSchema } from "graphql";
import { LeaderShipQueryRootSchema } from "./schema";
import { LeaderShipAppMutationRootType } from "./mutations";

// This is the schema declaration
export const LeadershipAppSchema = new GraphQLSchema({
	query: LeaderShipQueryRootSchema,
	mutation: LeaderShipAppMutationRootType
});

export * from "./schema";
export * from "./mutations";
export * from "./types";
