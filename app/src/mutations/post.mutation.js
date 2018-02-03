import { GraphQLNonNull, GraphQLString } from "graphql";
import { PostType } from "../schema";

export const AddPost = {
	type: PostType,
	description: "Add a post",
	args: {
		title: {
			name: "Post title",
			type: new GraphQLNonNull(GraphQLString)
		}
	},
	resolve: (root, args) => {
		return new Promise((resolve, reject) =>
			resolve({ id: 1, title: args.title })
		);
	}
};
