import { usersTypeDefs } from './users/typeDefs';
import { usersResolvers } from './users/resolvers';
import { postsResolvers } from './posts/resolvers';
import { postsTypeDefs } from './posts/typeDefs';
import { postsFiltersTypeDefs } from './filters/postsFilters';
import { usersFiltersTypeDefs } from './filters/usersFilters';


export const typeDefs = [
  usersTypeDefs,
  postsTypeDefs,
  postsFiltersTypeDefs,
  usersFiltersTypeDefs,
];
export const resolvers = [usersResolvers, postsResolvers];
