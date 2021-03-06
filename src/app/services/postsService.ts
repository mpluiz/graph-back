export async function index(_, { filters }, { dataSources }) {
  const params = new URLSearchParams(filters);
  return dataSources.postsApi.getPosts(params);
}

export async function find(_, { id }, { dataSources }) {
  return dataSources.postsApi.getPost(id);
}

export async function create(_, { data }, { dataSources }) {
  const post = {
    ...data,
    indexRef: Math.floor(Math.random() * 100),
    createdAt: new Date().toISOString(),
  };

  return dataSources.postsApi.createPost(post);
}

export async function update(_, { id, data }, { dataSources }) {
  return dataSources.postsApi.updatePost(id, data);
}

export async function remove(_, { id }, { dataSources }) {
  const response = await dataSources.postsApi.deletePost(id);
  return Boolean(response);
}

export async function getUser(parent, _, { dataSources }) {
  return dataSources.postsApi.getUser(parent.userId);
}
