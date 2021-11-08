import { index, find, create } from '../services/postsService';

export const postsResolvers = {
  Query: {
    Post: find,
    Posts: index,
  },

  Mutation: {
    CreatePost: create,
  },
};
