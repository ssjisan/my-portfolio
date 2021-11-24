import React from 'react'
import {Grid} from '@mui/material';
import Menu from './Menu';
import "./Styles/Experience.css"
export default function Experiences() {
    return (
        <div className="container">
        <Grid container>
            <Grid item md={10}>
                This is Experiences
            </Grid>
            <Grid item md={2}>
                <Menu/>
            </Grid>
        </Grid>
        </div>
    )
}
