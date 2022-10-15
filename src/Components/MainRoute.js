import { Routes, Route } from "react-router-dom";
import Projects from "../Pages/Projects";
import About from "../Pages/About";
import Jobs from "../Pages/Jobs";
import Blog from "../Pages/Blog";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";
import Contact from "../Pages/Contact";
import Test from "../Pages/Test";

export default function MainRoute() {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="jobs" element={<Jobs />} />
            <Route path="blog" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
            <Route path="test" element={<Test />} />
        </Routes>
    );
}
