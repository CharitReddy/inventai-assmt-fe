import { useState } from "react";
import {
  Box,
  List,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";

const navigationTabs = ["Invite mail", "Promotional mail", "Welcome mail"];

const EmailBox = () => {
  const [navigationValue, setNavigationValue] = useState<number>(0);

  return (
    <Box sx={{ width: "60%", margin: "auto" }}>
      <Box></Box>
      <BottomNavigation
        showLabels
        value={navigationValue}
        onChange={(event, newValue) => {
          setNavigationValue(newValue);
        }}>
        {navigationTabs.map((tab) => (
          <BottomNavigationAction key={`${tab}`} label={`${tab}`} />
        ))}
      </BottomNavigation>
    </Box>
  );
};

export default EmailBox;
