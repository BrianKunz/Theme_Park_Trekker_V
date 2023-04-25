import { create } from "zustand";
import { postService } from "../services/postService";

interface PostStore {
  posts: Post[];
  user?: CustomSessionData["user"];
  post?: Post;
  getAllPosts: () => Promise<void>;
  getOnePost: (id: string) => Promise<void | Post>;
  createNewPost: (post: Post) => Promise<void>;
  updatePost: (post: Post) => Promise<void>;
  deletePost: (id: string) => Promise<void>;
}
export const usePostStore = create<PostStore>((set, get) => ({
  posts: [],
  getAllPosts: async () => {
    try {
      const posts = await postService.getAll();
      set({ posts });
    } catch (error) {
      console.error(error);
    }
  },
  getOnePost: async (id) => {
    try {
      const post = await postService.getOne(id);
      set({ post });
      return post;
    } catch (error) {
      console.error(error);
    }
  },
  createNewPost: async (post) => {
    try {
      const { getAllPosts, user } = get();
      if (user) {
        await postService.create({ ...post, user });
        await getAllPosts();
      }
    } catch (error) {
      console.error(error);
    }
  },

  updatePost: async (post) => {
    try {
      await postService.update(post.id!, post);
      await get().getAllPosts();
    } catch (error) {
      console.error(error);
    }
  },
  deletePost: async (id) => {
    try {
      await postService.delete(id);
      await get().getAllPosts();
    } catch (error) {
      console.error(error);
    }
  },
}));
