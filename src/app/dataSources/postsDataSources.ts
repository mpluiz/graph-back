import { RESTDataSource } from 'apollo-datasource-rest';

export class PostsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.API_URL;
  }

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
}
