import React from "react";
import { useCreateComment } from "./useCreateComment";

export default function CreateComment() {
  const { formInput, handleFormChange, handleSubmit } = useCreateComment();

  return (
    <div>
      <input type="text" onChange={handleFormChange} value={formInput} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
