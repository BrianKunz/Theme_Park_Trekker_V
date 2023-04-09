import { create } from "zustand";
import { tripService } from "../services/tripService";

interface TripStore {
  trips: Trip[];
  getAllTrips: () => Promise<void>;
  createNewTrip: (trip: Trip) => Promise<void>;
  updateTrip: (trip: Trip) => Promise<void>;
  deleteTrip: (trip: Trip) => Promise<void>;
}

export const useTripStore = create<TripStore>((set, get) => ({
  trips: [],
  getAllTrips: async () => {
    try {
      const data = await tripService.getAll();
      // @ts-ignore
      set((state) => ({
        trips: data,
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
    const { getAllTrips } = get();
    try {
      await tripService.update(trip);
      await getAllTrips();
    } catch (error) {
      console.error(error);
    }
  },
  deleteTrip: async (id) => {
    const { getAllTrips } = get();
    try {
      await tripService.delete(String(id));
      await getAllTrips();
    } catch (error) {
      console.error(error);
    }
  },
}));
