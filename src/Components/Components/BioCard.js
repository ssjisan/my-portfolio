import { Grid, Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "../Styles/AboutMe.css";
export default function BioCard() {
  const forBelow900 = useMediaQuery("(max-width:900px)");
  const forBelow1500 = useMediaQuery("(max-width:1500px)");
  const forBelow1200 = useMediaQuery("(max-width:1210px)");
  //   const for955to901 = useMediaQuery("(min-width:901px) and (max-width:960px)");
  return (
    <Box>
      <Grid
        container
        spacing={1}
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        style={{ padding: forBelow900 ? "20px" : "50px" }}
      >
        <Grid
          item
          xs={12}
          md={6}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <img
            src="https://i.ibb.co/ZKJyRbJ/about-Me-Section.png"
            width="80%"
            alt=""
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            className="bioScroll"
            style={{ maxHeight:forBelow900 ? " ": "500px", overflowY:forBelow900 ?"none": "auto" }}
          >
            <Typography
              variant={forBelow900 ? "body1" : "h6"}
              style={{ textAlign: "justify", padding: "2%" }}
            >
              Trying a new thing is fun. New technologies, new ideas. I love to
              work with versatility. At a very early age at my university, I
              worked with several things. Firstly I was working with robotics,
              then with graphics design, and then designing game assets and
              animation, etc. My final year's project was developing a
              First-Person Shooting game. I worked as an asset designer in this
              team. I love learning about new technologies. Now I start learning
              Networking related staff. Cisco Routing-Switching, Mikrotik
              Routing. For almost two years, I worked as a network engineer in
              an Internet service provider(ISP). Recently, I start working with
              web development,Trying a new thing is fun. New technologies, new
              ideas. I love to work with versatility. At a very early age at my
              university, I worked with several things. Firstly I was working
              with robotics, then with graphics design, and then designing game
              assets and animation, etc. My final year's project was developing
              a First-Person Shooting game. I worked as an asset designer in
              this team. I love learning about new technologies. Now I start
              learning Networking related staff. Cisco Routing-Switching,
              Mikrotik Routing. For almost two years, I worked as a network
              engineer in an Internet service provider(ISP). Recently, I start
              working with web development,
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}