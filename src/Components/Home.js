import React from 'react'
import {Grid} from '@mui/material';
import Menu from './Menu';
import "./Styles/Home.css";

export default function Home({pages}) {
    return (
        <div className="container">
            <Grid container >
            <Grid item md={10}>
                This is home
            </Grid>
            <Grid item md={2}>
                <Menu pages={1}/>
            </Grid>
        </Grid>
        </div>
    )
}
