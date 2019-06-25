const graphql = require('graphql');
const { db } = require('../services/psqlAdapter.js');
const { GraphQLObjectType, 
        GraphQLID,
        GraphQLString } = graphql;

const {MessageType} = require('./types')

const RootMutation = new GraphQLObjectType({
    name: "RootMutationType",
    type: "Mutation",
    fields: {
        addMessage: {
            type: MessageType,
            args: {
                content: {type: GraphQLString },
                email: {type: GraphQLString },
            },
            resolve(parentValue, args){
                const query = `INSERT INTO messages(content, email) VALUES ($1, $2) RETURNING *`;
                const values = [ args.content, args.email];

                return db
                        .one(query, values)
                        .then(res=> res)
                        .catch(err => console.log(err));
            }
        }
    }
});

exports.mutation = RootMutation;