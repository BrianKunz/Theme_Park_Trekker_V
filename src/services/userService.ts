import axios from "axios";

const baseURL = "http://localhost:3001/users/";

export const userService = {
  getAll: async (): Promise<User[]> => {
    const response = await axios.get(baseURL);
    return response.data;
  },
  create: async (user: User): Promise<User> => {
    const response = await axios.post(`${baseURL}signup`, user);
    return response.data;
  },
  login: async (user: User): Promise<User> => {
    const response = await axios.post(`${baseURL}login`, user);
    const token = response.data.token;
    console.log(token);
    localStorage.setItem("accessToken", token);
    return response.data;
  },
};
