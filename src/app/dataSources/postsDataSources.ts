import { RESTDataSource } from 'apollo-datasource-rest';
import DataLoader from 'dataloader';

export class PostsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.API_URL;
  }

  private getUserLoader = new DataLoader(async (keys) => {
    const params = `?id=${keys.join('&id=')}`;
    const userList = await this.get('/users', params);

    return keys.map(id =>
      userList.find((user) => user.id === id),
    );
  });

  async getPost(id) {
    return this.get(`/posts/${id}`);
  }

  async getPosts(params = {}) {
    return this.get('/posts', params);
  }

  async createPost(data) {
    return this.post('/posts', data);
  }

  async updatePost(id, data) {
    return this.patch(`/posts/${id}`, data);
  }

  async deletePost(id) {
    return this.delete(`/posts/${id}`);
  }

  async getUser(keys) {
    return this.getUserLoader.load(keys);
  }
}
