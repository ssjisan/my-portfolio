import {
  Typography,
  Box,
  Divider,
  Button,
} from "@mui/material";
import React from "react";
import Download from "../../Assets/Icon/Download";
import Arrow from "../../Assets/Icon/Arrow";
import "../Styles/AboutMe.css";
import socialConnection from "../../Assets/SocialConnection";
export default function InfoCard() {
  return (
    <Box
      sx={{
        maxWidth: "280px",
        p: 4,
        backgroundColor: "#FAFCFF",
        border: "1px solid rgba(0, 0, 0, 0.2)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "16px",
        gap: 2,
      }}
    >
      <img
        src="https://i.ibb.co/ZKJyRbJ/about-Me-Section.png"
        alt="myself"
        style={{
          width: "120px",
          height: "120px",
          objectFit: "cover",
          borderRadius: "100px",
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontWeight: 700, fontSize: "24px" }}>
          Sadman Sakib Jisan
        </Typography>
        <Typography sx={{ fontWeight: 350, fontSize: "16px" }}>
          Dhaka, Bangladesh
        </Typography>
      </Box>
      <Divider sx={{ width: "100%" }} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          width: "100%",
        }}
      >
        {socialConnection.map((data) => (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
              }}
            >
              {data.icon}
              {data.title}
            </Box>{" "}
            <Arrow />
          </Box>
        ))}
      </Box>
      <Divider sx={{ width: "100%" }} />
      <Button variant="contained">
        <Download />
        &nbsp; Resume
      </Button>
    </Box>
  );
}
