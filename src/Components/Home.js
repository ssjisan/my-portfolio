import { Grid, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useRef, useState } from "react";
import HomeCard from "./Components/HomeCard";
import MenuFooterMobile from "./Menu/MenuFooterMobile";
import MenuHeaderMobile from "./Menu/MenuHeaderMobile";
import Lottie from "lottie-web";
import useStyles from "./Styles/HomeStyle";
import MenuNew from "./Menu/MenuNew";

export default function Home() {
    const classes = useStyles();
    const forBelow900 = useMediaQuery("(max-width:900px)");
    const forBelow600 = useMediaQuery("(max-width:600px)");
    const forBelow400 = useMediaQuery("(max-width:400px)");
    const [loading, setLoading] = useState(true);
    const container = useRef(null);
    useEffect(() => {
        Lottie.loadAnimation({
            container: container.current,
            renderer: "svg",
            loop: true,
            autoPlay: true,
            animationData: require("../Assets/anime.json"),
        });
    }, []);
    setTimeout(() => {
        setLoading(false);
    }, 2500);
    return (
        <Box className={classes.home}>
            {loading ? (
                <Box
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100vh",
                    }}
                >
                    <Box ref={container} style={{ width: "250px" }}></Box>
                </Box>
            ) : (
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
                                <MenuNew />
                            </Grid>
                        </Grid>
                    )}
                    {forBelow900 && (
                        <Grid
                            container
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                            }}
                        >
                            <Grid
                                item
                                xs={12}
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    width: "100%",
                                    top: 0,
                                    maxHeight: "10vh",
                                    padding: "2%",
                                }}
                            >
                                <MenuHeaderMobile pages={1} />
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                style={{
                                    paddingTop:
                                        (forBelow400 && "25%") ||
                                        (forBelow600 && "20%") ||
                                        "15%",
                                    maxHeight: "85%",
                                    overflowY: "scroll",
                                }}
                            >
                                <HomeCard />
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                className={classes.MenuFooterMobile}
                            >
                                <MenuFooterMobile />
                            </Grid>
                        </Grid>
                    )}
                </Box>
            )}
        </Box>
    );
}
