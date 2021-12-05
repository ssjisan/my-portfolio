import React from 'react'
import {Grid} from '@mui/material';
import Menu from "./Menu/Menu";
import "./Styles/Blog.css"
export default function Blog({pages}) {
    return (
        <div className="blog-body">
        <Grid container>
            <Grid item md={10}>
                This is Blog
            </Grid>
            <Grid item md={2}>
                <Menu pages={5}/>
            </Grid>
        </Grid>
        </div>
    )
}
