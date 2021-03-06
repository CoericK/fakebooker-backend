const { ApolloServer } = require("apollo-server");
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers/index");
const props = require("./config/properties");
const connectDB = require("./config/database");

const port = props.PORT;
// Connect Database
connectDB();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => ({ req }),
});

server.listen(port).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
