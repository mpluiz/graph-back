import { RESTDataSource } from 'apollo-datasource-rest';

export class UsersAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.API_URL
  }

  async getUser(id) {
    return this.get(`/users/${id}`);
  }

  async getUsers(params = {}) {
    return this.get('/users', params);
  }
}
