import { Box } from "@mui/material";
import React from "react";
import Logo from "../../Assets/Logo.png";
import menuItem from "./MenuItem";

export default function MenuNew() {
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
                {menuItem.map((data) => {
                    return <Box>{data.title}</Box>;
                })}
            </Box>
            <Box>
                <img src={Logo} alt="logo" />
            </Box>
        </Box>
    );
}
