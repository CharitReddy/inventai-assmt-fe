import { useUserDetails } from "components/UserDetailsForm/useUserDetails";
import {
  Box,
  Paper,
  TextField,
  Typography,
  TextareaAutosize,
  Button,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import t from "translations";

interface USERDETAILSFORM {
  onSubmit: (name: string, email: string, info: string) => void;
}

const inputBoxStyles = {
  width: "40%",
  maxWidth: "100%",
  margin: "20px auto",
};
const Home: React.FC<USERDETAILSFORM> = ({ onSubmit }) => {
  const { name, email, info, setName, setEmail, setInfo, generateEmails } =
    useUserDetails();

  return (
    <Box>
      <Paper>
        <Box sx={{ width: "80%", margin: "auto", padding: "20px" }}>
          <Box sx={inputBoxStyles}>
            <TextField
              fullWidth
              id='name_input'
              label='Name'
              variant='outlined'
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setName(event.target.value);
              }}
            />
          </Box>
          <Box sx={inputBoxStyles}>
            <TextField
              fullWidth
              id='email_input'
              label='Email'
              variant='outlined'
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setEmail(event.target.value);
              }}
            />
          </Box>
          <Box sx={inputBoxStyles}>
            <TextField
              fullWidth
              id='user_info_input'
              label={`Enter any info you'd want to about the user`}
              variant='outlined'
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setInfo(event.target.value);
              }}
              inputProps={{
                style: {
                  height: "100px",
                },
              }}
            />
          </Box>
        </Box>
        <Button
          variant='contained'
          onClick={() => onSubmit(name, email, info)}
          endIcon={<SendIcon />}>
          Send
        </Button>
      </Paper>
    </Box>
  );
};

export default Home;
