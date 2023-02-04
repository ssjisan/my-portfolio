import { Box, List, ListItem, ListItemIcon, Typography } from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../Assets/Logo.png";
import { menuItem, socialMedia } from "./MenuItem";
export default function Menu() {
  const linkStyle = {
    textDecoration: "none",
    color: "white",
  };
  const { pathname } = useLocation();
  return (
    <Box
      sx={{
        width: "80px",
        height: "94vh",
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
      <Box>
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </Box>
      <Box>
        <List>
          {menuItem.map((item) => (
            <Box key={item.id}>
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
        </List>
      </Box>
      <Box>
        {socialMedia.map((item) => {
          return (
            <Box key={item.id}>
              <a href={item.link} target="_blank" rel="noreferrer">
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
