import { index, find, create, update } from '../services/usersService';

export const usersResolvers = {
  Query: {
    User: find,
    Users: index,
  },

  Mutation: {
    CreateUser: create,
    UpdateUser: update,
  },
};
