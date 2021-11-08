export async function index(_, { filters }, { dataSources }) {
  const params = new URLSearchParams(filters)
  return dataSources.postsApi.getPosts(params)
}

export async function find(_, { id }, { dataSources }) {
  return dataSources.postsApi.getPost(id)
}

export async function create() {
}

export async function update() {
}

export async function remove() {
}
