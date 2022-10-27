import React from "react";
import { Typography, useMediaQuery, Box } from "@mui/material";
import TypeAnimation from "./TypeAnimations";
export default function HomeCard() {
  const forBelow416 = useMediaQuery("(max-width:416px)");
  const forBelow667 = useMediaQuery("(max-width:667px)");
  const forBelow767 = useMediaQuery("(max-width:767px)");
  const forBelow900 = useMediaQuery("(max-width:900px)");
  const forBelow999 = useMediaQuery("(max-width:999px)");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: forBelow416
        ? "180px"
        : forBelow667
        ? "160px"
        : forBelow767
        ? "120px"
        : forBelow900
        ? "96px"
        : "64px",
      }}
    >
      <Typography
        sx={{
          fontSize: forBelow416
            ? "30px"
            : forBelow667
            ? "36px"
            : forBelow767
            ? "48px"
            : forBelow999
            ? "64px"
            : "64px",
          fontWeight: 700,
          textAlign: "center",
        }}
      >
        Hello I'm <br /> Sadman Sakib Jisan
      </Typography>
      <Typography sx={{ fontSize: forBelow667 ? "16px" : "20px", color: "#5F656F", fontWeight: 350 }}>
        <TypeAnimation />
      </Typography>
    </Box>
  );
}
