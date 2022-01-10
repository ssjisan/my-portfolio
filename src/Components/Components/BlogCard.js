import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "../Styles/AboutMe.css";
import blogData from "../../Assets/data.json";
import ReactHtmlParser from 'react-html-parser';

import { useState } from "react";
import "../Styles/AboutMe.css";

export default function BlogCard() {
  const forBelow900 = useMediaQuery("(max-width:900px)");
  const forBelow1500 = useMediaQuery("(max-width:1500px)");
  const forBelow1200 = useMediaQuery("(max-width:1210px)");
  //   const for955to901 = useMediaQuery("(min-width:901px) and (max-width:960px)");
  const [blog, setBlog] = useState(blogData);
  return (
    <Grid container spacing={1}>
      {blog.map((data) => (
        <Grid item md={4}>
          <Card style={{ borderRadius: "20px" }}>
            <CardMedia style={{ padding: "2%" }}>
              <img
                src={data.imgUrl}
                alt={data.Title}
                style={{ maxWidth: "100%", borderRadius: "20px" }}
              />
            </CardMedia>
            <CardContent style={{ padding: "3%" }}>
              <Typography
                variant="h5"
                style={{ fontWeight: "bold", color: "#22215B",height:"50px"}}
              >
                {data.Title}
              </Typography>
              <Typography variant="body1" style={{ color: "#7A7A9D" }}>
                {ReactHtmlParser(data.Details.substring(0, 250))}
              </Typography>
              <Typography variant="body2" style={{ color: "#22215B" }}>
                Read More
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
