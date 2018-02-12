import { DemoModel } from "../models";
import { client } from "../config/connection";

export const Demo = {
	find: async (
		_,
		{
			pageOffset = 0,
			pageLength = 10,
			sortBy = "_firstCreatedTimestamp",
			orderBy = "desc"
		}
	) => {
		try {
			const result = await client.search({
				index: "aic",
				type: "presentations",
				body: {
					from: pageOffset,
					size: pageLength,
					query: {
						bool: {
							should: [
								{ term: { milestone: "published" } },
								{ term: { milestone: "approved" } }
							]
						}
					},
					sort: [{ [sortBy]: { order: orderBy } }]
				}
			});
			return {
				total: result.hits.total,
				items: result.hits.hits.map(demo => demo._source)
			};
		} catch (error) {
			return error;
		}
	},
	findOne: async (_, { key = "id", id }) => {
		try {
			const result = await client.search({
				index: "aic",
				type: "presentations",
				body: {
					from: 0,
					size: 1,
					query: {
						bool: {
							must: { match: { [key]: id } }
						}
					}
				}
			});
			const source = result.hits.hits[0]._source;

			const related = await client.search({
				index: "aic",
				type: "presentations",
				body: {
					from: 0,
					size: 5,
					query: {
						bool: {
							must: { match: { categories: source.categories } },
							should: [
								{ term: { milestone: "published" } },
								{ term: { milestone: "approved" } }
							]
						}
					}
				}
			});

			source.related = related.hits.hits.map(demo => demo._source);
			return source;
		} catch (error) {
			return error;
		}
	},
	save: async (_, { data }) => {
		try {
			const demoModel = new DemoModel(data);
			const response = await demoModel.save();
			return await DemoModel.findOne({ _id: response._id });
		} catch (error) {
			return error;
		}
	},
	update: async (_, { data }) => {
		try {
			const id = data.id;
			delete data.id;
			await DemoModel.update({ id: id }, data);
			return await Demo.getDemoById(null, { id });
		} catch (error) {
			return error;
		}
	},
	delete: async (_, { id }) => {
		try {
			const response = await DemoModel.update(
				{ id: id },
				{ milestone: "deleted" }
			);
			return await Demo.getDemoById(null, { id });
		} catch (error) {
			return error;
		}
	}
};
