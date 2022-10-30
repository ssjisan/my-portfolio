import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import MainRoute from "./Components/MainRoute";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "Noto Sans",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <MainRoute />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
