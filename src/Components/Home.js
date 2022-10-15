import { Grid, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import HomeCard from "./Components/HomeCard";
import useStyles from "./Styles/HomeStyle";
import Menu from "./Menu/Menu";
import MobileMenu from "./Menu/MobileMenu";

export default function Home() {
    const classes = useStyles();
    const forBelow900 = useMediaQuery("(max-width:900px)");

    return (
        <Box className={classes.home}>
            <Box>
                {!forBelow900 && (
                    <Grid container>
                        <Grid item md={11} style={{ padding: "5%" }}>
                            <HomeCard />
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
                {forBelow900 && (
                    <>
                        <HomeCard />
                        <MobileMenu />
                    </>
                )}
            </Box>
        </Box>
    );
}
