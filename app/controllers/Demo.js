import { DemoModel } from "../models";

export const Demo = {
	getDemos: async (
		_,
		{ pageOffset = 0, pageLength = 10, sortBy = "id", orderBy = 1 }
	) => {
		try {
			return await DemoModel.find({
				$or: [{ milestone: "approved" }, { milestone: "published" }]
			})
				.sort({ [sortBy]: orderBy })
				.skip(pageOffset)
				.limit(pageLength);
		} catch (error) {
			return error;
		}
	},
	getDemoById: async (_, { id }) => {
		try {
			return await DemoModel.findOne({ id: id });
		} catch (error) {
			return error;
		}
	},
	createDemo: async (_, { data }) => {
		try {
			const demoModel = new DemoModel(data);
			const response = await demoModel.save();
			return await DemoModel.findOne({ _id: response._id });
		} catch (error) {
			return error;
		}
	},
	updateDemo: async (_, { data }) => {
		try {
			const id = data.id;
			delete data.id;
			await DemoModel.update({ id: id }, data);
			return await Demo.getDemoById(null, { id });
		} catch (error) {
			return error;
		}
	},
	deleteDemo: async (_, { id }) => {
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
