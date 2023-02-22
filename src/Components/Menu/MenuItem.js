import {
  Home,
  About,
  Jobs,
  Projects,
  Blog,
  LinkedinWhite,
  GithubWhite,
} from "../../Assets/Icon/Icons";
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
  },
];
const socialMedia = [
  {
    id: 1,
    title: "linkedin",
    link: "https://www.linkedin.com/in/ssjisan/",
    icon: <LinkedinWhite />,
  },
  {
    id: 2,
    title: "github",
    link: "https://github.com/ssjisan",
    icon: <GithubWhite />,
  },
];
export { menuItem, socialMedia };
