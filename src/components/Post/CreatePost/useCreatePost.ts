import { useState } from "react";
import { usePostStore } from "../../../stores/usePostStore";
import { v4 as uuidv4 } from "uuid";

interface FormInputs {
  title: string;
  image?: string;
  description: string;
  created: Date;
  comments: Comment[];
}

export function useCreatePost() {
  const [formInputs, setFormInputs] = useState<FormInputs>({
    title: "",
    image: "",
    description: "",
    created: new Date(),
    comments: [],
  });
  const [loading, setLoading] = useState(false);
  const { createNewPost } = usePostStore();
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
      await createNewPost({
        id: uuidv4(),
        created: formInputs.created,
        title: formInputs.title,
        image: formInputs.image,
        description: formInputs.description,
        comments: [],
      });
      setFormInputs({
        created: new Date(),
        title: "",
        image: "",
        description: "",
        comments: [],
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    handleSubmit,
    handleFormChange,
    formInputs,
    setFormInputs,
    loading,
  };
}
