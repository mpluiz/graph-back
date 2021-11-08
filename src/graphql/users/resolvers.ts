async function getUser(_, { id }, { api }) {
  const response = await api.get(`/users/${id}`);
  return response.data;
}

async function getUsers(_, __, { api }) {
  const response = await api.get('/users');
  return response.data;
}

export const usersResolvers = {
  Query: {
    User: getUser,
    Users: getUsers,
  },
};
