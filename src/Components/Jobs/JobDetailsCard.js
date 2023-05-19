import { Typography, Box, Grid, useMediaQuery } from "@mui/material";
import React from "react";
import job from "../../Assets/experience.json";
import { useState } from "react";

export default function JobDetailsCard() {
  // eslint-disable-next-line
  const [experience, setExperience] = useState(job);
  // eslint-disable-next-line
  const forBelow999 = useMediaQuery("(max-width:999px)");
  // eslint-disable-next-line
  const forBelow567 = useMediaQuery("(max-width:567px)");
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      {experience.map((data, i) => {
        return (
          <Box sx={{ mb: (forBelow999 && "40px" ) || (i !== experience.length - 1 && "128px")}}>
            <Box
              sx={{
                p: 0.5,
                backgroundColor: "#EAEAEA",
                display: "inline-block",
              }}
            >
              {data.end === "present" ? (
                <Typography
                  sx={{
                    color: "#555555",
                    fontSize: "14px",
                  }}
                >
                  Currently
                </Typography>
              ) : (
                <Typography sx={{ color: "#555555", fontSize: "14px" }}>
                  {data.start} - {data.end}
                </Typography>
              )}
            </Box>
            <Grid container spacing={4}>
              <Grid item xs={12} md={3}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 0 }}>
                  <Typography
                    sx={{
                      fontSize: forBelow999 ? "32px" : "40px",
                      fontWeight: 600,
                    }}
                  >
                    {data.position}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#555555",
                      fontSize: forBelow999 ? "14px" : "16px",
                    }}
                  >
                    {data.companyName}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography
                  sx={{
                    color: "#0009",
                    lineHeight: 2,
                    fontWeight: 400,
                    fontSize: forBelow999 ? "14px" : "16px",
                  }}
                >
                  {data.description}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        );
      })}
    </Box>
  );
}
