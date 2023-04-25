import axios from "axios";

const baseURL = "http://localhost:3001/posts/";

export const postService = {
  getAll: async (): Promise<Post[]> => {
    const response = await axios.get(baseURL);
    return response.data;
  },

  getOne: async (id: string): Promise<Post> => {
    const response = await axios.get(baseURL + id);
    return response.data;
  },

  create: async (post: Post): Promise<Post> => {
    const response = await axios.post(baseURL, post);
    return response.data;
  },

  update: async (id: string, post: Post): Promise<Post> => {
    const response = await axios.put(baseURL + id, post);
    return response.data;
  },

  delete: async (id: string): Promise<void> => {
    await axios.delete(baseURL + id);
  },
};
