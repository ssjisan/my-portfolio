import Home from "../../Assets/Icon/Home";
import About from "../../Assets/Icon/About";
import Jobs from "../../Assets/Icon/Jobs";
import Projects from "../../Assets/Icon/Projects";
import Blog from "../../Assets/Icon/Blog";
import Contact from "../../Assets/Icon/Contact";
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
        title: "Projects",
        link: "/projects",
        icon: <Projects />,
    },
    {
        id: 5,
        title: "Blog",
        link: "/blog",
        icon: <Blog />,
    },
    {
        id: 6,
        title: "Contact",
        link: "/contact",
        icon: <Contact />,
    }
];
export default menuItem;
