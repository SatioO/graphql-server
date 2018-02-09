import {
	GraphQLID,
	GraphQLBoolean,
	GraphQLString,
	GraphQLList,
	GraphQLObjectType,
	GraphQLUnionType
} from "graphql";

export const SkillType = () => ({
	ui: { type: new GraphQLList(GraphQLString), description: "UI skills" },
	app: {
		type: new GraphQLList(GraphQLString),
		description: "Application Skills"
	},
	db: { type: new GraphQLList(GraphQLString), description: "Database Skills" },
	cloud: { type: new GraphQLList(GraphQLString), description: "Cloud Skills" },
	devops: { type: new GraphQLList(GraphQLString), description: "DevOps Skills" }
});
