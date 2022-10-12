import { Grid } from "@mui/material";
import React from "react";
import MenuNew from "./Menu/MenuNew";
export default function Test() {
    return (
        <Grid container>
            <Grid item md={11} sx={{border:"1px solid red", height:"100vh"}}>
                
            </Grid>
            <Grid item md={1} sx={{height:"100vh", display:"flex", justifyContent:"center", alignItems:"center"}}>
                <MenuNew />
            </Grid>
        </Grid>
    );
}
