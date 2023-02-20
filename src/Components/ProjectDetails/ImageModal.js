import { Box, Modal } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ImageModal({ open, handleClose }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
  };
  const a = [
    "/Assets/Images/Projects/tech-hack/landing-page.jpg",
    "/Assets/Images/Projects/tech-hack/dev-profile.jpg",
    "/Assets/Images/Projects/tech-hack/dev-profile2.jpg",
    "/Assets/Images/Projects/tech-hack/dev-profile3.jpg",
    "/Assets/Images/Projects/tech-hack/dev-profile4.jpg",
  ];
  return (
    <Modal
      open={open}
      onClose={handleClose}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Box
        sx={{
          background: "white",
          width: "70%",
          outline: "none",
        }}
      >
        <Slider {...settings}>
          {a.map((data) => {
            return (
              <Box>
                <img
                  src={data}
                  alt="asde"
                  style={{ width: "100%", objectFit: "fit" }}
                />
              </Box>
            );
          })}
        </Slider>
      </Box>
    </Modal>
  );
}
