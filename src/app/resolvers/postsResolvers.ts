import { index, find, create, update, remove, getUser } from '../services/postsService';

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

  Post: {
    user: getUser,
  },
};
