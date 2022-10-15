import React, { useEffect, useRef, useState } from "react";
import { Grid, useMediaQuery } from "@mui/material";
import "./Styles/AboutMe.css";
import { Box } from "@mui/system";
import BlogCardDetails from "./Components/BlogCardDetails";
import { useParams } from "react-router-dom";
import blogData from "../Assets/blogData.json";
import Lottie from "lottie-web";
import MobileMenu from "./Menu/MobileMenu";
import Menu from "./Menu/Menu";

export default function SingleBlog() {
    const fontForMobile = useMediaQuery("(max-width:900px)");
    const { id } = useParams();
    // eslint-disable-next-line
    const [blog, setBlog] = useState(blogData);
    const [singleBlog, setSingleBlog] = useState([]);
    useEffect(() => {
        let selectedBlog = blog.filter((data) => data.id === +id);
        setSingleBlog(selectedBlog);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
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
        <Box className="bio-body">
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
                    {" "}
                    {!fontForMobile && (
                        <Grid container>
                            <Grid
                                item
                                md={10}
                                className="scroll"
                                style={{
                                    padding: "5%",
                                    maxHeight: "100vh",
                                    overflowY: "scroll",
                                }}
                            >
                                <BlogCardDetails singleBlog={singleBlog} />
                            </Grid>
                            <Grid item md={2}>
                                <Menu />
                            </Grid>
                        </Grid>
                    )}
                    {fontForMobile && (
                        <Box sx={{ pb: 10 }}>
                            <BlogCardDetails singleBlog={singleBlog} />
                            <MobileMenu />
                        </Box>
                    )}
                </Box>
            )}
        </Box>
    );
}
