import { Box, Grid, Typography } from "@mui/material";
import React from "react";

export default function ImageSection({handleOpen}) {
  const a = [
    "/Assets/Images/Projects/tech-hack/landing-page.svg",
    "/Assets/Images/Projects/tech-hack/profile.svg",
    "/Assets/Images/Projects/tech-hack/landing-page.jpg",
    "/Assets/Images/Projects/tech-hack/profile.svg",
    "/Assets/Images/Projects/tech-hack/landing-page.jpg",
    "/Assets/Images/Projects/tech-hack/profile.svg",
  ];

  return (
    <>
      <Grid
        container
        columnSpacing={3}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Grid item sm={6} md={6} lg={4}>
          <Box
            sx={{
              border: "1px solid #CACACA",
              borderRadius: "10px",
              overflow: "hidden",
            }}
            onClick={handleOpen}
          >
            <img
              src={a[0]}
              alt="nothing"
              style={{ width: "100%", height: "272px", objectFit: "cover" }}
            />
          </Box>
        </Grid>
        <Grid item sm={6} md={6} lg={4}>
          <Grid container spacing={2.25}>
            <Grid item sm={6} md={6} lg={6}>
              <Box
                sx={{
                  border: "1px solid #CACACA",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
                onClick={handleOpen}
              >
                <img
                  src={a[1]}
                  alt="nothing"
                  style={{
                    width: "100%",
                    height: "124px",
                    objectFit: "cover",
                  }}
                />
              </Box>
            </Grid>
            <Grid item sm={6} md={6} lg={6}>
              <Box
                sx={{
                  border: "1px solid #CACACA",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
                onClick={handleOpen}
              >
                <img
                  src={a[2]}
                  alt="nothing"
                  style={{
                    width: "100%",
                    height: "124px",
                    objectFit: "cover",
                  }}
                />
              </Box>
            </Grid>
            <Grid item sm={6} md={6} lg={6}>
              <Box
                sx={{
                  border: "1px solid #CACACA",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
                onClick={handleOpen}
              >
                <img
                  src={a[3]}
                  alt="nothing"
                  style={{
                    width: "100%",
                    height: "124px",
                    objectFit: "cover",
                  }}
                />
              </Box>
            </Grid>
            <Grid item sm={6} md={6} lg={6} sx={{ height: "124px" }}>
              <Box
                sx={{
                  border: "1px solid #CACACA",
                  position: "relative",
                  borderRadius: "10px",
                  overflow: "hidden",
                  width: "100%",
                }}
                onClick={handleOpen}
              >
                <img
                  src={a[4]}
                  alt="nothing"
                  style={{
                    width: "100%",
                    height: "124px",
                    objectFit: "cover",
                    filter: "blur(4px)",
                  }}
                />
                <Typography
                  sx={{
                    position: "absolute",
                    top: "60px",
                    left: "50%",
                    fontWeight: 700,
                    fontSize: "16px",
                  }}
                >
                  +{a.length - 4}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
