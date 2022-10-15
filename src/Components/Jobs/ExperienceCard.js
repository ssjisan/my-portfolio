import { Typography, Box, Avatar, Grid, useMediaQuery } from "@mui/material";
import React from "react";
import "../Styles/AboutMe.css";
import job from "../../Assets/experience.json";
import { useState } from "react";
import "../Styles/Experience.css";

export default function ExperienceCard() {
    // eslint-disable-next-line
    const [experience, setExperience] = useState(job);
    // eslint-disable-next-line
    const forBelow900 = useMediaQuery("(max-width:900px)");
    return (
        <Grid container spacing={4}>
            {experience.map((data) => (
                <Grid item lg={4} md={6} sm={12} key={data.id}>
                    <Box
                        sx={{
                            borderRadius: "40px 10px",
                            padding: "48px 24px",
                            background: "#FFFFFF",
                            boxShadow: "-6px 6px 20px rgba(31, 195, 232, 0.08)",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            alignItems: "flex-start",
                            gap: "16px",
                        }}
                    >
                        <Box>
                            <Avatar
                                style={{
                                    width: "60px",
                                    height: "60px",
                                    backgroundColor: "#fff",
                                    margin: "auto",
                                    objectFit: "cover",
                                    boxShadow:
                                        "0px 0px 20px rgba(85, 98, 217, 0.1)",
                                    borderRadius: "4px",
                                }}
                                src={
                                    data.companyLogo && data.companyLogo.length
                                        ? `${data.companyLogo}`
                                        : `https://ui-avatars.com/api/?color=00756A&name=${data.companyName}`
                                }
                            />
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "4px",
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: "14px",
                                    fontWeight: 400,
                                    opacity: 0.6,
                                }}
                            >
                                {data.start} - {data.end}
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: "14px",
                                    fontWeight: 500,
                                    opacity: 0.6,
                                }}
                            >
                                {data.location}
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "4px",
                            }}
                        >
                            <Typography
                                sx={{
                                    fontWeight: 500,
                                    fontSize: " 16px",
                                }}
                            >
                                {data.position}
                            </Typography>
                            <Typography
                                sx={{
                                    fontWeight: 700,
                                    fontSize: "24px",
                                    letterSpacing: "0.06em",
                                }}
                            >
                                {data.companyName}
                            </Typography>
                        </Box>
                        <Typography
                            sx={{
                                fontWeight: 400,
                                fontSize: "14px",
                                opacity: 0.6,
                            }}
                        >
                            {data.description}
                        </Typography>
                    </Box>
                </Grid>
            ))}
        </Grid>
    );
}
