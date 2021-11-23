import { RESTDataSource } from 'apollo-datasource-rest';
import DataLoader from 'dataloader';

export class UsersAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.API_URL;
  }

  private getPostsDataLoader = new DataLoader(async (keys) => {
    const params = `?userId=${keys.join('&userId=')}`;
    const postsList = await this.get('/posts', params);
    return keys.map((id) => postsList.filter((post) => post.userId === id));
  });

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

  async getPosts(keys) {
    return this.getPostsDataLoader.load(keys);
  }
}
