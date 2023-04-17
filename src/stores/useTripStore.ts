import { create } from "zustand";
import { tripService } from "../services/tripService";

interface TripStore {
  trips: Trip[];
  user?: CustomSessionData["user"];
  getAllTrips: () => Promise<void>;
  createNewTrip: (trip: Trip) => Promise<void>;
  updateTrip: (trip: Trip) => Promise<void>;
  deleteTrip: (trip: Trip) => Promise<void>;
}

export const useTripStore = create<TripStore>((set, get) => ({
  trips: [],
  user: undefined,
  getAllTrips: async () => {
    try {
      const { user } = get();
      const response = await tripService.getAll();
      const data = response.data;
      const filteredData = data.filter((trip: Trip) => {
        return trip.user === user?.id;
      });
      set((state) => ({
        trips: filteredData,
      }));
    } catch (error) {
      console.error(error);
    }
  },

  createNewTrip: async (trip) => {
    try {
      const { getAllTrips } = get();
      await tripService.create(trip);
      await getAllTrips();
    } catch (error) {
      console.error(error);
    }
  },

  updateTrip: async (trip) => {
    try {
      const { getAllTrips } = get();
      //@ts-ignore
      await tripService.update(trip);
      await getAllTrips();
    } catch (error) {
      console.error(error);
    }
  },
  deleteTrip: async (id) => {
    try {
      const { getAllTrips } = get();
      await tripService.delete(String(id));
      await getAllTrips();
    } catch (error) {
      console.error(error);
    }
  },
}));
