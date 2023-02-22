import { Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { TypeScript } from "../../Assets/Icon/Icons";
import { LightAsync as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import tomorrowNightBright from "react-syntax-highlighter/dist/esm/styles/hljs/tomorrow-night-bright";

SyntaxHighlighter.registerLanguage("javascript", js);
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
      <Box
        sx={{
          backgroundColor: "#1B1F21",
          display: "flex",
          pl: 2,
          pt: 0.5,
          gap: 2,
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", gap: 1 }}>
          <Box
            sx={{
              backgroundColor: "#FC5F55",
              height: "10px",
              width: "10px",
              borderRadius: "100%",
            }}
          ></Box>
          <Box
            sx={{
              backgroundColor: "#FDBB40",
              height: "10px",
              width: "10px",
              borderRadius: "100%",
            }}
          ></Box>
          <Box
            sx={{
              backgroundColor: "#34C449",
              height: "10px",
              width: "10px",
              borderRadius: "100%",
            }}
          ></Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 1,
            p: 1,
            justifyContent: "flex-start",
            width: "120px",
            alignItems: "center",
            backgroundColor: "#000000",
            borderRadius: "10px 10px 0px 0px",
          }}
        >
          <Box sx={{ height: "16px", width: "16px" }}>
            <TypeScript />
          </Box>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 400,
              color: "#FFF",
              width: "100%",
            }}
          >
            Intro.js
          </Typography>
          <Box>
            <CloseRoundedIcon sx={{ color: "#FFF", fontSize: "16px" }} />
          </Box>
        </Box>
      </Box>
      <Box>
        <SyntaxHighlighter
          showLineNumbers
          style={tomorrowNightBright}
          language="javascript"
          customStyle={{
            width: "100%",
            margin: 0,
            paddingTop: forBelow667 ? "16px" : forBelow767 ? "32px" : "48px",
            paddingBottom: forBelow667 ? "16px" : forBelow767 ? "32px" : "48px",
            paddingLeft: forBelow767 ? "0px" : "16px",
            paddingRight: "48px",
            fontSize: forBelow767 ? "14px" : "18px",
          }}
        >
          {forBelow767
            ? `const Intro = [
{
    name: "Sadman Sakib Jisan",
    email: "ssjisan.dev@gmail.com",
    phone: "+8801675893967",
    passion: [
      "Front end Development",
      "UI/UX Development",
      "UX Research",
      "Interactive Design",
      "Prototyping"
    ],
  },
];

export default Intro;`
            : `const Intro = [
  {
      name: "Sadman Sakib Jisan",
      email: "ssjisan.dev@gmail.com",
      phone: "+8801675893967",
      passion: ["Front end Development","Web Development","UI/UX Development",
                "UX Research","Interactive Design","Prototyping"]
    },
  ];
  
export default Intro;`}
        </SyntaxHighlighter>
      </Box>
    </Box>
  );
}
