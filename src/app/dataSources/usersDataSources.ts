import { RESTDataSource } from 'apollo-datasource-rest';

export class UsersAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.API_URL;
  }

  async getUser(id) {
    return this.get(`/users/${id}`);
  }

  async getUsers(params = {}) {
    return this.get('/users', params);
  }

  async createUser(data) {
    return this.post('/users', data);
  }

  async updateUser(id, data) {
    return this.patch(`/users/${id}`, data);
  }

  async deleteUser(id) {
    return this.delete(`/users/${id}`);
  }
}
