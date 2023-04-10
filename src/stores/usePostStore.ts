import { create } from "zustand";
import { postService } from "../services/postService";

interface PostStore {
  posts: Post[];
  getAllPosts: () => Promise<void>;
  createNewPost: (post: Post) => Promise<void>;
  updatePost: (post: Post) => Promise<void>;
  deletePost: (post: Post) => Promise<void>;
}

export const usePostStore = create<PostStore>((set, get) => ({
  posts: [],
  getAllPosts: async () => {
    try {
      const data = await postService.getAll();
      // @ts-ignore
      set((state) => ({
        posts: data,
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
    const { getAllPosts } = get();
    try {
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
