import React from 'react'
import {Grid} from '@mui/material';
import Menu from './Menu';
import "./Styles/Projects.css"
export default function Projects() {
    return (
        <div className="container">
        <Grid container>
            <Grid item md={10}>
                This is Projects
            </Grid>
            <Grid item md={2}>
                <Menu/>
            </Grid>
        </Grid></div>
    )
}
