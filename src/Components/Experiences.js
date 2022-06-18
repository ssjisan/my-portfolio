import React, { useEffect, useRef, useState } from "react";
import { Box, Grid, useMediaQuery } from "@mui/material";
import Menu from "./Menu/Menu";
import "./Styles/Experience.css";
import ExperienceCard from "./Components/ExperienceCard";
import MenuForMobile from "./Menu/MenuForMobile";
import MenuFooterMobile from "./Menu/MenuFooterMobile";
import Lottie from "lottie-web";
export default function Experiences() {
    const fontForMobile = useMediaQuery("(max-width:900px)");
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
        <Box className="experiences-body">
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
                    {!fontForMobile && (
                        <Grid container>
                            <Grid
                                item
                                md={10}
                                className="scroll"
                                style={{
                                    padding: "5%",
                                    maxHeight: "85vh",
                                    overflowY: "scroll",
                                }}
                            >
                                <ExperienceCard />
                            </Grid>
                            <Grid item md={2}>
                                <Menu pages={4} />
                            </Grid>
                        </Grid>
                    )}
                    {fontForMobile && (
                        <div>
                            <ExperienceCard />
                            <MenuForMobile />
                        </div>
                    )}
                </Box>
            )}
        </Box>
    );
}
