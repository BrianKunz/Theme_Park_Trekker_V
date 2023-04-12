import { useState } from "react";
import { useTripStore } from "../../../stores/useTripStore";

export function useCreateTrip() {
  const [formInput, setFormInput] = useState("");
  const [loading, setLoading] = useState(false);
  const { createNewTrip } = useTripStore();
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
      await createNewTrip({
        start_date: formInput,
        end_date: formInput,
        flight: formInput,
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
