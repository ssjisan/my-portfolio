import { Grid, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import BioCard from "./Components/BioCard";
import MenuNew from "./Menu/MenuNew";
import MobileMenu from "./Menu/MobileMenu";
import "./Styles/AboutMe.css";
export default function Bio() {
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
                            <MenuNew />
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
