import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import "../Styles/MenuStyles.css"

export default function Menu({ pages,handleClick}) {
  return (
    <Box>
      <Grid container justifyContent="space-between">
         <Grid item>Home</Grid>
         <Grid item>Home</Grid>
         <Grid item>Home</Grid>
         <Grid item>Home</Grid>
         <Grid item>Home</Grid>
      </Grid>
    </Box>
  );
}
