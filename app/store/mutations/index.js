import { GraphQLObjectType } from "graphql";
import {
	DeleteProfile,
	UpdateProfile,
	CreateProfile
} from "./profile.mutation";
import { CreateIntents } from "./intents.mutation"
import { CreateDemo, UpdateDemo, DeleteDemo } from "./demo.mutation";

export const LeaderShipAppMutationRootType = new GraphQLObjectType({
	name: "LeaderShipAppMutation",
	description: "Leadership App Mutation",
	fields: () => ({
		createProfile: CreateProfile,
		updateProfile: UpdateProfile,
		deleteProfile: DeleteProfile,
		createIntents: CreateIntents,
		createDemo: CreateDemo,
		updateDemo: UpdateDemo,
		deleteDemo: DeleteDemo
	})
});

export * from "./profile.mutation";
export * from "./demo.mutation";
