import { client } from "../config/connection";

export const Project = {
	find: async (
		_,
		{
			pageOffset = 0,
			pageLength = 10,
			sortBy = "_firstCreatedTimestamp",
			orderBy = "desc"
		}
	) => {
		const result = await client.search({
			index: "aic",
			type: "projects",
			body: {
				from: pageOffset,
				size: pageLength,
				query: {
					bool: {
						must: { match: { is_approved: 1 } }
					}
				},
				sort: [{ [sortBy]: { order: orderBy } }]
			}
		});

		return {
			total: result.hits.total,
			items: result.hits.hits.map(project => project._source)
		};
	},
	findOne: async (_, { key = "project_name", value }) => {
		try {
			const result = await client.search({
				index: "aic",
				type: "projects",
				body: {
					from: 0,
					size: 1,
					query: {
						bool: {
							must: { match: { [key]: value } }
						}
					}
				}
			});

			const project_members = await client.search({
				index: "aic",
				type: "project_members",
				body: {
					from: 0,
					size: 5,
					query: {
						bool: {
							must: {
								match: { project_id: result.hits.hits[0]._source.project_id }
							}
						}
					}
				}
			});
			result.hits.hits[0]._source.project_members = project_members;
			return result.hits.hits[0]._source;
		} catch (error) {
			return error;
		}
	},
	save: () => {},
	update: () => {},
	delete: () => {}
};
