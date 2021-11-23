import { gql } from 'apollo-server';

import { PostsAPI } from './dataSources/postsDataSources';
import { UsersAPI } from './dataSources/usersDataSources';
import { postsResolvers } from './resolvers/postsResolvers';
import { usersResolvers } from './resolvers/usersResolvers';
import { postsTypeDefs } from './typeDefs/postsTypeDefs';
import { usersTypeDefs } from './typeDefs/usersTypeDefs';

const rootTypeDefs = gql`
  type Query {
    _empty: Boolean!
  }

  type Mutation {
    _empty: Boolean!
  }
`;

const rootResolvers = {
  Query: {
    _empty: () => true,
  },

  Mutation: {
    _empty: () => true,
  },
};

export const typeDefs = [rootTypeDefs, usersTypeDefs, postsTypeDefs];

export const resolvers = [rootResolvers, usersResolvers, postsResolvers];

export function dataSources() {
  return {
    postsApi: new PostsAPI(),
    usersApi: new UsersAPI(),
  };
}
