import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import React, { useState, useEffect } from "react";
import parse from "html-react-parser";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import { Link, useParams } from "react-router-dom";
import blog from "../Assets/blogData.json";
export default function BlogDetails() {
  const forBelow680 = useMediaQuery("(max-width:680px)");
  const [isScrolling, setIsScrolling] = useState(false);
  const [selectedBlog, setSingleBlog] = useState([]);
  const { path } = useParams();
  useEffect(() => {
    let selectedBlog = blog.filter((data) => data.link === path);
    setSingleBlog(selectedBlog);
  }, [path]);
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
          >
            <Link to="/">
              <img src="Assets/Images/Logo/Logo-black.png" alt="logo" />
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
      </Container>
    </Box>
  );
}
