import {
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Grid,
    Typography,
    useMediaQuery,
} from "@mui/material";
import React from "react";
import "../Styles/AboutMe.css";
import blogData from "../../Assets/blogData.json";
import { useState } from "react";
import "../Styles/AboutMe.css";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useEffect } from "react";
import Lottie from "lottie-web";

export default function BlogCard() {
    // eslint-disable-next-line
    const [blog, setBlog] = useState(blogData);
    const text = useRef(null);
    useEffect(() => {
        Lottie.loadAnimation({
            container: text.current,
            renderer: "svg",
            loop: true,
            autoPlay: true,
            animationData: require("../../Assets/coming-soon-text.json"),
        });
    }, []);
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Box ref={text} sx={{ width: "650px" }}></Box>
        </Box>
    );
}
