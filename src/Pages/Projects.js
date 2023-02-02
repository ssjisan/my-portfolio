import React from "react";
import { Grid, useMediaQuery } from "@mui/material";
import ProjectCard from "../Components/Projects/ProjectCard";
import { Box } from "@mui/system";
import Menu from "../Components/Menu/Menu";
import MobileMenu from "../Components/Menu/MobileMenu";

export default function Projects() {
  const fontForMobile = useMediaQuery("(max-width:900px)");
  const forBelow416 = useMediaQuery("(max-width:416px)");

  return (
    <Box>
      <Box>
        {!fontForMobile && (
          <Grid container>
            <Grid
              item
              md={11}
              className="scroll"
              sx={{
                padding: "5%",
                maxHeight: "100vh",
                overflowY: "scroll",
              }}
            >
              <ProjectCard />
            </Grid>
            <Grid
              item
              md={1}
              sx={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Menu />
            </Grid>
          </Grid>
        )}
        {fontForMobile && (
          <Box
            sx={{
              padding: forBelow416
                ? "20px 16px 80px 16px"
                : "20px 32px 80px 32px",
            }}
          >
            <ProjectCard />
            <MobileMenu />
          </Box>
        )}
      </Box>
    </Box>
  );
}
