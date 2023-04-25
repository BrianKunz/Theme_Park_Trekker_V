import { create } from "zustand";
import { tripService } from "../services/tripService";

interface TripStore {
  trips: Trip[];
  user: CustomSessionData["user"];
  getAllTrips: () => Promise<void>;
  getOneTrip: (id: string) => Promise<void>;
  createNewTrip: (trip: Trip) => Promise<void>;
  updateTrip: (trip: Trip) => Promise<void>;
  deleteTrip: (id: string) => Promise<void>;
}

export const useTripStore = create<TripStore>((set, get) => ({
  trips: [],
  user: undefined,
  getAllTrips: async () => {
    try {
      const { user } = get();
      console.log(user);
      const trips = await tripService.getAll();
      const filteredTrips = trips.filter(
        (trip: Trip) => trip.user === user?.id
      );
      set({ trips: filteredTrips });
    } catch (error) {
      console.error(error);
    }
  },
  getOneTrip: async (id) => {
    try {
      const trip = await tripService.getOne(id);
      set({ trips: [trip] });
    } catch (error) {
      console.error(error);
    }
  },
  createNewTrip: async (trip) => {
    try {
      const { getAllTrips, user } = get();
      await tripService.create({ ...trip, user });
      await getAllTrips();
    } catch (error) {
      console.error(error);
    }
  },
  updateTrip: async (trip) => {
    try {
      await tripService.update(trip.id!, trip);
      await get().getAllTrips();
    } catch (error) {
      console.error(error);
    }
  },
  deleteTrip: async (id) => {
    try {
      await tripService.delete(id);
      await get().getAllTrips();
    } catch (error) {
      console.error(error);
    }
  },
}));
