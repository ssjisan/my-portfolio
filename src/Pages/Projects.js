import React from "react";
import { Grid, useMediaQuery } from "@mui/material";
import "../Components/Styles/Projects.css";
import ProjectCard from "../Components/Projects/ProjectCard";
import { Box } from "@mui/system";
import Menu from "../Components/Menu/Menu";
import MobileMenu from "../Components/Menu/MobileMenu";

export default function Projects() {
    const fontForMobile = useMediaQuery("(max-width:900px)");

    return (
        <Box className="bio-body">
            <Box>
                {!fontForMobile && (
                    <Grid container>
                        <Grid
                            item
                            md={11}
                            className="scroll"
                            sx={{
                                padding: "5%",
                                maxHeight: "100vh",
                                overflowY: "scroll",
                            }}
                        >
                            <ProjectCard />
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
                        <ProjectCard />
                        <MobileMenu />
                    </Box>
                )}
            </Box>
        </Box>
    );
}