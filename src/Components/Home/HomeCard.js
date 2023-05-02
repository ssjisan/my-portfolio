import React from "react";
import { Typography, useMediaQuery, Box } from "@mui/material";
import CodeBlock from "./CodeBlock";
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
          ? "48px"
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
            ? "16px"
            : forBelow667
            ? "18px"
            : forBelow767
            ? "20px"
            : forBelow999
            ? "24px"
            : "24px",
          fontWeight: 400,
          textAlign: "center",
        }}
      >
        Sadman Sakib Jisan
      </Typography>
      <Typography
        sx={{
          fontSize: forBelow416
            ? "24px"
            : forBelow667
            ? "36px"
            : forBelow767
            ? "48px"
            : "48px",
          fontWeight: 700,
          textAlign: "center",
        }}
      >
        UI/UX Developer at{" "}
        <a href="https://www.byslglobal.com/" target="_blank" rel="noreferrer">
          <span style={{ textDecoration: "underline", color: "#111827" }}>
            BYSL
          </span>
        </a>
        .
        <br />
        Previously Front-end Developer at{" "}
        <a
          href="https://www.linkedin.com/company/techhack/"
          target="_blank"
          rel="noreferrer"
        >
          <span style={{ textDecoration: "underline", color: "#111827" }}>
            TechHack
          </span>
        </a>
        .
      </Typography>
      <Typography
        sx={{
          fontSize: forBelow667 ? "14px" : "20px",
          opacity: 0.6,
          fontWeight: 400,
          pb: 4,
        }}
      ></Typography>
      <CodeBlock />
    </Box>
  );
}
