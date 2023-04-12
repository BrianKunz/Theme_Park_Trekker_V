import React from "react";
import { useCreateTrip } from "./useCreateTrip";

export default function CreateTrip() {
  const { formInput, handleFormChange, handleSubmit } = useCreateTrip();

  return (
    <div>
      <input type="text" onChange={handleFormChange} value={formInput} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
