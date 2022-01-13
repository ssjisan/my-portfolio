import React, { useEffect, useRef, useState } from "react";
import { Grid, useMediaQuery, Box } from "@mui/material";
import Menu from "./Menu/Menu";
import "./Styles/contact.css";
import ContactCard from "./Components/ContactCard";
import MenuHeaderMobile from "./Menu/MenuHeaderMobile";
import MenuFooterMobile from "./Menu/MenuFooterMobile";
import Lottie from "lottie-web";
export default function Contact({ pages }) {
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
    <Box className="contact-body">
     { loading ? <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Box ref={container} style={{ width: "250px" }}></Box>
      </Box>
      : <Box>
      {!fontForMobile && (
        <Grid container>
          <Grid item md={10} style={{ padding: "5%" }}>
            <ContactCard />
          </Grid>
          <Grid item md={2}>
            <Menu pages={6} />
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
            style={{ padding: "5%", maxHeight: "85vh", overflowY: "scroll" }}
          >
            <ContactCard />
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
            <MenuFooterMobile pages={6} />
          </Grid>
        </Grid>
      )}
      </Box>}
    </Box>
  );
}
