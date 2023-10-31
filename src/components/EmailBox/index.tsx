import { useState } from "react";
import {
  Box,
  Paper,
  Button,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import WavingHandIcon from "@mui/icons-material/WavingHand";
interface EMAIL_BOX_PROPS {
  emails: string[];
  onButtonClick: (flag: boolean) => void;
  showButton: boolean;
}

const navigationTabs = [
  { text: "Invite mail", icon: <ContactMailIcon /> },
  { text: "Promotional mail", icon: <CardGiftcardIcon /> },
  { text: "Welcome mail", icon: <WavingHandIcon /> },
];

const EmailBox: React.FC<EMAIL_BOX_PROPS> = ({
  emails,
  onButtonClick,
  showButton,
}) => {
  const [navigationValue, setNavigationValue] = useState<number>(0);

  return (
    <Box>
      <Box sx={{ margin: "auto" }}>
        <Paper
          sx={{
            width: "80%",
            whiteSpace: "pre-line",
            textAlign: "left",
            padding: "25px",
            margin: "auto",
            borderRadius: "15px",
          }}>
          {emails[navigationValue]}
        </Paper>
        <BottomNavigation
          showLabels
          value={navigationValue}
          onChange={(event, newValue) => {
            setNavigationValue(newValue);
          }}
          sx={{ width: "50%", margin: "auto" }}>
          {navigationTabs.map((tab) => (
            <BottomNavigationAction
              key={tab.text}
              label={tab.text}
              icon={tab.icon}
            />
          ))}
        </BottomNavigation>
      </Box>
      {showButton && (
        <Button
          variant='contained'
          onClick={() => onButtonClick(true)}
          sx={{ margin: "20px auto" }}>
          Generate emails for another user
        </Button>
      )}
    </Box>
  );
};

export default EmailBox;
