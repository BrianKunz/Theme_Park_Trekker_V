import { useState } from "react";
import { useCommentStore } from "../../../stores/useCommentStore";
import { v4 as uuidv4 } from "uuid";

interface FormInputs {
  time: Date;
  body: string;
}

export function useCreateComment(post: Post) {
  const [formInputs, setFormInputs] = useState<FormInputs>({
    time: new Date(),
    body: "",
  });
  const [loading, setLoading] = useState(false);
  const { createNewComment } = useCommentStore();

  const handleFormChange: React.ChangeEventHandler<HTMLInputElement> = ({
    target: { name, value },
  }) => {
    setFormInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    if (loading) {
      return;
    }
    try {
      setLoading(true);
      await createNewComment(
        {
          id: uuidv4(),
          time: formInputs.time,
          body: formInputs.body,
          post: post,
        } as Comment,
        post
      );
      setFormInputs({
        time: new Date(),
        body: "",
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    handleFormChange,
    handleSubmit,
    formInputs,
    setFormInputs,
    loading,
  };
}
