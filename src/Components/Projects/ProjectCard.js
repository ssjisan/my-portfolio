import { Grid, Typography, Chip, Box, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import projectData from "../../Assets/projects.json";

export default function ProjectCard() {
  // eslint-disable-next-line
  const [project, setProject] = useState(projectData);
  const forBelow416 = useMediaQuery("(max-width:416px)");
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Grid container spacing={5}>
      {project.map((data) => (
        <Grid item lg={4} md={6} sm={6} key={data.id}>
          <Box sx={{ height: "auto", overflow: "auto" }}>
            <Box onClick={goToTop}>
              <Box
                sx={{
                  height: forBelow416 ? "220px" : "272px",
                  borderRadius: "12px",
                  overflow: "hidden",
                  border:"1px solid #EDEDED"
                }}
              >
                <img
                  src={data.image}
                  alt="images"
                  style={{
                    width: "100%",
                    height: forBelow416 ? "220px" : "272px",
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
                <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                  {data.tech.map((data, i) => (
                    <Chip
                    label={data}
                    variant="outlined"
                    sx={{
                      color: "#829795",
                      borderRadius: "2px",
                      border: "1px solid #B5B5B5",
                      fontWeight: 600,
                    }}
                  />
                  ))}
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
