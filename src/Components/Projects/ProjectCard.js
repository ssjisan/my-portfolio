import { Grid, Box, useMediaQuery, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import projectData from "../../Assets/projects.json";

export default function ProjectCard() {
  // eslint-disable-next-line
  const [project, setProject] = useState(projectData);
  const forBelow416 = useMediaQuery("(max-width:416px)");
  const forBelow467 = useMediaQuery("(max-width:467px)");
  const forBelow900 = useMediaQuery("(max-width:900px)");
  const reverseData=[...project].reverse()
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Grid
      container
      spacing={forBelow416 ? 2 : 5}
      sx={{ display: "flex", justifyContent: "center" }}
    >
      {reverseData.map((data, i) => (
        <Grid
          item
          lg={4}
          md={6}
          sm={6}
          xs={12}
          key={data.id}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              backgroundColor: "rgba(186,186,186,0.16)",
              borderRadius: "8px",
              overflow: "hidden",
              p:"16px",
              maxWidth:"430px",
              width:"100%",
              display:"flex",
              flexDirection:"column",
              gap:"24px",
              backdropFilter:"blur(8px)"
            }}
            onClick={goToTop}
          >
            <Box>
              <img src={data.thumbnails} alt="thumb" width="100%"/>
            </Box>
            <Box sx={{display:"flex", gap:"12px"}}>
              <Box sx={{width:"40px", height:"40px", backgroundColor:"#000", borderRadius:"100%"}}></Box>
              <Box>
                <Typography sx={{fontSize:"16px", fontWeight:700,}}>{data.title}</Typography>
                <Typography>{data.owner}</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
