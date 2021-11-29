import React from 'react'
import {Grid} from '@mui/material';
import Menu from './Menu';
import "./Styles/Home.css";
import HomeCard from './Components/HomeCard';
import { Box } from '@mui/system';

export default function Home({pages}) {
    return (
        <Box className="home-body">
            <Grid container justifyContent="center" alignContent="center" alignItems="center">
            <Grid item md={10} style={{padding:"5%"}}>
                <HomeCard/>
            </Grid>
            <Grid item md={2}>
                <Menu pages={1}/>
            </Grid>
        </Grid>
        </Box>
    )
}
