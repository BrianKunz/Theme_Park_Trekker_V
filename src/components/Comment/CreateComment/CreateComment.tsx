import React from "react";
import { useCreateComment } from "./useCreateComment";

interface Props {
  post: Post;
}

export default function CreateComment({ post }: Props) {
  const { formInputs, handleFormChange, handleSubmit } = useCreateComment(post);

  return (
    <form onSubmit={handleSubmit} method="POST">
      <label htmlFor="body">Comment</label>
      <input
        type="text"
        name="body"
        value={formInputs.body}
        onChange={handleFormChange}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
}
