import React from 'react'
import {Grid, useMediaQuery} from '@mui/material';
import Menu from "./Menu/Menu";
import "./Styles/Projects.css"
import ProjectCard from './Components/ProjectCard';
import { Box } from '@mui/system';
import MenuFooterMobile from './Menu/MenuFooterMobile';
import MenuHeaderMobile from './Menu/MenuHeaderMobile';
export default function Projects({pages}) {
    const fontForMobile = useMediaQuery("(max-width:900px)");

    return (
        <Box className="bio-body">
      {!fontForMobile && (
        <Grid
          container
        >
          <Grid item md={10} style={{ padding: "5%",maxHeight:"85vh",overflowY:"scroll" }}>
            <ProjectCard />
          </Grid>
          <Grid item md={2}>
            <Menu pages={3} />
          </Grid>
        </Grid>
      )}
      {fontForMobile && (
        <Grid container style={{ display: "flex" , justifyContent: "space-between"  }}>
          <Grid item xs={12} style={{ display:"flex", justifyContent:"center", width:"100%", top:0,maxHeight:"10vh", padding:"2%"}}>
            <MenuHeaderMobile pages={2}/>
          </Grid>
          <Grid item xs={12} style={{padding:"5%",maxHeight:"85vh",overflowY:"scroll"}}>
            <ProjectCard />
          </Grid>
          <Grid item xs={12} style={{display:"flex", justifyContent:"center", width:"100%", position:"fixed", bottom:0,maxHeight:"10vh"}}>
            <MenuFooterMobile />
          </Grid>
        </Grid>
      )}
    </Box>
    )
}
