import { GraphQLScalarType } from "graphql";

export const Slides = new GraphQLScalarType({
	name: "Slides",
	serialize(value) {
		return value;
	}
});
