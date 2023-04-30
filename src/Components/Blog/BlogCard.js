import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import blog from "../../Assets/blogData.json";

const linkStyle = {
  textDecoration: "none",
};
export default function BlogCard() {
  const forBelow416 = useMediaQuery("(max-width:416px)");
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Grid container spacing={forBelow416 ? 1 : 4}>
      {blog.map((data) => {
        return (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Link to={`/blog/${data.link}`} style={linkStyle}>
              <Box onClick={goToTop}>
                <Box
                  sx={{
                    width: "100%",
                    height: forBelow416 ? "180px" : "200px",
                    borderRadius: "12px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={data.imgUrl}
                    alt="images"
                    style={{
                      width: "100%",
                      height: forBelow416 ? "180px" : "200px",
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
  );
}
