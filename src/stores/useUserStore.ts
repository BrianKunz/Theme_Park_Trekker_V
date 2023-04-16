import { create } from "zustand";
import { userService } from "../services/userService";

interface UserStore {
  users: User[];
  createNewUser: (user: User) => Promise<void>;
}

export const useUserStore = create<UserStore>(() => ({
  users: [],
  createNewUser: async (user) => {
    try {
      console.log(user);
      await userService.create(user);
    } catch (error) {
      console.error(error);
    }
  },
}));
