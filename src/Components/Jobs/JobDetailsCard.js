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
  const forBelow416 = useMediaQuery("(max-width:416px)");
  const forBelow567 = useMediaQuery("(max-width:567px)");
  const forBelow999 = useMediaQuery("(max-width:999px)");
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: forBelow999 ? "100%" : "1024px",
      }}
    >
      {experience.map((data, i) => {
        return (
          <Box key={data.id}>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                flexDirection: forBelow567 && "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            >
              <Box>
                <Avatar
                  style={{
                    width: forBelow416?"32px":"60px",
                    height: forBelow416?"32px":"60px",
                    backgroundColor: "#fff",
                    margin: "auto",
                    boxShadow: "0px 0px 20px rgba(85, 98, 217, 0.1)",
                    borderRadius: "4px",
                    border: "1px solid rgba(85, 98, 217, 0.4)",
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
                    fontSize: forBelow416? "14px": "16px",
                  }}
                >
                  {data.position}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: forBelow416? "10px": "14px",
                    opacity: "0.6",
                  }}
                >
                  {data.companyName}
                </Typography>
                <Typography
                  sx={{
                    fontSize: forBelow416? "10px": "14px",
                    fontWeight: 400,
                    opacity: "0.6",
                  }}
                >
                  {data.start} - {data.end}
                </Typography>
                <Typography
                  sx={{
                    fontSize: forBelow416? "10px": "14px",
                    fontWeight: 400,
                    opacity: "0.6",
                  }}
                >
                  {data.location}
                </Typography>
                <Typography variant="body2" sx={{ mt: 2,fontSize: forBelow416? "12px": "14px",}}>
                  {data.description}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    mt: 2,
                    mb:1,
                    fontSize: forBelow416? "14px": "16px",
                    fontWeight: 700,
                  }}
                >
                  Responsibilities:
                </Typography>
                {data?.responsibilities.map((data) => (
                  <Typography sx={{fontSize: forBelow416? "12px": "14px"}}>• &nbsp; {data}</Typography>
                ))}
              </Box>
            </Box>
            {i !== experience.length - 1 && (
              <Divider sx={{ width: "100%", mt: 4, mb: 4 }} />
            )}
          </Box>
        );
      })}
    </Box>
  );
}
