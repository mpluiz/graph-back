import { index, find, create, update } from '../services/postsService';

export const postsResolvers = {
  Query: {
    Post: find,
    Posts: index,
  },

  Mutation: {
    CreatePost: create,
    UpdatePost: update,
  },
};
