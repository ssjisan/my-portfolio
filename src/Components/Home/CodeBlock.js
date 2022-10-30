import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import tomorrowNight from "react-syntax-highlighter/dist/esm/styles/hljs/tomorrow-night";
import TypeScript from "../../Assets/Icon/TypeScript";

export default function CodeBlock() {
  return (
    <Box sx={{ width: "960px" }}>
      <Box
        sx={{
          display: "flex",
          gap: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ height: "16px", width: "16px" }}>
          <TypeScript />
        </Box>
        <Typography
          sx={{ fontSize: "14px", fontWeight: 400, color: "#5F656F" }}
        >
          readme.js
        </Typography>
        <Box sx={{ height: "16px", width: "16px" }}>
          <TypeScript />
        </Box>
      </Box>
      <SyntaxHighlighter
        showLineNumbers
        style={tomorrowNight}
        language="typescript"
        customStyle={{
          paddingTop: "3rem",
          paddingBottom: "3rem",
          paddingLeft: "1rem",
          paddingRight: "3rem",
          fontSize: "18px",
        }}
      >
        {`Im Sadman Sakib Jisan, a UI/UX Design & Developer.

I’m currently working at Priffle: The digital agency that harness the power of 
brands. At Priffle we work with start-ups as well as established brands, crafting 
phenomenal digital products to help bring brands stand out in the crowd.

During my "spare" time, Im also working on Aezthetics app. This new fitness app 
helps you to reach your goals and stay on track with a sleek interface. It has 
everything from workout plans, food diary tools or even fasting tracker so there is 
no need for multiple apps anymore.`}
      </SyntaxHighlighter>
    </Box>
  );
}
