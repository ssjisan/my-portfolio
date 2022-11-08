import { Typography, Box, Avatar, useMediaQuery, Divider } from "@mui/material";
import React from "react";
import "../Styles/AboutMe.css";
import job from "../../Assets/experience.json";
import { useState } from "react";
import "../Styles/Experience.css";

export default function JobDetailsCard() {
    // eslint-disable-next-line
    const [experience, setExperience] = useState(job);
    // eslint-disable-next-line
    const forBelow900 = useMediaQuery("(max-width:900px)");
    return (
        <Box sx={{ display: "flex", flexDirection: "column", width: "1024px", }}>
            {experience.map((data, i) => {
                return (
                    <Box key={data.id}><Box sx={{ display: "flex", gap: 2 }}>
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
                        <Box>
                            <Typography
                                sx={{
                                    fontWeight: 700,
                                    fontSize: " 16px",
                                }}
                            >
                                {data.position}
                            </Typography>
                            <Typography
                                sx={{
                                    fontWeight: 400,
                                    fontSize: "14px",
                                    opacity: "0.6"
                                }}
                            >
                                {data.companyName}
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: "14px",
                                    fontWeight: 400,
                                    opacity: "0.6"
                                }}
                            >
                                {data.start} - {data.end}
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: "14px",
                                    fontWeight: 400,
                                    opacity: "0.6"
                                }}
                            >
                                {data.location}
                            </Typography>
                            <Typography variant="body2" sx={{ mt: 2 }}>{data.description}
                            </Typography>
                            <Typography variant="body2" sx={{
                                mt: 2, fontWeight: 700,
                            }}>Responsibilities:</Typography>
                            {data?.responsibilities.map((data) =>
                                <Typography variant="body2">• &nbsp; {data}</Typography>)}
                        </Box>
                    </Box>
                        {i!==experience.length-1 && <Divider sx={{ width: "100%", mt: 4, mb: 4 }} />}
                    </Box>
                )
            })}
        </Box>
    );
}
