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
    draggable:true
  };
  const a = [
    "/Assets/Images/Projects/tech-hack/landing-page.svg",
    "/Assets/Images/Projects/tech-hack/profile.svg",
    "/Assets/Images/Projects/tech-hack/landing-page.jpg",
    "/Assets/Images/Projects/tech-hack/profile.svg",
    "/Assets/Images/Projects/tech-hack/landing-page.jpg",
    "/Assets/Images/Projects/tech-hack/profile.svg",
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
          width:"70%",
          outline: "none",
        }}
      >
        <Slider {...settings}>
         {a.map((data)=>{return(
          <Box>
            <img src={data} alt="asde" style={{width:"100%",objectFit:"fit"}}/>
          </Box>
         )})}
        </Slider>
      </Box>
    </Modal>
  );
}
