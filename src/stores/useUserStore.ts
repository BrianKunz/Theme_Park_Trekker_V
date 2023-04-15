import { create } from "zustand";
import { userService } from "../services/userService";

interface UserStore {
  users: User[];
  createNewUser: (user: User) => Promise<void>;
}

export const useUserStore = create<UserStore>((set, get) => ({
  users: [],
  createNewUser: async (user) => {
    try {
      await userService.create(user);
    } catch (error) {
      console.error(error);
    }
  },
}));
