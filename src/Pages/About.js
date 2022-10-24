import { Grid, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import BioCard from "../Components/About/BioCard";
import Menu from "../Components/Menu/Menu";
import MobileMenu from "../Components/Menu/MobileMenu";
import "../Components/Styles/AboutMe.css";
export default function About() {
    const fontForMobile = useMediaQuery("(max-width:900px)");

    return (
        <Box className="bio-body">
            <Box>
                {!fontForMobile && (
                    <Grid container>
                        <Grid item md={11} style={{ padding: "5%" }}>
                            <BioCard />
                        </Grid>
                        <Grid
                            item
                            md={1}
                            sx={{
                                height: "100vh",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Menu />
                        </Grid>
                    </Grid>
                )}
                {fontForMobile && (
                    <Box sx={{ pb: 10 }}>
                        <BioCard />
                        <MobileMenu />
                    </Box>
                )}
            </Box>
        </Box>
    );
}
