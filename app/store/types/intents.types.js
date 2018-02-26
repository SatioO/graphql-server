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

/**
 * for responses types
 */
const IntentsStatusResponse = new GraphQLObjectType({
    name: 'IntentsStatusResponse',
    fields: () => {
        return {
            code: { type: new GraphQLNonNull(GraphQLString) },
            errorType: { type: new GraphQLNonNull(GraphQLString) },
        };
    }
});

export const IntentsResponse = new GraphQLObjectType({
    name: 'IntentsResponse',
    fields: () => {
        return {
            id: { type: new GraphQLNonNull(GraphQLString) },
            status: { type: new GraphQLNonNull(IntentsStatusResponse) },
        };
    }

});

/**
 * for inputs types
 */
const IntentsUserSaysDataInput = new GraphQLInputObjectType({
    name: 'IntentsUserSaysDataInput',
    fields: () => {
        return {
            text: { type: new GraphQLNonNull(GraphQLString) },
            userDefined: { type: GraphQLBoolean },
        };
    }
});

const IntentsUserSaysInput = new GraphQLInputObjectType({
    name: 'IntentsUserSaysInput',
    fields: () => {
        return {
            count: { type: new GraphQLNonNull(GraphQLInt) },
            data: { type: new GraphQLList(IntentsUserSaysDataInput) },
        };
    }
});

export const IntentsInput = new GraphQLInputObjectType({
    name: 'IntentsInput',
    fields: {
        fallbackIntent: { type: GraphQLBoolean },
        name: { type: new GraphQLNonNull(GraphQLString) },
        priority: { type: GraphQLInt },
        userSays : {
			type: new GraphQLList(IntentsUserSaysInput),
			description: "intents items"
		},
        webhookForSlotFilling: { type: GraphQLBoolean },
        webhookUsed: { type: GraphQLBoolean }
    }
});







