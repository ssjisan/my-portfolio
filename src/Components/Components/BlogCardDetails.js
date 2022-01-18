import {
  Typography,
  Box,
} from "@mui/material";
import React from "react";
import "../Styles/AboutMe.css";
import ReactHtmlParser from "react-html-parser";
import "../Styles/AboutMe.css";

export default function BlogCardDetails({ singleBlog }) {
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
