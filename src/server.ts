import { ApolloServer } from 'apollo-server';

import { typeDefs, resolvers, dataSources } from './app/schema';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
});

const port = process.env.APP_PORT || 3333;
server.listen(port).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
