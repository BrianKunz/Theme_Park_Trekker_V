import { useState } from "react";
import { useUserStore } from "../../../stores/useUserStore";
import { v4 as uuidv4 } from "uuid";

export function useCreateUser() {
  const [formInput, setFormInput] = useState("");
  const [loading, setLoading] = useState(false);
  const { createNewUser } = useUserStore();
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
      await createNewUser({
        id: uuidv4(),
        username: formInput,
        email: formInput,
        password: formInput,
        admin: false,
      });
      setFormInput("");
    } catch (error) {
      console.error(error);
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
