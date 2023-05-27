import { Box, List, ListItem, ListItemIcon, Typography } from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { menuItem, socialMedia } from "./MenuItem";
import { Download } from "../../Assets/Icon/Icons";
export default function Menu() {
  const linkStyle = {
    textDecoration: "none",
    color: "white",
  };
  const { pathname } = useLocation();
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Box
      sx={{
        width: "80px",
        height: "90vh",
        background:
          "linear-gradient(180deg, #141414 0%, rgba(20, 20, 20, 0.8) 100%)",
        padding: "20px 00px 20px 00px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: "10px",
        alignItems: "center",
      }}
    >
      <Box onClick={goToTop}>
        <Link to="/">
          <img src="Assets/Images/Logo.png" alt="logo" />
        </Link>
      </Box>
      <Box>
        <List>
          {menuItem.map((item) => (
            <Box key={item.id} onClick={goToTop}>
              <Link to={item.link} style={linkStyle}>
                <ListItem
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    mb: item.id - menuItem.length && "24px",
                    width: "70px",
                    background:
                      pathname === item.link && "rgba(255, 255, 255, 0.1)",
                    borderRadius: "8px",
                    p: "4px",
                    fontSize: "14px",
                  }}
                >
                  <ListItemIcon
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: pathname === item.link && "700",
                    }}
                  >
                    {" "}
                    {item.title}
                  </Typography>
                </ListItem>
              </Link>
            </Box>
          ))}
          <a
            href="Assets/sadman_sakib_resume.pdf"
            download="sadman_sakib_resume"
            target="_blank"
            rel="noreferrer" style={{textDecoration:"none"}}
          >
            <ListItem
              sx={{
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                mt: "24px",
                width: "70px",
                borderRadius: "8px",
                p: "4px",
                fontSize: "14px",
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
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "400",
                  color: "#FFF",
                }}
              >
                {" "}
                Resume
              </Typography>
            </ListItem>
          </a>
        </List>
      </Box>
      <Box>
        {socialMedia.map((item) => {
          return (
            <Box key={item.id}>
              <a href={item.link} target="_blank" rel="noreferrer" >
                <ListItem
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <ListItemIcon
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                </ListItem>
              </a>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
