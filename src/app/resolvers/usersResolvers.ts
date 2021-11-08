import { index, find, create } from '../services/usersService';

export const usersResolvers = {
  Query: {
    User: find,
    Users: index,
  },

  Mutation: {
    CreateUser: create
  }
};
