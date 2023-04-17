import { create } from "zustand";
import { postService } from "../services/postService";

interface PostStore {
  posts: Post[];
  user?: CustomSessionData["user"];
  getAllPosts: () => Promise<void>;
  createNewPost: (post: Post) => Promise<void>;
  updatePost: (post: Post) => Promise<void>;
  deletePost: (post: Post) => Promise<void>;
}

export const usePostStore = create<PostStore>((set, get) => ({
  posts: [],
  user: undefined,
  getAllPosts: async () => {
    try {
      const { user } = get();
      const response = await postService.getAll();
      const data = response.data;
      const filteredData = data.filter((post: Post) => {
        return post.user === user?.id;
      });
      set((state) => ({
        posts: filteredData,
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
