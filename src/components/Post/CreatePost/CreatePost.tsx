import React from "react";
import { useCreatePost } from "./useCreatePost";

export default function CreatePost() {
  const { formInput, handleFormChange, handleSubmit } = useCreatePost();

  return (
    <div>
      <input type="text" onChange={handleFormChange} value={formInput} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
