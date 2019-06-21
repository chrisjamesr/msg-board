const express = require('express');
const graphqlHTTP = require('express-graphql');
const graphql = require('graphql');

const port = process.env.PORT || 3001
const app = express();

app.use('/api', graphqlHTTP({
    schema: schema,
    graphiql: true,
}));


app.get('/', (req,res) => {
    res.send('Root Route')
});


app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
});