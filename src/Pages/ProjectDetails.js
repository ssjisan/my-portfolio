import { Box, Container, useMediaQuery } from "@mui/material";
import React, { useState, useEffect } from "react";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import { Link } from "react-router-dom";
import ImageSection from "../Components/ProjectDetails/ImageSection";
import ImageModal from "../Components/ProjectDetails/ImageModal";
import Project from "../Components/ProjectDetails/Project";

export default function ProjectDetails() {
  // eslint-disable-next-line
  const forBelow680 = useMediaQuery("(max-width:680px)");
  // eslint-disable-next-line
  const forBelow416 = useMediaQuery("(max-width:416px)");
  const [isScrolling, setIsScrolling] = useState(false);
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line
  }, []);
  const handleScroll = () => {
    if (window.pageYOffset > 160 && !isScrolling) {
      setIsScrolling(true);
    } else if (window.pageYOffset <= 160 && isScrolling) {
      setIsScrolling(false);
    }
  };

  return (
    <Box>
      <Box
        sx={{
          boxShadow: isScrolling ? "0px 0px 20px rgba(0, 0, 0, 0.08)" : "none",
          position: "fixed",
          top: 0,
          width: "100%",
          background: "white",
        }}
      >
        <Container
          sx={{
            p: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link to="/work">
            <ArrowBackIosNewRoundedIcon />
          </Link>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
            onClick={goToTop}
          >
            <Link to="/">
              <img src="/Assets/Images/Logo/Logo-black.png" alt="logo" />
            </Link>
          </Box>
        </Container>
      </Box>
      <Container>
        <Box sx={{ mt: 14 }}>
          <ImageSection handleOpen={handleOpen} />
          <Project />
          <ImageModal open={open} handleClose={handleClose} />
        </Box>
      </Container>
    </Box>
  );
}
