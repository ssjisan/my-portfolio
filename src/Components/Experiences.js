import React from "react";
import { Box, Grid, useMediaQuery } from "@mui/material";
import "./Styles/Experience.css";
import ExperienceCard from "./Components/ExperienceCard";
import MenuNew from "./Menu/MenuNew";
import MobileMenu from "./Menu/MobileMenu";
export default function Experiences() {
    const fontForMobile = useMediaQuery("(max-width:900px)");

    return (
        <Box className="experiences-body">
            <Box>
                {!fontForMobile && (
                    <Grid container>
                        <Grid
                            item
                            md={11}
                            className="scroll"
                            style={{
                                padding: "5%",
                                maxHeight: "85vh",
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
                            <MenuNew />
                        </Grid>
                    </Grid>
                )}
                {fontForMobile && (
                    <>
                        <ExperienceCard />
                        <MobileMenu />
                    </>
                )}
            </Box>
        </Box>
    );
}
