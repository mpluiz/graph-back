import { index, find } from '../services/postsService';

export const postsResolvers = {
  Query: {
    Post: find,
    Posts: index,
  },
};
