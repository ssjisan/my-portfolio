import React, { useEffect, useRef, useState } from "react";
import { Grid, useMediaQuery } from "@mui/material";
import Menu from "./Menu/Menu";
import "./Styles/Projects.css";
import ProjectCard from "./Components/ProjectCard";
import { Box } from "@mui/system";
import MenuFooterMobile from "./Menu/MenuFooterMobile";
import MenuHeaderMobile from "./Menu/MenuHeaderMobile";
import Lottie from "lottie-web";

export default function Projects({ pages }) {
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
    <Box className="bio-body">
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
      ) :(<Box>
        {!fontForMobile && (
          <Grid container>
            <Grid
              item
              md={10}
              className="scroll"
              style={{ padding: "5%", maxHeight: "85vh", overflowY: "scroll" }}
            >
              <ProjectCard />
            </Grid>
            <Grid item md={2}>
              <Menu pages={3} />
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
              <MenuHeaderMobile pages={2} />
            </Grid>
            <Grid
              item
              xs={12}
              style={{ padding: "5%", maxHeight: "85vh", overflowY: "scroll" }}
            >
              <ProjectCard />
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
      </Box>)}
    </Box>
  );
}
