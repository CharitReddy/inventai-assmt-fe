import { useState } from "react";
import { APIs } from "services/apiCalls";

interface USER_INFO {
  name: string;
  email: string;
  info: string;
}

export const useHome = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [generatedEmails, setGeneratedEmails] = useState<string[]>([]);
  const [showForm, setShowForm] = useState<boolean>(true);

  console.log(generatedEmails);

  const generateEmails = (userInfo: USER_INFO) => {
    setIsLoading(true);
    APIs.generateEmails(userInfo)
      .then((response) => {
        setIsLoading(false);
        console.log(response);
        setGeneratedEmails(response.data);
      })
      .catch((error) => {
        setErrorMessage("Some error occurred, please try again");
        setShowErrorMessage(true);
        setIsLoading(false);
        console.log(error);
      });
  };
  const onUserFormSubmit = (name: string, email: string, info: string) => {
    console.log(name, email, info);
    if (!name || !email || !info) {
      setErrorMessage("Please fill in all the fields");
      setShowErrorMessage(true);
      return;
    }
    const userInfo = { name, email, info };
    setShowErrorMessage(false);
    setErrorMessage("");
    setShowForm(false);
    generateEmails(userInfo);
  };
  return {
    onUserFormSubmit,
    generatedEmails,
    showForm,
    setShowForm,
    isLoading,
    showErrorMessage,
    errorMessage,
  };
};
