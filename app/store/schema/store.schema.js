import { GraphQLObjectType, GraphQLString, GraphQLList } from "graphql";
import { ProfileType } from "../types";
import { Store } from "../types";

export const StoreSchema = new GraphQLObjectType({
	name: "STORE",
	description: "Store schema",
	fields: () => ({
		name: { type: GraphQLString, description: "Store Description" },
		result: { type: new GraphQLList(Store), description: "Store result" }
	})
});
