import { Grid, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import HomeCard from "./Components/HomeCard";
import Menu from "./Menu";
import MenuFooterMobile from "./MenuFooterMobile";
import MenuHeaderMobile from "./MenuHeaderMobile";
import "./Styles/Home.css";

export default function Home({ pages }) {
  const fontForMobile = useMediaQuery("(max-width:900px)");
  return (
    <Box className="home-body">
      {!fontForMobile && (
        <Grid
          container
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
        <Grid container style={{ display: "flex" , justifyContent: "space-between"  }}>
          <Grid item xs={12} style={{ display:"flex", justifyContent:"center", width:"100%", top:0,maxHeight:"10vh", padding:"2%"}}>
            <MenuHeaderMobile />
          </Grid>
          <Grid item xs={12} style={{paddingTop:"10%",maxHeight:"85vh",overflowY:"scroll"}}>
            <HomeCard />
          </Grid>
          <Grid item xs={12} style={{display:"flex", justifyContent:"center", width:"100%", position:"fixed", bottom:0,maxHeight:"10vh"}}>
            <MenuFooterMobile/>
          </Grid>
        </Grid>
      )}
    </Box>
  );
}
