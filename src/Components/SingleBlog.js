import React, { useEffect, useRef, useState } from "react";
import { Grid, useMediaQuery } from "@mui/material";
import Menu from "./Menu/Menu";
import "./Styles/AboutMe.css";
import { Box } from "@mui/system";
import MenuHeaderMobile from "./Menu/MenuHeaderMobile";
import MenuFooterMobile from "./Menu/MenuFooterMobile";
import BlogCardDetails from "./Components/BlogCardDetails";
import { useParams } from "react-router-dom";
import blogData from "../Assets/blogData.json";
import Lottie from "lottie-web";

export default function SingleBlog() {
  const fontForMobile = useMediaQuery("(max-width:900px)");
  const { id } = useParams();
  // eslint-disable-next-line
  const [blog, setBlog] = useState(blogData);
  const [singleBlog, setSingleBlog] = useState([]);
  useEffect(() => {
    let selectedBlog = blog.filter((data) => data.id === +id);
    setSingleBlog(selectedBlog);
  }, []);// eslint-disable-line react-hooks/exhaustive-deps
  const [loading, setLoading] = useState(true);
  const container = useRef(null);
  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoPlay: true,
      animationData: require("../Assets/anime.json"),
    });
  }, []);
  setTimeout(() => {
    setLoading(false);
  }, 2500);
  return (
    <Box className="bio-body">
      {loading ? (
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Box ref={container} style={{ width: "250px" }}></Box>
        </Box>
      ) : (
        <Box>
          {" "}
          {!fontForMobile && (
            <Grid container>
              <Grid
                item
                md={10}
                className="scroll"
                style={{
                  padding: "5%",
                  maxHeight: "100vh",
                  overflowY: "scroll",
                }}
              >
                <BlogCardDetails singleBlog={singleBlog} />
              </Grid>
              <Grid item md={2}>
                <Menu pages={5} />
              </Grid>
            </Grid>
          )}
          {fontForMobile && (
            <Grid
              container
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Grid
                item
                xs={12}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                  top: 0,
                  maxHeight: "10vh",
                  padding: "2%",
                }}
              >
                <MenuHeaderMobile />
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                style={{
                  padding: "5%",
                  maxHeight: "85vh",
                  overflowY: "scroll",
                }}
              >
                <BlogCardDetails singleBlog={singleBlog} />
              </Grid>
              <Grid
                item
                xs={12}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                  position: "fixed",
                  bottom: 0,
                  maxHeight: "10vh",
                }}
              >
                <MenuFooterMobile pages={6} />
              </Grid>
            </Grid>
          )}
        </Box>
      )}
    </Box>
  );
}
