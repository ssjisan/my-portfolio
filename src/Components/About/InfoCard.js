import { Typography, Box, Divider, Button, useMediaQuery } from "@mui/material";
import React from "react";
import Download from "../../Assets/Icon/Download";
import Arrow from "../../Assets/Icon/Arrow";
import "../Styles/AboutMe.css";
import socialConnection from "../../Assets/SocialConnection";
export default function InfoCard() {
  const forBelow899 = useMediaQuery("(max-width:899px)");
  const forBelow1199 = useMediaQuery("(max-width:1199px)");
  return (
    <Box
      sx={{
        maxWidth: forBelow899 ? "240px" : "280px",
        p: 4,
        backgroundColor: "#FAFCFF",
        border: "1px solid rgba(0, 0, 0, 0.2)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "16px",
        gap: 2,
        position: !forBelow1199 && "fixed",
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
        <Typography
          sx={{ fontWeight: 700, fontSize: forBelow899 ? "20px" : "24px" }}
        >
          Sadman Sakib Jisan
        </Typography>
        <Typography
          sx={{ fontWeight: 350, fontSize: forBelow899 ? "14px" : "16px" }}
        >
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
            key={data.id}
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
      <Button variant="outlined" sx={{ width: "150px" }}>
        <Download />
        &nbsp;&nbsp; Resume
      </Button>
    </Box>
  );
}
