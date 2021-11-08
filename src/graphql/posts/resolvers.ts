async function getPost(_, { id }, { api }) {
  const response = await api.get(`/posts/${id}`);
  return response.data;
}

async function getPosts(_, __, { api }) {
  const response = await api.get('/posts');
  return response.data;
}

export const postsResolvers = {
  Query: {
    Post: getPost,
    Posts: getPosts,
  },
};
