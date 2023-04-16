import axios, { AxiosInstance, AxiosResponse } from "axios";

class UserService {
  private instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({
      baseURL: "http://localhost:3001/users",
    });
    this.instance.interceptors.response.use(this.responseInterceptor);
  }
  private responseInterceptor({ data }: AxiosResponse<any, any>) {
    return data;
  }

  async create(user: User) {
    return await this.instance.post("/", user);
  }
  async login(user: User) {
    return await this.instance.post("/login", user);
  }
}

export const userService = new UserService();
