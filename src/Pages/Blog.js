import React from "react";
import { Grid, useMediaQuery } from "@mui/material";
import "../Components/Styles/Blog.css";
import { Box } from "@mui/system";
import BlogCard from "../Components/Blog/BlogCard";
import Menu from "../Components/Menu/Menu";
import MobileMenu from "../Components/Menu/MobileMenu";

export default function Blog() {
  const fontForMobile = useMediaQuery("(max-width:900px)");
  const forBelow416 = useMediaQuery("(max-width:416px)");

  return (
    <Box>
      <Box>
        {!fontForMobile && (
          <Grid container>
            <Grid
              item
              md={11}
              className="scroll"
              sx={{
                p: 5,
                maxHeight: "100vh",
                overflowY: "scroll",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              <BlogCard />
            </Grid>
            <Grid
              item
              md={1}
              sx={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Menu />
            </Grid>
          </Grid>
        )}
        {fontForMobile && (
        <Box sx={{ padding: forBelow416? "20px 16px 80px 16px" : "20px 32px 80px 32px" }}>
        <BlogCard />
            <MobileMenu />
          </Box>
        )}
      </Box>
    </Box>
  );
}
