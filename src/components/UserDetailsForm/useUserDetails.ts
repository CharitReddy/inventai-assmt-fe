import { useState } from "react";
import { APIs } from "../../../src/services/apiCalls";

const INITIAL_USER_VALUES = "";

export const useUserDetails = () => {
  const [name, setName] = useState<string>(INITIAL_USER_VALUES);
  const [email, setEmail] = useState<string>(INITIAL_USER_VALUES);
  const [info, setInfo] = useState<string>(INITIAL_USER_VALUES);

  const generateEmails = () => {
    const user_info = {
      name,
      email,
      info,
    };
    APIs.generateEmails(user_info)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return { name, email, info, setName, setEmail, setInfo, generateEmails };
};
