import React, { useState } from "react";
import { CircularProgress, Grid, useMediaQuery } from "@mui/material";
import Menu from "./Menu/Menu";
import "./Styles/AboutMe.css";
import { Box } from "@mui/system";
import BioCard from "./Components/BioCard";
import MenuHeaderMobile from "./Menu/MenuHeaderMobile";
import MenuFooterMobile from "./Menu/MenuFooterMobile";
export default function Bio({ pages }) {
  const fontForMobile = useMediaQuery("(max-width:900px)");
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 2000);
  return (
    <Box className="bio-body">
      {loading ? (
        <Box style={{display: 'flex', justifyContent: 'center',alignItems: 'center',height: '100vh'}}>
          <CircularProgress />
        </Box>
      ) : (
        <>
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
        </>
      )}
    </Box>
  );
}
