import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Box,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import "../Styles/AboutMe.css";
import ReactHtmlParser from "react-html-parser";
import { useState } from "react";
import "../Styles/AboutMe.css";

export default function BlogCardDetails({ singleBlog }) {
  const forBelow900 = useMediaQuery("(max-width:900px)");
  const forBelow1500 = useMediaQuery("(max-width:1500px)");
  const forBelow1200 = useMediaQuery("(max-width:1210px)");
  //   const for955to901 = useMediaQuery("(min-width:901px) and (max-width:960px)");
  console.log(singleBlog);
  return (
    <Box>
      {singleBlog.map((data, i) => (
        <Box style={{display: 'flex',flexDirection: 'column',justifyContent: 'center',alignItems: 'center'}}>
          <Typography variant="h2" style={{padding:"2%"}}>{data.Title}</Typography>
          <img
            src={data.imgUrl}
            alt={data.Title}
            style={{ maxWidth: "100%",padding:"2%"}}
          />
          <Typography variant="body1" style={{ color: "#000" ,padding:"2%"}}>
            {ReactHtmlParser(data.Details)}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
