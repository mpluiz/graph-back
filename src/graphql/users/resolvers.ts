async function getUser(_, { id }, { api }) {
  const response = await api.get(`/users/${id}`);
  return response.data;
}

async function getUsers(_, {filters}, { api }) {
  const params = new URLSearchParams(filters)
  const response = await api.get(`/users?${params.toString()}`);
  return response.data;
}

export const usersResolvers = {
  Query: {
    User: getUser,
    Users: getUsers,
  },
};
