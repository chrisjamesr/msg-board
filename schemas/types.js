const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString } = graphql;

const makeExecutableSchema = require('graphql-tools').makeExecutableSchema;
const resolver = require('../resolver').resolver;

const MessageType = new GraphQLObjectType({
    name: "Message",
    type: "Query",
    fields: {
        id: {type: GraphQLString },
        content: {type: GraphQLString },
        user: {type: GraphQLString }
    }
});

const UserType = new GraphQLObjectType({
    name: "User",
    type: "Query",
    fields: {
        id: {type: GraphQLString },
        email: {type: GraphQLString }
    }
});

exports.MessageType = MessageType;
exports.UserType = UserType;