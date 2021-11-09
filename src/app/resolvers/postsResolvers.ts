import { index, find, create, update, remove } from '../services/postsService';

export const postsResolvers = {
  Query: {
    Post: find,
    Posts: index,
  },

  Mutation: {
    CreatePost: create,
    UpdatePost: update,
    DeletePost: remove,
  },
};
