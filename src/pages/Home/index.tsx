import UserDetailsForm from "components/UserDetailsForm";
import EmailBox from "components/EmailBox";
import { useHome } from "pages/Home/useHome";

const Home = () => {
  const { onUserFormSubmit } = useHome();

  return (
    <div>
      <UserDetailsForm onSubmit={onUserFormSubmit} />
      <EmailBox />
    </div>
  );
};

export default Home;
