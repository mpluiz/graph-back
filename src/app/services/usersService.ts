export async function index(_, { filters }, { dataSources }) {
  const params = new URLSearchParams(filters);
  return dataSources.usersApi.getUsers(params);
}

export async function find(_, { id }, { dataSources }) {
  return dataSources.usersApi.getUser(id);
}

export async function create(_, { data }, { dataSources }) {
  data = {
    ...data,
    indexRef: Math.floor(Math.random() * 100),
    createdAt: new Date().toISOString(),
  };

  return dataSources.usersApi.createUser(data);
}

export async function update(_, { id, data }, { dataSources }) {
  return dataSources.usersApi.updateUser(id, data);
}

export async function remove(_, { id }, { dataSources }) {
  const response = await dataSources.usersApi.deleteUser(id);
  return Boolean(response);
}
