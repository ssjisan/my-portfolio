import React from "react";
import { Grid, useMediaQuery } from "@mui/material";
import Menu from "./Menu/Menu";
import "./Styles/AboutMe.css";
import AboutMeCard from "./Components/AboutMeCard"
import { Box } from "@mui/system";
export default function AboutMe({ pages }) {
  const fontForMobile = useMediaQuery("(max-width:900px)");
  return (
    <Box className="aboueMe-body">
      <Grid container>
        <Grid item md={10} style={{ padding: "5%" }}>
          <AboutMeCard />
        </Grid>
        <Grid item md={2}>
          <Menu pages={2} />
        </Grid>
      </Grid>
    </Box>
  );
}
