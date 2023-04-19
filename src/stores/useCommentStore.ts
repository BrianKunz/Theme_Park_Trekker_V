import { create } from "zustand";
import { commentService } from "../services/commentService";

interface CommentStore {
  comments: Comment[];
  user?: CustomSessionData["user"];
  getAllComments: (post: Post) => Promise<void>;
  createNewComment: (comment: Comment, post: Post) => Promise<void>;
  updateComment: (comment: Comment, post: Post) => Promise<void>;
  deleteComment: (id: string, post: Post) => Promise<void>;
}

export const useCommentStore = create<CommentStore>((set, get) => ({
  comments: [],
  user: undefined,
  getAllComments: async (post: Post) => {
    try {
      const response = await commentService.getAll();
      const data = response.data;
      const filteredData = data.filter((comment: Comment) => {
        //@ts-ignore
        return comment.post === post?.id; // Use type guard to check if post is undefined
      });
      set((state) => ({
        comments: filteredData,
      }));
    } catch (error) {
      console.error(error);
    }
  },

  createNewComment: async (comment, post) => {
    try {
      const { getAllComments } = get();
      await commentService.create({ ...comment, post: {} as Post });
      await getAllComments(post);
    } catch (error) {
      console.error(error);
    }
  },
  updateComment: async (comment, post) => {
    const { getAllComments } = get();
    try {
      //@ts-ignore
      await commentService.update(comment);
      await getAllComments(post);
    } catch (error) {
      console.error(error);
    }
  },
  deleteComment: async (id, post) => {
    const { getAllComments } = get();
    try {
      await commentService.delete(String(id));
      if (post.id) {
        await getAllComments(post);
      }
    } catch (error) {
      console.error(error);
    }
  },
}));
