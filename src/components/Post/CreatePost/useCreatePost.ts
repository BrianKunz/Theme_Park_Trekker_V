import { useState } from "react";
import { usePostStore } from "../../../stores/usePostStore";
import { v4 as uuidv4 } from "uuid";

interface Props {
  username: string;
}

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
        id: uuidv4(),
        username: "placeholder",
        time: new Date(),
        title: formInput,
        image: formInput,
        description: formInput,
        comments: [],
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
