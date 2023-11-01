import { useState } from "react";

const INITIAL_USER_VALUES = "";

// Custom hook to manage states of the user details.
export const useUserDetails = () => {
  const [name, setName] = useState<string>(INITIAL_USER_VALUES);
  const [email, setEmail] = useState<string>(INITIAL_USER_VALUES);
  const [info, setInfo] = useState<string>(INITIAL_USER_VALUES);

  return { name, email, info, setName, setEmail, setInfo };
};
