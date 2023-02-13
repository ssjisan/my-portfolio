import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  Grid,
  Chip,
  Divider,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import parse from "html-react-parser";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import { Link, useParams } from "react-router-dom";
import blog from "../Assets/blogData.json";
const linkStyle = {
  textDecoration: "none",
};
export default function ProjectDetails() {
  const forBelow680 = useMediaQuery("(max-width:680px)");
  const forBelow416 = useMediaQuery("(max-width:416px)");
  const [isScrolling, setIsScrolling] = useState(false);
  const [selectedBlog, setSingleBlog] = useState([]);
  const [relatedBlog, setRelatedBlog] = useState([]);
  const { path } = useParams();
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    let selectedBlog = blog.filter((data) => data.link === path);
    setSingleBlog(selectedBlog);
    let remainBlogs = blog.filter((data) => data.link !== path);
    remainBlogs.sort(() => Math.random() - 0.5);
    setRelatedBlog(remainBlogs.slice(0, 4));
  }, [path]);
  console.log("remain", relatedBlog);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line
  }, []);
  const handleScroll = () => {
    if (window.pageYOffset > 160 && !isScrolling) {
      setIsScrolling(true);
    } else if (window.pageYOffset <= 160 && isScrolling) {
      setIsScrolling(false);
    }
  };

  return (
    <Box>
      <Box
        sx={{
          boxShadow: isScrolling ? "0px 0px 20px rgba(0, 0, 0, 0.08)" : "none",
          position: "fixed",
          top: 0,
          width: "100%",
          background: "white",
        }}
      >
        <Container
          sx={{
            p: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link to="/blog">
            <ArrowBackIosNewRoundedIcon />
          </Link>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
            onClick={goToTop}
          >
            <Link to="/">
              <img src="/Assets/Images/Logo/Logo-black.png" alt="logo" />
            </Link>
          </Box>
        </Container>
      </Box>
      <Container>
        <Box sx={{ mt: 14 }}>
          {selectedBlog.map((data) => {
            return (
              <Box>
                <Box sx={{ mb: 2 }}>
                  <Box sx={{ mb: 5 }}>
                    <Typography
                      sx={{
                        fontSize: forBelow680 ? "24px" : "32px",
                        fontWeight: 700,
                      }}
                    >
                      {data.title}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        gap: 1,
                        alignItems: "center",
                        mt: 2,
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: 400,
                          opacity: 0.6,
                          color: "#111827",
                        }}
                      >
                        {data.date}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: 400,
                          opacity: 0.6,
                          color: "#111827",
                        }}
                      >
                        |
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: 400,
                          opacity: 0.6,
                          color: "#111827",
                        }}
                      >
                        {data.time}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: 400,
                          opacity: 0.6,
                          color: "#111827",
                          display: forBelow680 && "none",
                        }}
                      >
                        |
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: 400,
                          color: "#ff3535",
                          display: forBelow680 && "none",
                        }}
                      >
                        #{data.tags}
                      </Typography>
                    </Box>
                  </Box>
                  <img
                    src={data.imgUrl}
                    alt={data.link}
                    style={{
                      width: "100%",
                      height: forBelow680 ? "220px" : "380px",
                      objectFit: "cover",
                    }}
                  />
                </Box>
                <Box>{parse(data.details)}</Box>
              </Box>
            );
          })}
        </Box>
        <Box sx={{ mt: 5, mb: 5 }}>
          <Box sx={{ mb: 4 }}>
            <Divider>
              <Typography
                sx={{
                  fontSize: forBelow680 ? "20px" : "24px",
                  fontWeight: 700,
                  textAlign: "center",
                }}
              >
                Related Blogs
              </Typography>
            </Divider>
          </Box>
          <Grid container spacing={forBelow416 ? 1 : 4}>
            {relatedBlog.map((data) => {
              return (
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Link to={`/blog/${data.link}`} style={linkStyle}>
                    <Box onClick={goToTop}>
                      <Box
                        sx={{
                          width: "100%",
                          height: forBelow416 ? "160px" : "180px",
                          borderRadius: "12px",
                          overflow: "hidden",
                        }}
                      >
                        <img
                          src={data.imgUrl}
                          alt="images"
                          style={{
                            width: "100%",
                            height: forBelow416 ? "160px" : "180px",
                            objectFit: "cover",
                          }}
                        />
                      </Box>
                      <Box
                        sx={{
                          mt: 1,
                          display: "flex",
                          flexDirection: "column",
                          gap: forBelow416 ? 0.5 : 2,
                        }}
                      >
                        <Box sx={{ display: "flex", gap: 1 }}>
                          <Chip
                            label={data.tags}
                            sx={{
                              backgroundColor: "#fff1f1",
                              color: "#ff3535",
                              fontWeight: 700,
                            }}
                          />{" "}
                        </Box>
                        <Typography
                          sx={{
                            fontSize: forBelow416 ? "14px" : "16px",
                            fontWeight: 700,
                            color: "#111827",
                          }}
                        >
                          {data.title}
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <Typography
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              fontSize: forBelow416 ? "12px" : "14px",
                              fontWeight: 400,
                              opacity: 0.6,
                              color: "#111827",
                              height: "36px",
                            }}
                          >
                            {data.date}
                          </Typography>
                          <Typography
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              fontSize: forBelow416 ? "10px" : "14px",
                              fontWeight: 400,
                              opacity: 0.6,
                              color: "#111827",
                              height: "36px",
                            }}
                          >
                            {data.time}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Link>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
