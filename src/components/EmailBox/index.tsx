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
import InfoIcon from "@mui/icons-material/Info";
import t from "translations";
interface EMAIL_BOX_PROPS {
  emails: string[];
  onButtonClick: (flag: boolean) => void;
  showButton: boolean;
}

// Component to display generated emails.
// Bottom Navigation can be used to switch between the 3 emails.

const navigationTabs = [
  { text: t("inviteMailTabTitle"), icon: <ContactMailIcon /> },
  { text: t("promotionalMailTabTitle"), icon: <CardGiftcardIcon /> },
  { text: t("welcomeMailTabTitle"), icon: <InfoIcon /> },
];
const INITIAL_NAVIGATION_TAB = 0;
const EmailBox: React.FC<EMAIL_BOX_PROPS> = ({
  emails,
  onButtonClick,
  showButton,
}) => {
  const [navigationValue, setNavigationValue] = useState<number>(
    INITIAL_NAVIGATION_TAB
  );
  const showGenerateNewFlag = showButton && emails.length > 0;
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
            maxHeight: "80vh",
            overflowX: "scroll",
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
      {showGenerateNewFlag && (
        <Button
          variant='contained'
          onClick={() => onButtonClick(true)}
          sx={{ margin: "20px auto" }}>
          {t("generateEmailsForNewUser")}
        </Button>
      )}
    </Box>
  );
};

export default EmailBox;
