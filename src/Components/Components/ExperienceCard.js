import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "../Styles/AboutMe.css";
import Avatar from "@mui/material/Avatar";
import job from "../../Assets/experience.json";
import ReactHtmlParser from "react-html-parser";
import { useState } from "react";
import "../Styles/Experience.css";
import { Link } from "react-router-dom";

export default function ExperienceCard() {
  const forBelow900 = useMediaQuery("(max-width:900px)");
  const forBelow1500 = useMediaQuery("(max-width:1500px)");
  const forBelow1200 = useMediaQuery("(max-width:1210px)");
  //   const for955to901 = useMediaQuery("(min-width:901px) and (max-width:960px)");
  const [experience, setExperience] = useState(job);
  return (
    <Grid container spacing={1}>
      {experience.map((data) => (
        <Grid item md={4} sm={6} xs={12}>
          <Card style={{ borderRadius: "6px" }}>
            <Box className="jobBox">
              <Box style={{padding:"5%"}}>
                <Avatar src={
                data.companyLogo && data.companyLogo.length
                  ? `${data.companyLogo}`
                  : `https://ui-avatars.com/api/?color=00756A&name=${data.companyName}`
              } />
              </Box>
            </Box>
            <CardContent style={{ padding: "3%" }}>
              <Typography
                variant="h5"
                style={{ fontWeight: "bold", color: "#22215B", height: "50px" }}
              >
                {data.companyName}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
