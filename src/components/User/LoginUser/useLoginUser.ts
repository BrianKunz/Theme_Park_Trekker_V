import { useState } from "react";
import { useUserStore } from "../../../stores/useUserStore";

export function useLoginUser() {
  interface FormInputs {
    username: string;
    password: string;
  }
  const [formInputs, setFormInputs] = useState<FormInputs>({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const { login } = useUserStore();
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
      console.log("Form inputs: ", formInputs);
      await login({
        username: formInputs.username,
        password: formInputs.password,
      });
      console.log("User logged in: ", formInputs.username);
      setFormInputs({
        username: "",
        password: "",
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    handleSubmit,
    handleFormChange,
    formInputs,
    loading,
  };
}
