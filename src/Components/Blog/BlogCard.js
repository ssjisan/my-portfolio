import { Box, Button, Chip, Grid, Typography } from "@mui/material";
import React from "react";
import "../Styles/AboutMe.css";
import blog from "../../Assets/blogData.json";
export default function BlogCard() {
  return (
    <Grid container spacing={4}>
      {blog.map((data) => {
        return (
          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                border: "1px solid rgba(0,0,0,0.06)",
                borderRadius: "12px",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  borderRadius: "12px 12px 0px 0px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={data.imgUrl}
                  alt="images"
                  style={{ width: "100%", height: "220px", objectFit: "cover" }}
                />
              </Box>
              <Box
                sx={{ p: 2, display: "flex", flexDirection: "column", gap: 2 }}
              >
                <Box sx={{ display: "flex", gap: 1 }}>
                  <Chip
                    label={data.tags}
                    sx={{
                      backgroundColor: "rgba(197, 29, 29, 0.2)",
                      color: "#C51D1D",
                    }}
                  />{" "}
                </Box>
                <Typography sx={{ fontSize: "18px", fontWeight: 700 }}>
                  {data.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: 400,
                    opacity: 0.6,
                    height: "64px",
                  }}
                >
                  {data.demo}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <a
                    href={data.link}
                    style={{ textDecoration: "none" }}
                    target="_blank"
                  >
                    <Button variant="outlined" sx={{ height: "36px" }}>
                      Read More
                    </Button>
                  </a>
                  {data?.time ? (
                    <Typography
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "14px",
                        fontWeight: 400,
                        opacity: 0.6,
                        height: "36px",
                      }}
                    >
                      {data.time}
                    </Typography>
                  ) : (
                    <img
                      src="https://i.ibb.co/7NNLcJJ/loader.gif"
                      alt="loader"
                      style={{ width: "36px", height: "36px" }}
                    />
                  )}
                </Box>
              </Box>
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
}
