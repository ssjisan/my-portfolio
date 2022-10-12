import { Box, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../Assets/Logo.png";
import menuItem from "./MenuItem";
export default function MenuNew() {
    const linkStyle = {
        textDecoration: "none",
        borderRadius: "10px",
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
                <img src={Logo} alt="logo" />
            </Box>
            <Box>
                <List>
                    {menuItem.map((item) => (
                        <>
                            <Link
                                to={item.link}
                                key={item.id}
                                style={linkStyle}
                            >
                                <ListItem
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        mb: item.id - menuItem.length && "16px",
                                        width: "70px",
                                        background:
                                            pathname === item.link &&
                                            "rgba(255, 255, 255, 0.1)",
                                        borderRadius: "8px",
                                        p: "4px",
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
                                    <ListItemText primary={item.title} />
                                </ListItem>
                            </Link>
                        </>
                    ))}
                </List>
            </Box>
            <Box>
                <img src={Logo} alt="logo" />
            </Box>
        </Box>
    );
}
