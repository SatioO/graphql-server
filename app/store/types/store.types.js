import { GraphQLScalarType } from "graphql";

export const Store = new GraphQLScalarType({
	name: "Store",
	serialize(value) {
		return value;
	}
});
