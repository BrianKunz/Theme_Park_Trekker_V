import axios, { AxiosInstance, AxiosResponse } from "axios";

class UserService {
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

  async signUp(user: User) {
    return await this.instance.post("/signup");
  }
  async login(user: User) {
    return await this.instance.post("/login");
  }
}

export const userService = new UserService();
