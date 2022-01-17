import React, { useEffect, useRef, useState } from "react";
import { Box, Grid, useMediaQuery } from "@mui/material";
import Menu from "./Menu/Menu";
import "./Styles/Experience.css";
import ExperienceCard from "./Components/ExperienceCard";
import MenuHeaderMobile from "./Menu/MenuHeaderMobile";
import MenuFooterMobile from "./Menu/MenuFooterMobile";
import Lottie from "lottie-web";
export default function Experiences({ pages }) {
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
    <Box className="experiences-body">
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
      ) : (
        <Box>
          {!fontForMobile && (
            <Grid container>
              <Grid
                item
                md={10}
                className="scroll"
                style={{
                  padding: "5%",
                  maxHeight: "85vh",
                  overflowY: "scroll",
                }}
              >
                <ExperienceCard />
              </Grid>
              <Grid item md={2}>
                <Menu pages={4} />
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
                <MenuHeaderMobile pages={3} />
              </Grid>
              <Grid
                item
                xs={12}
                style={{
                  padding: "5%",
                  maxHeight: "85vh",
                  overflowY: "scroll",
                }}
              >
                <ExperienceCard />
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
                <MenuFooterMobile />
              </Grid>
            </Grid>
          )}
        </Box>
      )}
    </Box>
  );
}
