export async function index(_, { filters }, { dataSources }) {
  const params = new URLSearchParams(filters);
  return dataSources.postsApi.getPosts(params);
}

export async function find(_, { id }, { dataSources }) {
  return dataSources.postsApi.getPost(id);
}

export async function create(_, { data }, { dataSources }) {
  data = {
    ...data,
    indexRef: Math.floor(Math.random() * 100),
    createdAt: new Date().toISOString()
  }

  return dataSources.postsApi.createPost(data);
}

export async function update() {
}

export async function remove() {
}
