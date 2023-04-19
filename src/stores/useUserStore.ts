import { create } from "zustand";
import { userService } from "../services/userService";

interface UserStore {
  users: User[];
  createNewUser: (user: User) => Promise<void>;
  login: (user: User) => Promise<void>;
}

export const useUserStore = create<UserStore>(() => ({
  users: [],
  createNewUser: async (user) => {
    try {
      console.log(user);
      const response = await userService.create(user);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  },
  login: async (user) => {
    try {
      console.log(user);
      await userService.login(user);
    } catch (error) {
      console.error(error);
    }
  },
}));
