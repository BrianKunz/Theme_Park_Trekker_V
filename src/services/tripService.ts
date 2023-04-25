import axios from "axios";

const baseURL = "http://localhost:3001/trips/";

export const tripService = {
  getAll: async (): Promise<Trip[]> => {
    const token = localStorage.getItem("accessToken");
    console.log(token); // Log the token to the console
    const response = await axios.get(baseURL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  },

  getOne: async (id: string): Promise<Trip> => {
    const token = localStorage.getItem("accessToken");
    const response = await axios.get(baseURL + id, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  },

  create: async (trip: Trip): Promise<Trip> => {
    const token = localStorage.getItem("accessToken");
    const response = await axios.post(baseURL, trip, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  },

  update: async (id: string, trip: Trip): Promise<Trip> => {
    const token = localStorage.getItem("accessToken");
    const response = await axios.put(baseURL + id, trip, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  },

  delete: async (id: string): Promise<void> => {
    const token = localStorage.getItem("accessToken");
    await axios.delete(baseURL + id, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};
