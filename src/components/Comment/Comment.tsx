import React, { useState } from "react";
import { useCommentStore } from "../../stores/useCommentStore";
import CreateComment from "./CreateComment/CreateComment";

interface Props {
  comment: Comment;
  post: Post;
}

export const Comment: React.FC<Props> = ({
  comment: { id, time, body },
  post,
}) => {
  const { updateComment, deleteComment } = useCommentStore();
  const [loading, setLoading] = useState(false);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = async ({
    target: { value },
  }) => {
    console.log({ value });
    if (loading || !post) {
      return;
    }
    setLoading(true);
    try {
      await updateComment(
        {
          id,
          time,
          body,
          post: post,
        } as Comment,
        post
      );
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
    deleteComment(id, post);
  };

  return (
    <div>
      <CreateComment post={post} />
      {/* <p>{time}</p> */}
      <h4>{body}</h4>
    </div>
  );
};
