import React from "react";
import {
    Paper,
    Box,
    List,
    ListItem,
    ListItemIcon,
    Typography,
} from "@mui/material";
import { menuItem } from "./MenuItem";
import { Link, useLocation } from "react-router-dom";

export default function MobileMenu() {
    const linkStyle = {
        textDecoration: "none",
        color: "white",
    };
    const { pathname } = useLocation();
    return (
        <Box
            sx={{
                position: "fixed",
                bottom: 0,
                left: 0,
                right: 0,
                background: "#fff",
                height: "80px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Paper
                sx={{
                    background:
                        "linear-gradient(180deg, #141414 0%, rgba(20, 20, 20, 0.8) 100%)",
                    width: "95%",
                    borderRadius: "10px",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                        width: "100%",
                    }}
                >
                    <List
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
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
                                            background:
                                                pathname === item.link &&
                                                "rgba(255, 255, 255, 0.1)",
                                            borderRadius: "8px",
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
                                        {pathname === item.link && (
                                            <Typography
                                                sx={{ fontSize: "10px" }}
                                            >
                                                {" "}
                                                {item.title}
                                            </Typography>
                                        )}
                                    </ListItem>
                                </Link>
                            </>
                        ))}
                    </List>
                </Box>
            </Paper>
        </Box>
    );
}
