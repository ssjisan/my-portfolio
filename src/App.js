import { BrowserRouter } from "react-router-dom";
import MainRoute from "./Components/MainRoute";
import Theme from "./Components/Theme/Theme";

function App() {

  return (
    <Theme>
      <BrowserRouter>
        <MainRoute />
      </BrowserRouter>
    </Theme>
  );
}

export default App;
