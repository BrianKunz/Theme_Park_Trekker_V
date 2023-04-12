import { useState } from "react";
import { useCommentStore } from "../../../stores/useCommentStore";

export function useCreateComment() {
  const [formInput, setFormInput] = useState("");
  const [loading, setLoading] = useState(false);
  const { createNewComment } = useCommentStore();

  const handleFormChange: React.ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    setFormInput(value);
  };

  const handleSubmit = async () => {
    if (loading) {
      return;
    }
    try {
      setLoading(true);
      await createNewComment({
        body: formInput,
      });
      setFormInput("");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    handleFormChange,
    handleSubmit,
    formInput,
  };
}
