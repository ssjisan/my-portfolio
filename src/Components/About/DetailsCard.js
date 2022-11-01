import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import details from "../../Assets/Intorduction.json";
export default function DetailsCard() {
  const forBelow899 = useMediaQuery("(max-width:899px)");
  const forBelow999 = useMediaQuery("(max-width:999px)");
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          width: forBelow899 ? "100" : forBelow999 ? "580px" : "720px",
        }}
      >
        <Box sx={{ mb: 5 }}>
          <Typography
            sx={{
              fontSize: forBelow999 ? "32px" : "48px",
              fontWeight: 700,
              mb: 2,
            }}
          >
            I'm Frontend Developer & UI/UX Designer.
          </Typography>
          <Typography
            sx={{ fontSize: forBelow999 ? "16px" : "20px", fontWeight: 350 }}
          >
            Hey, I’m Sadman Sakib Jisan - hope you doing well. Now that you are
            here, why not know a little about me?
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 4,
          }}
        >
          {details.map((data) => (
            <>
              <Typography
                sx={{
                  fontSize: forBelow999 ? "16px" : "20px",
                  fontWeight: 600,
                }}
              >
                {data.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: forBelow999 ? "14px" : "20px",
                  fontWeight: 350,
                }}
              >
                {data.description}
              </Typography>
            </>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
