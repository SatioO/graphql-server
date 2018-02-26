import {
    GraphQLNonNull,
    GraphQLString,
    GraphQLObjectType,
    GraphQLID,
    GraphQLInputObjectType,
    GraphQLBoolean,
    GraphQLInt,
    GraphQLList
} from "graphql";
import { Intents } from "../../controllers";
import { IntentsInput, IntentsResponse } from "../types/intents.types";

export const CreateIntents = {
    type: IntentsResponse,
    description: "Create Intents",
    args: {
        input: {
            type: new GraphQLNonNull(IntentsInput)
        }
    },
    resolve: (obj, { input }, { req }) => {
        return Intents.create(input,req);
    }
};
