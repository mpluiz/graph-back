async function getPost(_, { id }, { api }) {
  const response = await api.get(`/posts/${id}`);
  return response.data;
}

async function getPosts(_, { filters }, { api }) {
  const params = new URLSearchParams(filters)
  const response = await api.get(`/posts?${params.toString()}`);
  return response.data;
}

export const postsResolvers = {
  Query: {
    Post: getPost,
    Posts: getPosts,
  },
};
