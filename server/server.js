import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { readFile } from "node:fs/promises";
import { resolvers } from "./resolvers.js";

const typeDefs = await readFile("./server/schema.graphql", "utf-8");

const apolloServer = new ApolloServer({ typeDefs, resolvers });

const port = "9999";
const { url } = await startStandaloneServer(apolloServer, { listen: { port } });
console.log(`Server is running at ${url}`);
