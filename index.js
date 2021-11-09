import express from "express";
import schema from "./schema";
import { graphqlHTTP }  from 'express-graphql'

const app = express();

app.get('/', (req, res) => {
    res.send("GraphQL is amazing!");

});

const root = { friend: () => {
    return {
        "id": 234567,
        "firstName": "Todd",
        "lastName": "Labo",
        "gender": 'male',
        "email": "me@me.com"
    }
}};

app.use('/graphql', graphqlHTTP ({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(8080, () => console.log('Running in server port localhost:8080/graphql'));