import React from "react";
import { Typography, useMediaQuery, Box } from "@mui/material";
import TypeAnimation from "./TypeAnimations";

export default function HomeCard() {
  const forBelow667 = useMediaQuery("(max-width:667px)");
  const forBelow767 = useMediaQuery("(max-width:767px)");
  const forBelow999 = useMediaQuery("(max-width:999px)");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: forBelow999 ? "20px" : "50px",
      }}
    >
      <Typography
        sx={{
          fontSize: forBelow667
            ? "48px"
            : forBelow767
            ? "64px"
            : forBelow999
            ? "76px"
            : "86px",
          fontWeight: 700,
        }}
      >
        Hello I'm
      </Typography>
      <Typography
        sx={{
          fontSize: forBelow667
            ? "48px"
            : forBelow767
            ? "64px"
            : forBelow999
            ? "76px"
            : "86px",
          fontWeight: 700,
        }}
      >
        Sadman Sakib Jisan
      </Typography>
      <Typography sx={{ fontSize: "20px", color: "#5F656F", fontWeight: 350 }}>
        <TypeAnimation />
      </Typography>
    </Box>
  );
}
