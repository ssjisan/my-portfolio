import React from "react";
import { Grid, useMediaQuery } from "@mui/material";
import Menu from "./Menu/Menu";
import "./Styles/Experience.css";
import ExperienceCard from "./Components/ExperienceCard";
import MenuHeaderMobile from "./Menu/MenuHeaderMobile";
import MenuFooterMobile from "./Menu/MenuFooterMobile";
export default function Experiences({ pages }) {
  const fontForMobile = useMediaQuery("(max-width:900px)");

  return (
    <div className="experiences-body">
      {!fontForMobile && (
        <Grid container>
          <Grid item md={10} style={{ padding: "5%" }}>
            <ExperienceCard />
          </Grid>
          <Grid item md={2}>
            <Menu pages={4} />
          </Grid>
        </Grid>
      )}
       {fontForMobile && (
        <Grid container style={{ display: "flex" , justifyContent: "space-between"  }}>
          <Grid item xs={12} style={{ display:"flex", justifyContent:"center", width:"100%", top:0,maxHeight:"10vh", padding:"2%"}}>
            <MenuHeaderMobile pages={3}/>
          </Grid>
          <Grid item xs={12} style={{padding:"5%",maxHeight:"85vh",overflowY:"scroll"}}>
          <ExperienceCard />
          </Grid>
          <Grid item xs={12} style={{display:"flex", justifyContent:"center", width:"100%", position:"fixed", bottom:0,maxHeight:"10vh"}}>
            <MenuFooterMobile/>
          </Grid>
        </Grid>
      )}
    </div>
  );
}
