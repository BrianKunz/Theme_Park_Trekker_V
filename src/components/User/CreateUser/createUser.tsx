import React from "react";
import { useCreateUser } from "./useCreateUser";

export default function CreateUser() {
  const { formInput, handleFormChange, handleSubmit } = useCreateUser();
  return (
    <div>
      <input type="text" onChange={handleFormChange} value={formInput} />
      <button onClick={handleSubmit}>Sign Up</button>
    </div>
  );
}
