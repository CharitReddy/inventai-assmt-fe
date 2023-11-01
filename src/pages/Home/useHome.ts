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
  // API Loading state to display the loading skeleton.
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // Flag to show or hide error message alert.
  const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);
  // Error message state to pass to the alert component, displayed only when any of the fields are empty or if there is an API error.
  const [errorMessage, setErrorMessage] = useState<string>(NO_ERROR_MESSAGE);
  // State to store the three emails sent from back-end.
  const [generatedEmails, setGeneratedEmails] = useState<string[]>([]);
  // Flag to toggle between the form/email components.
  const [showForm, setShowForm] = useState<boolean>(true);

  // API Call to send user info and request emails.
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

  // Validate user information form and display error message or trigger the API call to generate emails.
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

  // On clicking the generate new emails button from emails component, takes the user back to the form.
  const onGenerateNewClick = (showFormFlag: boolean) => {
    setShowForm(showFormFlag);
    setGeneratedEmails([]);
  };
  return {
    onUserFormSubmit,
    generatedEmails,
    showForm,
    setShowForm,
    isLoading,
    showErrorMessage,
    errorMessage,
    onGenerateNewClick,
  };
};
