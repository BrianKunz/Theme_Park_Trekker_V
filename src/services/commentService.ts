import axios, { AxiosInstance, AxiosResponse } from "axios";

class CommentService {
  private instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({
      baseURL: "http://localhost:3000",
    });
    this.instance.interceptors.response.use(this.responseInterceptor);
  }
  private responseInterceptor({ data }: AxiosResponse<any, any>) {
    return data;
  }

  async getAll() {
    return await this.instance.get("/comments/");
  }
  async getOne(id: string) {
    return await this.instance.get(`/comments/${id}`);
  }
  async create(comment: Comment) {
    return await this.instance.post("/comments", { ...comment });
  }
  async update(id: string, comment: Comment) {
    return await this.instance.put(`/comments/${id}`, { ...comment });
  }
  async delete(id: string) {
    return await this.instance.delete(`/comments/${id}`);
  }
}

export const commentService = new CommentService();
