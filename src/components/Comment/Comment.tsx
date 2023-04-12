import React, { useState } from "react";
import { useCommentStore } from "../../stores/useCommentStore";

interface Props {
  comment: Comment;
}

export const Comment: React.FC<Props> = ({
  comment: { id, username, time, body, post },
}) => {
  const { updateComment, deleteComment } = useCommentStore();
  const [loading, setLoading] = useState(false);
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = async ({
    target: { value },
  }) => {
    console.log({ value });
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      await updateComment({
        id,
        body,
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = () => {
    if (!id) {
      return;
    }
    deleteComment(id);
  };

  return (
    <div>
      <p>{username}</p>
      <p>{time}</p>
      <h4>{body}</h4>
      <div>
        <input type="text" onChange={handleChange} />
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};
