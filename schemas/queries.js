const { db } = require('../services/psqlAdapter');
const { 
    GraphQLObjectType, 
    GraphQLID,
    GraphQLList } = require("graphql");
const { MessageType, UserType } = require('./types');

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    type: "Query",
    fields: {
        messages: {
            types: GraphQLList(MessageType),
            // args: { id: { type: GraphQLID } }, 
            resolve(parentValue, args){          
                const query = 'SELECT * FROM messages'
                return db.manyOrNone(query)
                    .then(res=> res)
                    .catch(err=> console.log(err));
            }
        }
    }
});

exports.query = RootQuery;