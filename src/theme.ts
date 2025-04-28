import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: '"Source Serif 4", serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          textTransform: "none",
          fontWeight: 700,
          color: "black",
          fontSize: "1.1rem",
        },
      },
    },
  },
});

export default theme;
