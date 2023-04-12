import { useState } from "react";
import { usePostStore } from "../../../stores/usePostStore";

export function useCreatePost() {
  const [formInput, setFormInput] = useState("");
  const [loading, setLoading] = useState(false);
  const { createNewPost } = usePostStore();
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
      await createNewPost({
        title: formInput,
        image: formInput,
        description: formInput,
      });
      setFormInput("");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    handleSubmit,
    handleFormChange,
    formInput,
  };
}
