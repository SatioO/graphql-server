import mongoose from "mongoose";

const DemoSchema = mongoose.Schema(
	{
		id: { type: String, required: [true, "cant't be blank"] },
		title: { type: String, required: [true, "cant't be blank"] },
		tagline: { type: String, required: [true, "cant't be blank"] },
		thumbnail: { type: String },
		authors: { type: Array, default: [] },
		categories: { type: String },
		techstack: { type: mongoose.Schema.Types.Mixed },
		description: { type: String },
		type: { type: String },
		embedUrl: { type: String },
		slides: { type: mongoose.Schema.Types.Mixed },
		milestone: { type: String, required: [true, "cant't be blank"] },
		_firstCreatedBy: { type: String, required: [true, "cant't be blank"] },
		_firstCreatedTimestamp: {
			type: mongoose.Schema.Types.Date,
			required: [true, "cant't be blank"]
		},
		_lastUpdatedBy: { type: String, required: [true, "cant't be blank"] },
		_lastUpdatedTimestamp: {
			type: mongoose.Schema.Types.Date,
			required: [true, "cant't be blank"]
		}
	},
	{ timestamps: true }
);

export const DemoModel = mongoose.model("demos", DemoSchema);
