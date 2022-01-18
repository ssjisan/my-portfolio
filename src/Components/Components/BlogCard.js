import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import "../Styles/AboutMe.css";
import blogData from "../../Assets/blogData.json";
import ReactHtmlParser from "react-html-parser";
import { useState } from "react";
import "../Styles/AboutMe.css";
import { Link } from "react-router-dom";

export default function BlogCard() {
  // eslint-disable-next-line
  const [blog, setBlog] = useState(blogData);
  return (
    <Grid container spacing={1}>
      {blog.map((data) => (
        <Grid item md={4} sm={6} xs={12} key={data.id}>
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
                style={{ fontWeight: "bold", color: "#22215B", height: "50px" }}
              >
                {data.Title}
              </Typography>
              <Typography variant="body1" style={{ color: "#7A7A9D" }}>
                {ReactHtmlParser(data.Details.substring(0, 250))}
              </Typography>
              <Link to={"/blogDetails/"+data.id}>
                <Typography variant="body2" style={{ color: "#22215B" }}>
                  Read More
                </Typography>
              </Link>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
