const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

// Define GraphQL schema
const schema = buildSchema(`
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    hello: String
    user: User
  }
`);

// Sample data
const user = {
  id: "1",
  name: "Gaurav",
  email: "gaurav@example.com"
};

// Resolver functions
const root = {
  hello: () => "Hello from GraphQL!",
  user: () => user
};

// Create Express app
const app = express();

// GraphQL endpoint
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
  })
);

// Start server
app.listen(4000, () => {
  console.log("Server running at http://localhost:4000/graphql");
});