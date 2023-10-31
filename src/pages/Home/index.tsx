import { Skeleton, Alert } from "@mui/material";
import UserDetailsForm from "components/UserDetailsForm";
import EmailBox from "components/EmailBox";
import { useHome } from "pages/Home/useHome";

const Home = () => {
  const {
    onUserFormSubmit,
    generatedEmails,
    showForm,
    setShowForm,
    isLoading,
    showErrorMessage,
    errorMessage,
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
          onButtonClick={setShowForm}
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
