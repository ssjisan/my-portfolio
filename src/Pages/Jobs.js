import React from "react";
import { Box, Grid, useMediaQuery } from "@mui/material";
import "../Components/Styles/Experience.css";
import ExperienceCard from "../Components/Jobs/ExperienceCard";
import Menu from "../Components/Menu/Menu";
import MobileMenu from "../Components/Menu/MobileMenu";
export default function Jobs() {
    const fontForMobile = useMediaQuery("(max-width:900px)");

    return (
        <Box className="experiences-body">
            {!fontForMobile && (
                <Grid container>
                    <Grid
                        item
                        md={11}
                        className="scroll"
                        sx={{
                            p: 5,
                            maxHeight: "100vh",
                            overflowY: "scroll",
                        }}
                    >
                        <ExperienceCard />
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
                <Box sx={{ padding: "20px 16px 80px 16px" }}>
                    <ExperienceCard />
                    <MobileMenu />
                </Box>
            )}
        </Box>
    );
}