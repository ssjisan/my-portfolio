import {
  Box,
  Button,
  Chip,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import "../Styles/AboutMe.css";
import blog from "../../Assets/blogData.json";
export default function BlogCard() {
  const forBelow416 = useMediaQuery("(max-width:416px)");

  return (
    <Grid container spacing={forBelow416 ? 1 : 4}>
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
                  style={{
                    width: "100%",
                    height: forBelow416 ? "120px" : "220px",
                    objectFit: "cover",
                  }}
                />
              </Box>
              <Box
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  gap: forBelow416 ? 0.5 : 2,
                }}
              >
                <Box sx={{ display: "flex", gap: 1 }}>
                  <Chip
                    label={data.tags}
                    sx={{
                      backgroundColor: "rgba(197, 29, 29, 0.2)",
                      color: "#C51D1D",
                      fontSize: forBelow416 ? "10px" : "14px",
                    }}
                  />{" "}
                </Box>
                <Typography
                  sx={{
                    fontSize: forBelow416 ? "14px" : "18px",
                    fontWeight: 700,
                  }}
                >
                  {data.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: forBelow416 ? "10px" : "16px",
                    fontWeight: 400,
                    opacity: 0.6,
                    height: forBelow416 ? "36px" : "64px",
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
                    rel="noreferrer"
                  >
                    <Button
                      variant="outlined"
                      sx={{
                        fontSize: forBelow416 ? "10px" : "14px",
                        height: forBelow416 ? "24px" : "36px",
                      }}
                    >
                      Read More
                    </Button>
                  </a>
                  {data?.time ? (
                    <Typography
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: forBelow416 ? "10px" : "14px",
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
