import { createTheme } from "@mui/material";

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    type: "light",
    primary: {
      main: "#ff4500",
    },
    secondary: {
      main: "#ff4500",
    },
    background: {
      default: "#ffffff",
    },
  },
});
