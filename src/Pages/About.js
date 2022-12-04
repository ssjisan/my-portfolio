import { Grid, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import AboutMe from "../Components/About/AboutMe";
import Menu from "../Components/Menu/Menu";
import MobileMenu from "../Components/Menu/MobileMenu";
import "../Components/Styles/AboutMe.css";
export default function About() {
  const fontForMobile = useMediaQuery("(max-width:900px)");
  const forBelow999 = useMediaQuery("(max-width:999px)");
  const forBelow416 = useMediaQuery("(max-width:416px)");

  return (
    <Box className="bio-body">
      <Box>
        {!fontForMobile && (
          <Grid container>
            <Grid
              item
              md={11}
              sx={{
                p: forBelow999 ? 2 : 5,
                maxHeight: "100vh",
                overflowY: "scroll",
              }}
              className="scroll"
            >
              <AboutMe />
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
          <Box sx={{ padding: forBelow416? "20px 16px 80px 16px" : "20px 32px 80px 32px" }}>
            <AboutMe />
            <MobileMenu />
          </Box>
        )}
      </Box>
    </Box>
  );
}
