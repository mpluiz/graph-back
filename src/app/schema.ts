import { gql } from 'apollo-server';
import { usersTypeDefs } from './typeDefs/usersTypeDefs';
import { postsTypeDefs } from './typeDefs/postsTypeDefs';
import { usersResolvers } from './resolvers/usersResolvers';
import { postsResolvers } from './resolvers/postsResolvers';
import { PostsAPI } from './dataSources/postsDataSources';
import { UsersAPI } from './dataSources/usersDataSources';

const rootTypeDefs = gql`
  type Query {
    _empty: Boolean!
  }
`;

const rootResolvers = {
  Query: {
    _empty: () => true,
  },
};

export const typeDefs = [
  rootTypeDefs,
  usersTypeDefs,
  postsTypeDefs,
];

export const resolvers = [
  rootResolvers,
  usersResolvers,
  postsResolvers,
];

export function dataSources() {
  return {
    postsApi: new PostsAPI(),
    usersApi: new UsersAPI(),
  }
}
