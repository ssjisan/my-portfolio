import Home from "../../Assets/Icon/Home";
import About from "../../Assets/Icon/About";
import Jobs from "../../Assets/Icon/Jobs";
import Projects from "../../Assets/Icon/Projects";
import Blog from "../../Assets/Icon/Blog";
import Linkedin from "../../Assets/Icon/Linkedin";
import Github from "../../Assets/Icon/Github";
const menuItem = [
    {
        id: 1,
        title: "Home",
        link: "/",
        icon: <Home />,
    },
    {
        id: 2,
        title: "About",
        link: "/about",
        icon: <About />,
    },
    {
        id: 3,
        title: "Jobs",
        link: "/jobs",
        icon: <Jobs />,
    },
    {
        id: 4,
        title: "Work",
        link: "/work",
        icon: <Projects />,
    },
    {
        id: 5,
        title: "Blog",
        link: "/blog",
        icon: <Blog />,
    }
];
const socialMedia = [
    {
        id: 1,
        title: "linkedin",
        link: "https://www.linkedin.com/in/ssjisan/",
        icon: <Linkedin />,
    },
    {
        id: 2,
        title: "github",
        link: "https://github.com/ssjisan",
        icon: <Github />,
    },
];
export { menuItem, socialMedia };
