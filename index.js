const express = require('express');
const graphqlHTTP = require('express-graphql');
const graphql = require('graphql');
const { GraphQLSchema } = graphql;
const db = require('./services/psqlAdapter')
const { query } = require('./schemas/queries');
const { mutation } = require('./schemas/mutations.js')

const port = process.env.PORT || 3001
const app = express();

const schema = new GraphQLSchema({
    query
})

app.use('/', graphqlHTTP({
    schema: schema,
    graphiql: true,
}));


// app.get('/', (req,res) => {
//     res.send('Root Route')
// });


app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
});