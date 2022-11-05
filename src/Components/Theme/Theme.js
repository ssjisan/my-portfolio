import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";

export default function Theme({ children }) {
  const theme = createTheme({
    typography: {
      fontFamily: "Noto Sans",
    },
    palette: {
      new: {
        main: "#30A7D7",
      },
    },
  });
  return <ThemeProvider theme={theme}> {children} </ThemeProvider>;
}
