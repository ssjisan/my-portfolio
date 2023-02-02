import { Grid, useMediaQuery, Box } from "@mui/material";
import React from "react";
import HomeCard from "../Components/Home/HomeCard";
import Menu from "../Components/Menu/Menu";
import MobileMenu from "../Components/Menu/MobileMenu";

export default function Home() {
  const forBelow900 = useMediaQuery("(max-width:900px)");
  return (
    <Box>
      <Box>
        {!forBelow900 && (
          <Grid container>
            <Grid item md={11} style={{ padding: "5%" }}>
              <HomeCard />
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
        {forBelow900 && (
          <Box>
            <HomeCard />
            <MobileMenu />
          </Box>
        )}
      </Box>
    </Box>
  );
}
