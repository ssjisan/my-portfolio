import React from "react";
import { Grid } from "@mui/material";
import Menu from "./Menu/Menu";
import "./Styles/Blog.css";
import { Box } from "@mui/system";
import BlogCard from "./Components/BlogCard";
export default function Blog({ pages }) {
  return (
    <div className="blog-body">
      <Grid container>
        <Grid item md={10} style={{padding:"5%"}}>
          <BlogCard />{" "}
        </Grid>
        <Grid item md={2}>
          <Menu pages={5} />
        </Grid>
      </Grid>
    </div>
  );
}
