import React from "react";
import { Grid } from "@mui/material";
import Menu from "./Menu/Menu";
import "./Styles/Experience.css";
import ExperienceCard from "./Components/ExperienceCard";
export default function Experiences({ pages }) {
  return (
    <div className="experiences-body">
      <Grid container>
        <Grid item md={10} style={{padding:"5%"}}>
          <ExperienceCard />
        </Grid>
        <Grid item md={2}>
          <Menu pages={4} />
        </Grid>
      </Grid>
    </div>
  );
}
