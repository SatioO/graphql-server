import { ProfileModel } from "../models";
import { Store } from "./Store";

export const Profile = {
	find: async (
		_,
		{ pageOffset = 0, pageLength = 10, sortBy = "id", orderBy = 1 }
	) => {
		try {
			const response = await ProfileModel.find({ profileStatus: "active" })
				.sort({ [sortBy]: orderBy })
				.skip(pageOffset)
				.limit(pageLength);

			const locations = Store.getKeys(_, { key: "location" });
			const designations = Store.getKeys(_, { key: "designation" });

			return response.filter(profile => {
				if (!!profile && !!profile.location) {
					locations.result.map(location => {
						if (String(location.id) === profile.location) {
							profile.location = location.description;
						}
					});
				}

				if (!!profile && !!profile.designation) {
					designations.result.map(designation => {
						if (String(designation.id) === profile.designation) {
							profile.designation = designation.description;
						}
					});
				}

				if (!!profile && !!profile.skills) {
					for (const skill in profile.skills) {
						if (typeof profile.skills[skill] === "string") {
							profile.skills[skill] = [profile.skills[skill]];
						}
					}
				}

				return profile;
			});
		} catch (error) {
			return error;
		}
	},
	findOne: async (_, { id }) => {
		try {
			const profile = await ProfileModel.findOne({ id: id });
			const locations = Store.getKeys(_, { key: "location" });
			const designations = Store.getKeys(_, { key: "designation" });

			if (!!profile && !!profile.skills) {
				for (const skill in profile.skills) {
					if (typeof profile.skills[skill] === "string") {
						profile.skills[skill] = [profile.skills[skill]];
					}
				}
			}

			if (!!profile && !!profile.location) {
				locations.result.map(location => {
					if (String(location.id) === profile.location) {
						profile.location = location.description;
					}
				});
			}

			if (!!profile && !!profile.designation) {
				designations.result.map(designation => {
					if (String(designation.id) === profile.designation) {
						profile.designation = designation.description;
					}
				});
			}

			return profile;
		} catch (error) {
			return error;
		}
	},
	delete: async (_, { id }) => {
		try {
			await ProfileModel.findOneAndUpdate(
				{ id: id },
				{ $set: { profileStatus: "inactive" } }
			);

			return await ProfileModel.findOne({ id: id });
		} catch (error) {
			return error;
		}
	},
	update: async (_, { data }) => {
		try {
			const id = data.id;
			delete data.id;
			await ProfileModel.update({ id: id }, data);
			return await ProfileModel.findOne({ id: id });
		} catch (error) {
			return error;
		}
	},
	create: async (_, { data }) => {
		try {
			const profileModel = new ProfileModel(data);
			const response = await profileModel.save();
			return await ProfileModel.findOne({ _id: response._id });
		} catch (error) {
			return error;
		}
	}
};
