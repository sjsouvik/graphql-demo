import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = ` 
 type Query {
    greeting: String
}
`;

const resolvers = {
  Query: {
    greeting: () => "hello from the graphql server",
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

const port = "9999";
const { url } = await startStandaloneServer(apolloServer, { listen: { port } });
console.log(`Server is running at ${url}`);
