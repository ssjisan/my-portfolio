import React, { useRef, useEffect } from "react";
import { Button, Typography, Box } from "@mui/material";
import Lottie from "lottie-web";
import { Link } from "react-router-dom";
export default function NotFound() {
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
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          maxWidth:"960px",
          width: "100%",
        }}
        ref={container}
      ></Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign:"center",
          gap: 2,
        }}
      >
        <Typography sx={{ fontSize: "24px", fontWeight: 700 }}>
          Looks like you are lost
        </Typography>
        <Typography
          sx={{ fontSize: "16px", fontWeight: 500, color: "#A9AFB7" }}
        >
          The page your are looking for not available
        </Typography>
        <Link to="/">
          <Button
            variant="contained"
            sx={{
              background:
                "linear-gradient(180deg, #141414 0%, rgba(20, 20, 20, 0.8) 100%)",
            }}
          >
            Go back to Home
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
