import { Grid, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useRef, useState } from "react";
import HomeCard from "./Components/HomeCard";
import Menu from "./Menu/Menu";
import MenuFooterMobile from "./Menu/MenuFooterMobile";
import MenuHeaderMobile from "./Menu/MenuHeaderMobile";
import Lottie from "lottie-web";
import "./Styles/Home.css";

export default function Home({ pages }) {
  const fontForMobile = useMediaQuery("(max-width:900px)");
  const [loading, setLoading] = useState(true);
  const container = useRef(null);
  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoPlay: true,
      animationData: require("../Assets/anime.json"),
    });
  }, []);
  setTimeout(() => {
    setLoading(false);
  }, 3000);
  return (
    <Box className="home-body">
      {loading ? (
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Box ref={container} style={{ width: "250px" }}></Box>
        </Box>
      ) :(<Box>{!fontForMobile && (
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
            <MenuHeaderMobile pages={1}/>
          </Grid>
          <Grid item xs={12} style={{paddingTop:"5%",maxHeight:"85vh",overflowY:"scroll"}}>
            <HomeCard />
          </Grid>
          <Grid item xs={12} style={{display:"flex", justifyContent:"center", width:"100%", position:"fixed", bottom:0,maxHeight:"10vh"}}>
            <MenuFooterMobile/>
          </Grid>
        </Grid>
      )}</Box>)}
    </Box>
  );
}
