import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { menuItem } from "./MenuItem";
import { Link, useLocation } from "react-router-dom";
import { Download } from "../../Assets/Icon/Icons";

export default function MobileMenu() {
  const linkStyle = {
    textDecoration: "none",
    color: "white",
  };
  const { pathname } = useLocation();
  const forBelow576 = useMediaQuery("(max-width:576px)");
  const forBelow667 = useMediaQuery("(max-width:667px)");
  const forBelow456 = useMediaQuery("(max-width:456px)");
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        background: "#fff",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
          height: "60px",
          background:
            "linear-gradient(180deg, #141414 0%, rgba(20, 20, 20, 0.8) 100%)",
        }}
        onClick={goToTop}
      >
        <List
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            width: "100%",
            height: "60px",
          }}
        >
          {menuItem.map((item) => (
            <Link to={item.link} key={item.id} style={linkStyle}>
              <ListItem
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  background:
                    pathname === item.link && "rgba(255, 255, 255, 0.1)",
                  borderRadius: "8px",
                  height: "48px",
                  p: forBelow667 && 1,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: forBelow456
                      ? "36px"
                      : forBelow576
                      ? "50px"
                      : "56px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                {pathname === item.link && (
                  <Typography sx={{ fontSize: "12px" }}>
                    {" "}
                    {item.title}
                  </Typography>
                )}
              </ListItem>
            </Link>
          ))}
          {/* <a
            href="Assets/sadman_sakib_resume.pdf"
            download="sadman_sakib_resume"
            target="_blank"
            rel="noreferrer"
          >
            <ListItem
               sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center",
                borderRadius: "8px",
                height: "48px",
                p: forBelow667 && 1,
              }}
            >
              <ListItemIcon
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Download />
              </ListItemIcon>
            </ListItem>
          </a> */}
        </List>
      </Box>
    </Box>
  );
}
