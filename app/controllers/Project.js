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
	findOne: () => {},
	save: () => {},
	update: () => {},
	delete: () => {}
};
