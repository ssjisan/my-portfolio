import React, { useRef, useState, useEffect } from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Menu from "./Menu/Menu";
import "./Styles/AboutMe.css";
import { Box } from "@mui/system";
import BioCard from "./Components/BioCard";
import MenuHeaderMobile from "./Menu/MenuHeaderMobile";
import MenuFooterMobile from "./Menu/MenuFooterMobile";
import Lottie from "lottie-web";
export default function NotFound({ pages }) {
  const fontForMobile = useMediaQuery("(max-width:900px)");
  const container = useRef(null);
  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoPlay: true,
      animationData: require("../Assets/error.json"),
    });
  }, []);
  return (
    <Box className="bio-body">
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
        ref={container}
      >
        <Box style={{margin:"30px"}}>
          <Typography variant="h6" style={{fontWeight:"bold"}}>Go back to home page</Typography>
        </Box>
      </Box>
    </Box>
  );
}
