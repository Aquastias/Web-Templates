import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    background: {
      default: "#f9fafb",
      paper: "#121621",
    },
    text: {
      primary: "#121621",
      secondary: "#212636",
    },
    error: {
      main: "#f04438",
    },
    success: {
      main: "#0a9150",
    },
  },
});

export default theme;
