import { create } from "zustand";
import { postService } from "../services/postService";

interface PostStore {
  posts: Post[];
  getAllPosts: () => Promise<void>;
  getOnePost: (id: string) => Promise<void>;
  createNewPost: (post: Post) => Promise<void>;
  updatePost: (post: Post) => Promise<void>;
  deletePost: (id: string) => Promise<void>;
}

export const usePostStore = create<PostStore>((set, get) => ({
  posts: [],
  getAllPosts: async () => {
    try {
      const response = await postService.getAll();
      set((state) => ({
        posts: response.data,
      }));
    } catch (error) {
      console.error(error);
    }
  },
  getOnePost: async (id) => {
    try {
      const response = await postService.getOne(id);
      set((state) => ({
        posts: [response.data],
      }));
    } catch (error) {
      console.error(error);
    }
  },
  createNewPost: async (post) => {
    try {
      const { getAllPosts } = get();
      await postService.create(post);
      await getAllPosts();
    } catch (error) {
      console.error(error);
    }
  },
  updatePost: async (post) => {
    try {
      const { getAllPosts } = get();
      //@ts-ignore
      await postService.update(post);
      await getAllPosts();
    } catch (error) {
      console.error(error);
    }
  },
  deletePost: async (id) => {
    const { getAllPosts } = get();
    try {
      await postService.delete(String(id));
      await getAllPosts();
    } catch (error) {
      console.error(error);
    }
  },
}));
