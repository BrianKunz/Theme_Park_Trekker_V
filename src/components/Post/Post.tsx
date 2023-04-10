import React, { useState } from "react";
import { usePostStore } from "../../stores/usePostStore";

interface Props {
  post: Post;
}

export const Post: React.FC<Props> = ({
  post: { id, username, title, image, description, time, comments },
}) => {
  // const {updatePost, deletePost} = usePostStore();
  // const [loading, setLoading] = useState(false);

  // const handleChange: React.ChangeEventHandler<HTMLInputElement> = async ({
  //     target: {value},
  // }) => {
  //     console.log({value});
  //     if (loading) {
  //         return;
  //     }
  //     setLoading(true);
  //     try {
  //         await updatePost({
  //             id,
  //             title,
  //             image,
  //             description,
  //             comments
  //         });
  //     } catch (error) {
  //         console.error(error)
  //     } finally {
  //         setLoading(false)
  //     }
  // }
  // const handleDelete = () => {
  //     if(!id) {
  //         return;
  //     }
  //     deletePost(id);
  // }
  return (
    <div>
      <h3>{title}</h3>
      <p>{id}</p>
      <h4>{image}</h4>
      <h4>{description}</h4>
      {/* <h4>{comments}</h4> */}
    </div>
  );
};