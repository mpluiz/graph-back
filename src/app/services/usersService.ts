export async function index(_, { filters }, { dataSources }) {
  const params = new URLSearchParams(filters);
  return dataSources.usersApi.getUsers(params);
}

export async function find(_, { id }, { dataSources }) {
  return dataSources.usersApi.getUser(id);
}

export async function create(_, { data }, { dataSources }) {
  const user = {
    ...data,
    indexRef: Math.floor(Math.random() * 100),
    createdAt: new Date().toISOString(),
  };

  return dataSources.usersApi.createUser(user);
}

export async function update(_, { id, data }, { dataSources }) {
  return dataSources.usersApi.updateUser(id, data);
}

export async function remove(_, { id }, { dataSources }) {
  const response = await dataSources.usersApi.deleteUser(id);
  return Boolean(response);
}

export async function getPosts(parent, _, { dataSources }) {
  return dataSources.usersApi.getPosts(parent.id);
}
