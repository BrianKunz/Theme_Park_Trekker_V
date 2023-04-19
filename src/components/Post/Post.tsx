import React, { useState, useEffect } from "react";
import { usePostStore } from "../../stores/usePostStore";
import { Comment } from "../Comment/Comment";

interface Props {
  post: Post;
}

export const Post: React.FC<Props> = ({
  post: { id, title, image, description, created, comments },
}) => {
  const { updatePost, deletePost } = usePostStore();
  const [loading, setLoading] = useState(false);

  const { posts, getOnePost } = usePostStore();

  useEffect(() => {
    if (id) {
      getOnePost(id);
    }
  }, [id, getOnePost]);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = async ({
    target: { value },
  }) => {
    console.log({ value });
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      await updatePost({
        id,
        created,
        title,
        image,
        description,
        comments,
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
    //@ts-ignore
    deletePost(id);
  };

  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      {/* <p>{created}</p> */}
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
          post={{ id, title, image, description, created, comments }}
        />
      ))}
    </div>
  );
};
