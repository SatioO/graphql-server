import { GraphQLNonNull, GraphQLString, GraphQLID } from "graphql";
import { DemoSchema, DemoInputSchema } from "../schema";
import { Demo } from "../../controllers";

export const CreateDemo = {
	type: new GraphQLNonNull(DemoSchema),
	description: "Create Demo",
	args: {
		data: {
			name: "Demo Data",
			type: DemoInputSchema
		}
	},
	resolve: Demo.createDemo
};

export const UpdateDemo = {
	type: new GraphQLNonNull(DemoSchema),
	description: "Update Demo",
	args: {
		data: {
			name: "Demo Data",
			type: DemoInputSchema
		}
	},
	resolve: Demo.updateDemo
};

export const DeleteDemo = {
	type: new GraphQLNonNull(DemoSchema),
	description: "Delete Demo",
	args: {
		id: {
			name: "Demo ID",
			type: new GraphQLNonNull(GraphQLID)
		}
	},
	resolve: Demo.deleteDemo
};
