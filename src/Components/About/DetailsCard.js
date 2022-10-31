import { Box, Typography } from "@mui/material";
import React from "react";
import "../Styles/Experience.css";

export default function DetailsCard() {
  return (
    <Box sx={{ maxHeight: "90vh", overflowY: "scroll" }} className="scroll">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <Typography sx={{ fontSize: "64px", fontWeight: 700, mb: 2 }}>
          I'm an Entrepreneur & <br /> Software Engineer
        </Typography>
        <Box
          sx={{
            width: "580px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 4,
          }}
        >
          <Typography sx={{ fontSize: "20px", fontWeight: 350 }}>
            My favorite thing about my work is to help businesses developing
            websites or mobile applications their customers love. I enjoy the
            journey from coming up with wild ideas to turning them into a
            performant product, launching and growing it afterward.
          </Typography>
          <Typography sx={{ fontSize: "18px", fontWeight: 600 }}>
            My early life
          </Typography>
          <Typography sx={{ fontSize: "20px", fontWeight: 350 }}>
            My favorite thing about my work is to help businesses developing
            websites or mobile applications their customers love. I enjoy the
            journey from coming up with wild ideas to turning them into a
            performant product, launching and growing it afterward.
          </Typography>
          <Typography sx={{ fontSize: "18px", fontWeight: 600 }}>
            My early life
          </Typography>
          <Typography sx={{ fontSize: "20px", fontWeight: 350 }}>
            My favorite thing about my work is to help businesses developing
            websites or mobile applications their customers love. I enjoy the
            journey from coming up with wild ideas to turning them into a
            performant product, launching and growing it afterward.
          </Typography>
          <Typography sx={{ fontSize: "18px", fontWeight: 600 }}>
            My early life
          </Typography>
          <Typography sx={{ fontSize: "20px", fontWeight: 350 }}>
            My favorite thing about my work is to help businesses developing
            websites or mobile applications their customers love. I enjoy the
            journey from coming up with wild ideas to turning them into a
            performant product, launching and growing it afterward.
          </Typography>
          <Typography sx={{ fontSize: "18px", fontWeight: 600 }}>
            My early life
          </Typography>
          <Typography sx={{ fontSize: "20px", fontWeight: 350 }}>
            My favorite thing about my work is to help businesses developing
            websites or mobile applications their customers love. I enjoy the
            journey from coming up with wild ideas to turning them into a
            performant product, launching and growing it afterward.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
