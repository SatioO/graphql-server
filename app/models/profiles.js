import mongoose from "mongoose";

const ProfileSchema = mongoose.Schema(
	{
		provider: { type: String, required: [true, "cant't be blank"] },
		id: { type: String, required: [true, "cant't be blank"] },
		name: { type: String },
		email: { type: String, required: [true, "cant't be blank"] },
		photograph: { type: String },
		profileStatus: { type: String, required: [true, "cant't be blank"] },
		designation: { type: String },
		introduction: { type: String },
		blogUrl: { type: String },
		github: { type: String },
		location: { type: String },
		education: { type: String },
		aiclevel: { type: String, required: [true, "cant't be blank"] },
		skills: { type: mongoose.Schema.Types.Mixed },
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

export const ProfileModel = mongoose.model("profiles", ProfileSchema);
