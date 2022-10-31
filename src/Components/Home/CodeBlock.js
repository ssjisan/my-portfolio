import { Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import tomorrow from "react-syntax-highlighter/dist/esm/styles/hljs/tomorrow";
import Close from "../../Assets/Icon/Close";
import TypeScript from "../../Assets/Icon/TypeScript";

export default function CodeBlock() {
  const forBelow667 = useMediaQuery("(max-width:667px)");
  const forBelow767 = useMediaQuery("(max-width:767px)");
  const forBelow899 = useMediaQuery("(max-width:899px)");
  const forBelow1100 = useMediaQuery("(max-width:1100px)");
  return (
    <Box
      sx={{
        width: forBelow667
          ? "90%"
          : forBelow767
          ? "650px"
          : forBelow899
          ? "750px"
          : forBelow1100
          ? "800px"
          : "960px",
        borderRadius: "10px",
        overflow: "hidden",
        border: "1px solid rgba(0, 0, 0, 0.2)",
      }}
    >
      <Box sx={{ backgroundColor: "#C7D8FF" }}>
        <Box
          sx={{
            display: "flex",
            gap: 1,
            p: 1,
            justifyContent: "flex-start",
            width: "120px",
            alignItems: "center",
            borderTop: "1px solid rgba(93, 131, 222, 0.6)",
            borderRight: "1px solid rgba(93, 131, 222, 0.2)",
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
            <Close />
          </Box>
        </Box>
      </Box>
      <Box>
        <SyntaxHighlighter
          showLineNumbers
          style={tomorrow}
          language="typescript"
          customStyle={{
            width: "100%",
            margin: 0,
            paddingTop: forBelow667 ? "16px" : forBelow767 ? "32px" : "48px",
            paddingBottom: "48px",
            paddingLeft: forBelow767 ? "0px" : "16px",
            paddingRight: "48px",
            fontSize: forBelow767 ? "14px" : "18px",
          }}
        >
          {`I’m Sadman Sakib Jisan, a UI/UX Design & Developer.

I’m currently working at Priffle: The digital agency that harness the power of 
brands. At Priffle we work with start-ups as well as established brands, crafting 
phenomenal digital products to help bring brands stand out in the crowd.

During my "spare" time, Im also working on Aezthetics app. This new fitness app 
helps you to reach your goals and stay on track with a sleek interface. It has 
everything from workout plans, food diary tools or even fasting tracker so there is 
no need for multiple apps anymore.`}
        </SyntaxHighlighter>
      </Box>
    </Box>
  );
}
