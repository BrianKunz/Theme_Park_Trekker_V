import axios, { AxiosInstance, AxiosResponse } from "axios";

class PostService {
  private instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({
      baseURL: "http://localhost:3001",
    });
    this.instance.interceptors.response.use(this.responseInterceptor);
  }
  private responseInterceptor({ data }: AxiosResponse<any, any>) {
    return data;
  }

  async getAll() {
    return await this.instance.get("/posts/");
  }
  async getOne(id: string) {
    return await this.instance.get(`/posts/${id}`);
  }
  async create(post: Post) {
    return await this.instance.post("/posts", { ...post });
  }
  async update(id: string, post: Post) {
    return await this.instance.put(`/posts/${id}`, { ...post });
  }
  async delete(id: string) {
    return await this.instance.delete(`/posts/${id}`);
  }
}

export const postService = new PostService();
