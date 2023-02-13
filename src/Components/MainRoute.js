import { Routes, Route } from "react-router-dom";
import Projects from "../Pages/Projects";
import About from "../Pages/About";
import Jobs from "../Pages/Jobs";
import Blog from "../Pages/Blog";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";
import BlogDetails from "../Pages/BlogDetails";
import ProjectDetails from "../Pages/ProjectDetails";

export default function MainRoute() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="work" element={<Projects />} />
      <Route path="jobs" element={<Jobs />} />
      <Route path="blog" element={<Blog />} />
      <Route path="blog/:path" element={<BlogDetails/>}/>
      <Route path="project/:path" element={<ProjectDetails/>}/>
      <Route exact path="*" element={<NotFound />} />
    </Routes>
  );
}
