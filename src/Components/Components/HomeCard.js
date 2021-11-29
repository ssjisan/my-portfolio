import { Card, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function HomeCard() {
  return (
    <Box>
      <Grid
        container
        spacing={2}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        alignContent="center"
      >
        <Grid item xs={12} md={6}>
          <Typography variant="h4">Hi, I am</Typography>
          <Typography variant="h2">Sadman Sakib Jisan</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src="https://ssjisan-pp.web.app/static/media/jisan.cdabf414.png"
            width="500px"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
