const graphql = require('graphql');
const db = require('../services/psqlAdapter.js');
const { GraphQLObjectType, 
        GraphQLID,
        GraphQLString } = graphql;

const {MessageType} = require('./types')

const RootMutation = new GraphWLObjectType({
    name: "RootMutationType",
    type: "Mutation",
    fields: {
        addMessage: {
            type: MessageType
        }
    }
})