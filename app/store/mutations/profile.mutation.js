import { GraphQLNonNull, GraphQLString, GraphQLID } from "graphql";
import { ProfileSchema, ProfileInputSchema } from "../schema";
import { Profile } from "../../controllers";

export const CreateProfile = {
	type: new GraphQLNonNull(ProfileSchema),
	description: "Create Profile",
	args: {
		data: {
			name: "Profile Data",
			type: ProfileInputSchema
		}
	},
	resolve: Profile.createProfile
};

export const UpdateProfile = {
	type: new GraphQLNonNull(ProfileSchema),
	description: "Update Profile",
	args: {
		data: {
			name: "Profile Data",
			type: ProfileInputSchema
		}
	},
	resolve: Profile.updateProfile
};

export const DeleteProfile = {
	type: new GraphQLNonNull(ProfileSchema),
	description: "Delete Profile",
	args: {
		id: {
			name: "Profile ID",
			type: new GraphQLNonNull(GraphQLID)
		}
	},
	resolve: Profile.deleteProfile
};
