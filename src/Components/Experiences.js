import React from 'react'
import {Grid} from '@mui/material';
import Menu from './Menu';
import "./Styles/Experience.css"
export default function Experiences({pages}) {
    return (
        <div className="experiences-body">
        <Grid container>
            <Grid item md={10}>
                This is Experiences
            </Grid>
            <Grid item md={2}>
                    <Menu pages={4}/>
            </Grid>
        </Grid>
        </div>
    )
}
