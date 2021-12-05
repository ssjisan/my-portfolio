import React from 'react'
import {Grid} from '@mui/material';
import Menu from "./Menu/Menu";
import "./Styles/Projects.css"
export default function Projects({pages}) {
    return (
        <div className="projects-body">
        <Grid container>
            <Grid item md={10}>
                This is Projects
            </Grid>
            <Grid item md={2}>
                    <Menu pages={3}/>
            </Grid>
        </Grid></div>
    )
}
