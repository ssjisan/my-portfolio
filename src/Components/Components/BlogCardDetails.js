import {
  Typography,
  Box,
  useMediaQuery
} from "@mui/material";
import React from "react";
import "../Styles/AboutMe.css";
import ReactHtmlParser from "react-html-parser";
import "../Styles/AboutMe.css";

export default function BlogCardDetails({ singleBlog }) {
  const forBelow900 = useMediaQuery("(max-width:900px)");
  const forBelow700 = useMediaQuery("(max-width:700px)");
  const forBelow500 = useMediaQuery("(max-width:500px)");
  const forBelow400 = useMediaQuery("(max-width:400px)");
  return (
    <Box>
      {singleBlog.map((data, i) => (
        <Box style={{display: 'flex',flexDirection: 'column',justifyContent: 'center',alignItems: 'center'}}>
          <Typography variant={(forBelow400&&"body1")||(forBelow500&&"h6")||(forBelow700&&"h5")||"h4"} style={{padding:"2%",fontWeight:"bold"}}>{data.Title}</Typography>
          <img
            src={data.imgUrl}
            alt={data.Title}
            style={{ width:(forBelow400&&"100%")||(forBelow500&&"70%")||(forBelow900&&"60%")||"50%",padding:"2%"}}
          />
          <Typography variant={forBelow400?"body2":"body1"} style={{ color: "#000" ,padding:"2%"}}>
            {ReactHtmlParser(data.Details)}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
