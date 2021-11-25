import React from 'react'
import {Grid} from '@mui/material';
import Menu from './Menu';
import "./Styles/AboutMe.css"
export default function AboutMe({pages}) {
    return (
        <div className="aboueMe-body">
        <Grid container>
            <Grid item md={10}>
                This is About Me
            </Grid>
            <Grid item md={2}>
                <Menu pages={2}/>
            </Grid>
        </Grid>
        </div>
    )
}
