import React from "react";
import { Grid, useMediaQuery } from "@mui/material";
import "./Styles/Projects.css";
import ProjectCard from "./Components/ProjectCard";
import { Box } from "@mui/system";
import MenuNew from "./Menu/MenuNew";
import MobileMenu from "./Menu/MobileMenu";

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
                            style={{
                                padding: "5%",
                                maxHeight: "85vh",
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
                            <MenuNew />
                        </Grid>
                    </Grid>
                )}
                {fontForMobile && (
                    <>
                        <ProjectCard />
                        <MobileMenu />
                    </>
                )}
            </Box>
        </Box>
    );
}
