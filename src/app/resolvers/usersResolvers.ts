import { index, find, create, update, remove } from '../services/usersService';

export const usersResolvers = {
  Query: {
    User: find,
    Users: index,
  },

  Mutation: {
    CreateUser: create,
    UpdateUser: update,
    DeleteUser: remove
  },
};
