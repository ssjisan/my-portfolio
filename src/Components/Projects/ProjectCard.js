import { Grid, Box, useMediaQuery } from "@mui/material";
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
    <Grid container spacing={forBelow416?2:5}>
      {project.map((data) => (
        <Grid item lg={4} md={6} sm={6} xs={12} key={data.id}>
          <Box>
            <Box onClick={goToTop}>
              <Box
                sx={{
                  width: "100%",
                  height: forBelow416 ? "220px" : "272px",border: "1px solid #ededed", borderRadius: "12px" 
                }}
              >
                <img
                  src={data.thumbnails}
                  alt="images"
                  style={{
                    width: "100%",
                    height: forBelow416 ? "220px" : "272px",borderRadius: "12px" ,
                    objectFit: "cover",
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
