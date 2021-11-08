import { ApolloServer } from 'apollo-server';
import { typeDefs, resolvers, dataSources } from './app/schema';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources
});

server.listen(3333).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
