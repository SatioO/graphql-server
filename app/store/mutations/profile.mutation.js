import { GraphQLNonNull, GraphQLString, GraphQLID } from "graphql";
import { ProfileResponseSchema, ProfileInputSchema } from "../schema";
import { Profile } from "../../controllers";

export const CreateProfile = {
	type: new GraphQLNonNull(ProfileResponseSchema),
	description: "Create Profile",
	args: {
		data: {
			name: "Profile Data",
			type: ProfileInputSchema
		}
	},
	resolve: Profile.save
};

export const UpdateProfile = {
	type: new GraphQLNonNull(ProfileResponseSchema),
	description: "Update Profile",
	args: {
		data: {
			name: "Profile Data",
			type: ProfileInputSchema
		}
	},
	resolve: Profile.update
};

export const DeleteProfile = {
	type: new GraphQLNonNull(ProfileResponseSchema),
	description: "Delete Profile",
	args: {
		id: {
			name: "Profile ID",
			type: new GraphQLNonNull(GraphQLID)
		}
	},
	resolve: Profile.delete
};
