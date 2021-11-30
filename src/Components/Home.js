import React from "react";
import { Grid, useMediaQuery } from "@mui/material";
import Menu from "./Menu";
import "./Styles/Home.css";
import HomeCard from "./Components/HomeCard";
import { Box } from "@mui/system";
import MenuHeaderMobile from "./MenuHeaderMobile";
import MenuFooterMobile from "./MenuFooterMobile";

export default function Home({ pages }) {
  const fontForMobile = useMediaQuery("(max-width:900px)");
  return (
    <Box className="home-body">
      {!fontForMobile && (
        <Grid
          container
          justifyContent="center"
          alignContent="center"
          alignItems="center"
        >
          <Grid item md={10} style={{ padding: "5%" }}>
            <HomeCard />
          </Grid>
          <Grid item md={2}>
            <Menu pages={1} />
          </Grid>
        </Grid>
      )}
      {fontForMobile && (
        <Grid container>
          <Grid item xs={12}>
            <MenuHeaderMobile />
          </Grid>
          <Grid item xs={12} style={{padding:"10%"}}>
            <HomeCard />
          </Grid>
          <Grid item xs={12}>
            <MenuFooterMobile/>
          </Grid>
        </Grid>
      )}
    </Box>
  );
}
