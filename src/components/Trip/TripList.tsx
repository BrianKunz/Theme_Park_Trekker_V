import React, { useEffect } from "react";
import { useTripStore } from "../../stores/useTripStore";
import { Trip } from "./Trip";
import CreateTrip from "./CreateTrip/CreateTrip";

export default function TripList() {
  const { trips, getAllTrips } = useTripStore();

  useEffect(() => {
    getAllTrips();
  }, []);

  return (
    <div>
      <h1>Trips</h1>
      <CreateTrip />
      {trips.length > 0 ? (
        trips.map((trip) => {
          return <Trip key={trip.id} trip={trip} />;
        })
      ) : (
        <p>No trips planned yet!</p>
      )}
    </div>
  );
}
