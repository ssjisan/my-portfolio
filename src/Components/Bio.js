import { Grid, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import Lottie from "lottie-web";
import React, { useEffect, useRef, useState } from "react";
import BioCard from "./Components/BioCard";
import Menu from "./Menu/Menu";
import MenuFooterMobile from "./Menu/MenuFooterMobile";
import MenuHeaderMobile from "./Menu/MenuHeaderMobile";
import "./Styles/AboutMe.css";
export default function Bio() {
  const fontForMobile = useMediaQuery("(max-width:900px)");
  const [loading, setLoading] = useState(true);
  const container = useRef(null)
  useEffect(()=>{
    Lottie.loadAnimation({
      container: container.current,
      renderer:'svg',
      loop:true,
      autoPlay:true,
      animationData:require("../Assets/anime.json")
    })
  },[])
  setTimeout(() => {
    setLoading(false);
  }, 2500);
  return (
    <Box className="bio-body">
      {loading ? (
        <Box style={{display: 'flex', justifyContent: 'center',alignItems: 'center',height:"100vh"}} >
          <Box ref={container} style={{width:"250px" }}></Box>
        </Box>
      ) : (
        <Box>
          {!fontForMobile && (
            <Grid container>
              <Grid item md={10} style={{ padding: "5%" }}>
                <BioCard />
              </Grid>
              <Grid item md={2}>
                <Menu pages={2} />
              </Grid>
            </Grid>
          )}
          {fontForMobile && (
            <Grid
              container
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Grid
                item
                xs={12}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                  top: 0,
                  maxHeight: "10vh",
                  padding: "2%",
                }}
              >
                <MenuHeaderMobile />
              </Grid>
              <Grid
                item
                xs={12}
                style={{
                  paddingTop: "5%",
                  maxHeight: "85vh",
                  overflowY: "scroll",
                }}
              >
                <BioCard />
              </Grid>
              <Grid
                item
                xs={12}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                  position: "fixed",
                  bottom: 0,
                  maxHeight: "10vh",
                }}
              >
                <MenuFooterMobile pages={4} />
              </Grid>
            </Grid>
          )}
        </Box>
      )}
    </Box>
  );
}
