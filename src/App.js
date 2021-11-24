import { Routes, Route,BrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects";
import Experiences from "./Components/Experiences";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<AboutMe/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/experience" element={<Experiences/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
