import { index, find } from '../services/usersService';

export const usersResolvers = {
  Query: {
    User: find,
    Users: index,
  },
};
