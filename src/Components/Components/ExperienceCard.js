import {
  Card,
  CardContent,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "../Styles/AboutMe.css";
import Avatar from "@mui/material/Avatar";
import job from "../../Assets/experience.json";
import { useState } from "react";
import "../Styles/Experience.css";
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
          <Box
            style={{
              padding: "2%",
              borderRadius: "6px",
              border: data.end === "present" && "1px solid ",
            }}
          >
            <Card
              style={{
                borderRadius: "6px"}}
            >
              <Box className="jobBox">
                <Box
                  style={{
                    padding: "5%",
                  }}
                >
                  <Avatar
                    style={{
                      width: "100px",
                      height: "100px",
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
              </Box>
              <CardContent style={{ padding: "3%" }}>
                <Typography
                  variant="h5"
                  style={{ fontWeight: "bold", color: "#22215B" }}
                >
                  {data.companyName}
                </Typography>
                <Typography variant="body1">{data.position}</Typography>
                <Typography variant="body2">
                  {data.start}-{data.end}
                </Typography>
                <Typography variant="body2" style={{ fontWeight: "bold" }}>
                  Responsibilities:
                </Typography>
                {data.responsibilities.map((data) => (
                  <Box>
                    <Typography variant="caption">-{data}</Typography> <br />
                  </Box>
                ))}
              </CardContent>
            </Card>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
