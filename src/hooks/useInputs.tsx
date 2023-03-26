import { useState } from "react";

export const useInputs = (params: any) => {
  const [inputs, setInputs] = useState(params);

  const handleChange = (event: any) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  return [inputs, handleChange];
};
