import { Box, Paper, TextField, Typography, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useUserDetails } from "components/UserDetailsForm/useUserDetails";
import t from "translations";

interface USER_DETAILS_FORM_PROPS {
  onSubmit: (name: string, email: string, info: string) => void;
}

const inputBoxStyles = {
  width: "40%",
  maxWidth: "100%",
  margin: "20px auto",
};
const Home: React.FC<USER_DETAILS_FORM_PROPS> = ({ onSubmit }) => {
  const { name, email, info, setName, setEmail, setInfo } = useUserDetails();

  return (
    <Box>
      <Paper sx={{ borderRadius: "15px", height: "70vh" }}>
        <Typography variant='h4' sx={{ fontWeight: "bold" }}>
          {t("welcomeHeader")}
        </Typography>
        <Typography
          variant='h6'
          sx={{
            whiteSpace: "pre-line",
          }}
          color='#C1C2C5'>
          {t("getStartedHeader")}
        </Typography>
        <Box
          sx={{
            width: "80%",
            margin: "auto",
            padding: "20px",
          }}>
          <Box sx={inputBoxStyles}>
            <TextField
              fullWidth
              id='name_input'
              label={t("nameFieldLabel")}
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
              label={t("emailFieldLabel")}
              variant='outlined'
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setEmail(event.target.value);
              }}
            />
          </Box>
          <Box sx={inputBoxStyles}>
            {/**Tried using the text area for a bigger size, but could not fit it in consistent to the other input fields */}
            {/* <TextareaAutosize
              minRows={3}
              style={{ backgroundColor: "#121212", minWidth: "40%" }}
              onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
                console.log(event)
              }
            /> */}
            <TextField
              fullWidth
              id='user_info_input'
              label={t("infoFieldLabel")}
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
          {t("sendButton")}
        </Button>
      </Paper>
    </Box>
  );
};

export default Home;
