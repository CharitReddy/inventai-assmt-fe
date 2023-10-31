import { useState } from "react";
import { APIs } from "services/apiCalls";
import t from "translations";
interface USER_INFO {
  name: string;
  email: string;
  info: string;
}
const NO_ERROR_MESSAGE = "";
export const useHome = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>(NO_ERROR_MESSAGE);
  const [generatedEmails, setGeneratedEmails] = useState<string[]>([]);
  const [showForm, setShowForm] = useState<boolean>(true);

  const generateEmails = (userInfo: USER_INFO) => {
    setIsLoading(true);
    APIs.generateEmails(userInfo)
      .then((response) => {
        setIsLoading(false);
        setGeneratedEmails(response.data);
      })
      .catch((error) => {
        setErrorMessage(t("emailGenerationApiError"));
        setShowErrorMessage(true);
        setIsLoading(false);
      });
  };
  const onUserFormSubmit = (name: string, email: string, info: string) => {
    if (!name || !email || !info) {
      setErrorMessage(t("emptyFieldsError"));
      setShowErrorMessage(true);
      return;
    }
    const userInfo = { name, email, info };
    setShowErrorMessage(false);
    setErrorMessage(NO_ERROR_MESSAGE);
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
