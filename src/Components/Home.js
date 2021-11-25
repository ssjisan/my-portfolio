import React from 'react'
import {Grid} from '@mui/material';
import Menu from './Menu';
import "./Styles/Home.css";
import HomeCard from './Components/HomeCard';

export default function Home({pages}) {
    return (
        <div className="home-body">
            <Grid container >
            <Grid item md={10}>
                <HomeCard/>
            </Grid>
            <Grid item md={2}>
                <Menu pages={1}/>
            </Grid>
        </Grid>
        </div>
    )
}
