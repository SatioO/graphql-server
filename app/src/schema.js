import {
	GraphQLString,
	GraphQLList,
	GraphQLObjectType,
	GraphQLNonNull,
	GraphQLSchema
} from "graphql";

import { Posts, Authors } from "./data";
import _ from "lodash";

const AuthorType = new GraphQLObjectType({
	name: "Author",
	description: "This represent an author",
	fields: () => ({
		id: { type: new GraphQLNonNull(GraphQLString) },
		name: { type: new GraphQLNonNull(GraphQLString) },
		twitterHandle: { type: GraphQLString }
	})
});

const PostType = new GraphQLObjectType({
	name: "Post",
	description: "This represent a Post",
	fields: () => ({
		id: { type: new GraphQLNonNull(GraphQLString) },
		title: { type: new GraphQLNonNull(GraphQLString) },
		body: { type: GraphQLString },
		author: {
			type: AuthorType,
			resolve: function(post) {
				return _.find(Authors, a => a.id == post.author_id);
			}
		}
	})
});

// This is the Root Query
const BlogQueryRootType = new GraphQLObjectType({
	name: "BlogAppSchema",
	description: "Blog Application Schema Root",
	fields: () => ({
		authors: {
			type: new GraphQLList(AuthorType),
			description: "List of all Authors",
			resolve: function() {
				return Authors;
			}
		},
		posts: {
			type: new GraphQLList(PostType),
			description: "List of all Posts",
			resolve: function() {
				return Posts;
			}
		}
	})
});

// This is the schema declaration
const BlogAppSchema = new GraphQLSchema({
	query: BlogQueryRootType
});

export default BlogAppSchema;
