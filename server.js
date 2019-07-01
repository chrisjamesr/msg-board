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
    query,
    mutation
})

app.use('/api', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods','GET, POST');
    res.header('Access-Control-Allow-Headers', 'Content-Type,  Authorization, Content-Length, X-Requested-With');
    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
});

app.use('/api', graphqlHTTP({
    schema: schema,
    graphiql: true,
}));


// app.get('/', (req,res) => {
//     res.send('Root Route')
// });


app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
});