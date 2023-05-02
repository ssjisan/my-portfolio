import { Grid, Box, useMediaQuery, Typography, Button } from "@mui/material";
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
    <Grid container spacing={forBelow416 ? 2 : 5}>
      {project.map((data, i) => (
        <Grid
          item
          lg={10}
          md={10}
          sm={12}
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
              backgroundColor: data.bg,
              borderRadius: "16px",
              overflow: "hidden",
            }}
          >
            <Box onClick={goToTop}>
              <Grid container>
                <Grid
                  item
                  md={6}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <Box
                    sx={{
                      p: 4,
                      display: "flex",
                      flexDirection: "column",
                      gap: 4,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "32px",
                        fontWeight: 600,
                        opacity: "30%",
                        color: "#fff",
                      }}
                    >
                      {i + 1}/
                    </Typography>
                    <Box
                      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                    >
                      <Typography
                        sx={{
                          fontSize: "32px",
                          fontWeight: 600,
                          color: "#fff",
                          width: "320px",
                        }}
                      >
                        {data.title}
                      </Typography>
                      <Box sx={{ display: "flex", gap: 4 }}>
                        <Box>
                          <Typography
                            sx={{
                              fontSize: "14px",
                              fontWeight: 400,
                              mb: 1,
                              color: "#FFF",
                              opacity: "64%",
                            }}
                          >
                            Completetion Time
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: "16px",
                              fontWeight: 600,
                              color: "#FFF",
                            }}
                          >
                            {data.completetion}
                          </Typography>
                        </Box>
                        <Box>
                          <Typography
                            sx={{
                              fontSize: "14px",
                              fontWeight: 400,
                              mb: 1,
                              color: "#FFF",
                              opacity: "64%",
                            }}
                          >
                            Total Team Member
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: "16px",
                              fontWeight: 600,
                              color: "#FFF",
                            }}
                          >
                            {data.totalMember}
                          </Typography>
                        </Box>
                        <Box>
                          <Typography
                            sx={{
                              fontSize: "14px",
                              fontWeight: 400,
                              mb: 1,
                              color: "#FFF",
                              opacity: "64%",
                            }}
                          >
                            My Role
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: "16px",
                              fontWeight: 600,
                              color: "#FFF",
                            }}
                          >
                            {data.role}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    <Box>
                      <Button sx={{ border: "1px solid white", color: "#FFF" }}>
                        See More
                      </Button>
                    </Box>
                  </Box>
                </Grid>
                <Grid item md={6}>
                  <Box sx={{ height: "400px" }}>
                    <img
                      src={data.thumbnails}
                      alt="1"
                      style={{
                        height: "400px",
                        objectFit: "cover",
                        width: "100%",
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
