import { useState } from "react";
import { APIs } from "../../../src/services/apiCalls";

const INITIAL_USER_VALUES = "";

export const useUserDetails = () => {
  const [name, setName] = useState<string>(INITIAL_USER_VALUES);
  const [email, setEmail] = useState<string>(INITIAL_USER_VALUES);
  const [info, setInfo] = useState<string>(INITIAL_USER_VALUES);

  return { name, email, info, setName, setEmail, setInfo };
};
