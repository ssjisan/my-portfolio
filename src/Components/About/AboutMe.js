import React from "react";
import { Box, Grid, useMediaQuery } from "@mui/material";
import InfoCard from "./InfoCard";
import DetailsCard from "./DetailsCard";

export default function AboutMe() {
  const forBelow1199 = useMediaQuery("(max-width:1199px)");
  return (
    <Box>
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          flexDirection: forBelow1199 ? "column-reverse" : "row",
        }}
      >
        <Grid
          item
          md={12}
          lg={9}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <DetailsCard />
        </Grid>
        <Grid
          item
          md={12}
          lg={3}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <InfoCard />
        </Grid>
      </Grid>
    </Box>
  );
}
