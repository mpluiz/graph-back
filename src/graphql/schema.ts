import { usersTypeDefs } from './users/typeDefs';
import { usersResolvers } from './users/resolvers';
import { postsResolvers } from './posts/resolvers';
import { postsTypeDefs } from './posts/typeDefs';


export const typeDefs = [usersTypeDefs, postsTypeDefs];
export const resolvers = [usersResolvers, postsResolvers];
