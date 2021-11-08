export async function index(_, { filters }, { dataSources }) {
  const params = new URLSearchParams(filters)
  return dataSources.usersApi.getUsers(params)
}

export async function find(_, { id }, { dataSources }) {
  return dataSources.usersApi.getUser(id)
}

export async function create() {
}

export async function update() {
}

export async function remove() {
}
