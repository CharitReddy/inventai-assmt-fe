import { Skeleton, Alert } from "@mui/material";
import UserDetailsForm from "components/UserDetailsForm";
import EmailBox from "components/EmailBox";
import { useHome } from "pages/Home/useHome";

// Component to conditionally render the user info form or emails based on user input.
/* Form is displayed initially
 * Changes to a loading skeleton when the form is filled and generate button is clicked.
 * Once fetched, displays the emails
 */

// State management and API calls present in the useHome custom hook.

const Home = () => {
  const {
    onUserFormSubmit,
    generatedEmails,
    showForm,
    isLoading,
    showErrorMessage,
    errorMessage,
    onGenerateNewClick,
  } = useHome();

  return (
    <div>
      {isLoading && (
        <>
          <Skeleton
            animation='wave'
            sx={{ height: "80vh", width: "80vw", margin: "auto" }}
          />
        </>
      )}
      {showForm ? (
        <UserDetailsForm onSubmit={onUserFormSubmit} />
      ) : (
        <EmailBox
          emails={generatedEmails}
          showButton={!showForm}
          onButtonClick={onGenerateNewClick}
        />
      )}

      {showErrorMessage && (
        <Alert sx={{ width: "30%", margin: "20px auto" }} severity='error'>
          {errorMessage}
        </Alert>
      )}
    </div>
  );
};

export default Home;
