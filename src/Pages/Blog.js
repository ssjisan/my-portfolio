import React from "react";
import { Grid, useMediaQuery } from "@mui/material";
import "../Components/Styles/Blog.css";
import { Box } from "@mui/system";
import BlogCard from "../Components/Blog/BlogCard";
import Menu from "../Components/Menu/Menu";
import MobileMenu from "../Components/Menu/MobileMenu";

export default function Blog() {
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
                                maxHeight: "100vh",
                                overflowY: "scroll",
                            }}
                        >
                            <BlogCard />
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
                    <>
                        <BlogCard />
                        <MobileMenu />
                    </>
                )}
            </Box>
        </Box>
    );
}
