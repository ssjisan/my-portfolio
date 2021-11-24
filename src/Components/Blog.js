import React from 'react'
import {Grid} from '@mui/material';
import Menu from './Menu';
import "./Styles/Blog.css"
export default function Blog() {
    return (
        <div className="container">
        <Grid container>
            <Grid item md={10}>
                This is Blog
            </Grid>
            <Grid item md={2}>
                <Menu/>
            </Grid>
        </Grid>
        </div>
    )
}
