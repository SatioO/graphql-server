import { ProfileModel } from "../models";
import { Store } from "./Store";
import { client } from "../config/connection";

export const Profile = {
	find: async (
		_,
		{
			category = "none",
			pageOffset = 0,
			pageLength = 10,
			sortBy = "id",
			orderBy = 1
		}
	) => {
		try {
			const profiles = await client.search({
				index: "aic",
				type: "profiles",
				body: {
					from: pageOffset,
					size: pageLength,
					query: {
						bool: {
							must: {
								term: { profileStatus: "active" }
							},
							filter: {
								term: { aiclevel: category }
							}
						}
					},
					aggs: {
						ui: {
							terms: {
								field: "skills.ui"
							}
						},
						db: {
							terms: {
								field: "skills.db"
							}
						},
						cloud: {
							terms: {
								field: "skills.cloud"
							}
						},
						app: {
							terms: {
								field: "skills.app"
							}
						},
						devops: {
							terms: {
								field: "skills.devops"
							}
						}
					}
				}
			});

			const locations = Store.getKeys(_, { key: "location" });
			const designations = Store.getKeys(_, { key: "designation" });

			const result = profiles.hits.hits.map(profile => {
				if (!!profile && !!profile._source.location) {
					locations.result.map(location => {
						if (String(location.id) === profile._source.location) {
							profile._source.location = location.description;
						}
					});
				}
				if (!!profile && !!profile._source.designation) {
					designations.result.map(designation => {
						if (String(designation.id) === profile._source.designation) {
							profile._source.designation = designation.description;
						}
					});
				}

				if (!!profile && !!profile._source.skills) {
					for (const skill in profile._source.skills) {
						if (typeof profile._source.skills[skill] === "string") {
							profile._source.skills[skill] = [profile._source.skills[skill]];
						}
					}
				}
				return profile._source;
			});

			return {
				pageOffset: pageOffset,
				pageLength: pageLength,
				total: profiles.hits.total,
				items: result
			};
		} catch (error) {
			return error;
		}
	},
	findOne: async (_, { id, pageOffset = 0, pageLength = 1 }) => {
		try {
			const profiles = await client.search({
				index: "aic",
				type: "profiles",
				body: {
					from: pageOffset,
					size: pageLength,
					query: {
						bool: {
							must: {
								term: { profileStatus: "active" }
							},
							filter: {
								term: { id: id }
							}
						}
					}
				}
			});

			const locations = Store.getKeys(_, { key: "location" });
			const designations = Store.getKeys(_, { key: "designation" });

			const result = profiles.hits.hits.map(profile => {
				if (!!profile && !!profile._source.location) {
					locations.result.map(location => {
						if (String(location.id) === profile._source.location) {
							profile._source.location = location.description;
						}
					});
				}
				if (!!profile && !!profile._source.designation) {
					designations.result.map(designation => {
						if (String(designation.id) === profile._source.designation) {
							profile._source.designation = designation.description;
						}
					});
				}

				if (!!profile && !!profile._source.skills) {
					for (const skill in profile._source.skills) {
						if (typeof profile._source.skills[skill] === "string") {
							profile._source.skills[skill] = [profile._source.skills[skill]];
						}
					}
				}
				return profile._source;
			});

			return {
				pageOffset: pageOffset,
				pageLength: pageLength,
				total: profiles.hits.total,
				items: result
			};
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
