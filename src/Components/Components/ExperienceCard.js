import { Typography, Box, Divider, Avatar, useMediaQuery } from "@mui/material";
import React from "react";
import "../Styles/AboutMe.css";
import job from "../../Assets/experience.json";
import { useState } from "react";
import "../Styles/Experience.css";

export default function ExperienceCard() {
  // eslint-disable-next-line
  const [experience, setExperience] = useState(job);
  const forBelow900 = useMediaQuery("(max-width:900px)");
  return (
    <>
      {experience.map((data) => (
        <>
          <Box style={{ display: "flex", marginTop: forBelow900 && "50px" }}>
            <Box>
              <Avatar
                style={{
                  width: "50px",
                  height: "50px",
                  border: "5px solid #F7F8FA",
                  backgroundColor: "#fff",
                  borderRadius: "50%",
                  margin: "auto",
                }}
                src={
                  data.companyLogo && data.companyLogo.length
                    ? `${data.companyLogo}`
                    : `https://ui-avatars.com/api/?color=00756A&name=${data.companyName}`
                }
              />
            </Box>
            <Box style={{ marginLeft: "20px" }}>
              <Typography
                variant="h6"
                style={{ padding: "2%", letterSpacing: 6 }}
              >
                {data.companyName}
              </Typography>
              <Typography variant="body1" style={{ padding: "2%" }}>
                {data.position}
              </Typography>
              <Typography
                variant="caption"
                style={{ padding: "2%", fontStyle: "italic" }}
              >
                {data.start} to {data.end}
              </Typography>
              <Typography
                variant="h6"
                style={{ padding: "2%", fontWeight: "bold" }}
              >
                Responsibilities
              </Typography>
              <Box style={{ padding: "5%" }}>
                {data?.responsibilities.map((data) => (
                  <Typography>-&nbsp;{data}</Typography>
                ))}
              </Box>
            </Box>
          </Box>
          <Divider style={{ width: "100%" }} />
        </>
      ))}
    </>
  );
}
