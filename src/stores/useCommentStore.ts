import { create } from "zustand";
import { commentService } from "../services/commentService";

interface CommentStore {
  comments: Comment[];
  getAllComments: () => Promise<void>;
  createNewComment: (comment: Comment) => Promise<void>;
  updateComment: (comment: Comment) => Promise<void>;
  deleteComment: (comment: Comment) => Promise<void>;
}

export const useCommentStore = create<CommentStore>((set, get) => ({
  comments: [],
  getAllComments: async () => {
    try {
      const data = await commentService.getAll();
      // @ts-ignore
      set((state) => ({
        comments: data,
      }));
    } catch (error) {
      console.error(error);
    }
  },
  createNewComment: async (comment) => {
    try {
      const { getAllComments } = get();
      await commentService.create(comment);
      await getAllComments();
    } catch (error) {
      console.error(error);
    }
  },
  updateComment: async (comment) => {
    const { getAllComments } = get();
    try {
      await commentService.update(comment);
      await getAllComments();
    } catch (error) {
      console.error(error);
    }
  },
  deleteComment: async (id) => {
    const { getAllComments } = get();
    try {
      await commentService.delete(String(id));
      await getAllComments();
    } catch (error) {
      console.error(error);
    }
  },
}));
