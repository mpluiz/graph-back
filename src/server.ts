import { ApolloServer } from 'apollo-server';
import { typeDefs, resolvers } from './graphql/schema';
import { context } from './graphql/context';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context
});

server.listen(3333).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
