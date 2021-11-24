import React from 'react'
import {Grid} from '@mui/material';
import Menu from './Menu';
// import "./Styles/contact.css";
export default function Contact() {
    return (
        <div className="container">
        <Grid container>
            <Grid item md={10}>
                This is Contact
            </Grid>
            <Grid item md={2}>
                <Menu/>
            </Grid>
        </Grid>
        </div>
    )
}
