import React from "react";
import { useCreatePost } from "./useCreatePost";

export default function CreatePost() {
  const { formInputs, handleFormChange, handleSubmit, setFormInputs, loading } =
    useCreatePost();

  return (
    <form onSubmit={handleSubmit} method="POST">
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        value={formInputs.title}
        onChange={handleFormChange}
        required
      />
      <label htmlFor="image">Image Link</label>
      <input
        type="text"
        name="image"
        value={formInputs.image}
        onChange={handleFormChange}
      />
      <label htmlFor="description">Description</label>
      <input
        type="text"
        name="description"
        value={formInputs.description}
        onChange={handleFormChange}
        required
      />
    </form>
  );
}
