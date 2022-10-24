import { Box, Grid } from "@mui/material";
import React from "react";
import "../Styles/AboutMe.css";
import images from "../../Assets/comingsoon.png";
export default function BlogCard() {
    return (
        <Grid container spacing={4}>
            <Grid item lg={12} md={12} sm={12}>
                <Box sx={{border:"1px solid red"}}>
                    <img src={images} alt="coming soon" />
                </Box>
            </Grid>
        </Grid>
    );
}
