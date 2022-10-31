import React from "react";
import { Box, Grid } from "@mui/material";
import InfoCard from "./InfoCard";
import DetailsCard from "./DetailsCard";

export default function AboutMe() {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item md={12} lg={9}>
          <DetailsCard />
        </Grid>
        <Grid item md={12} lg={3}>
          <InfoCard />
        </Grid>
      </Grid>
    </Box>
  );
}
