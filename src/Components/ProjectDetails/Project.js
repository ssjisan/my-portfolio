import { Box, Chip, Container, Typography } from "@mui/material";
import React from "react";

export default function Project() {
  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      <Box>
        <Typography
          sx={{ fontSize: "32px", fontWeight: 600, mb: 2, color: "#111827" }}
        >
          Developer Hiring Platform
        </Typography>
        <Typography sx={{ fontSize: "16px", color: "#6f7a8b" }}>
          Hello Dribbblers Presenting a modern ui styled landing page for a
          growth agency. Your feedback about the color select and element
          placement will be highly appreciated. If you like what you see, please
          show some love by pressing L & F on your keyboard
        </Typography>
        <Box sx={{ display: "flex", gap: 4, mt: 4 }}>
          <Box>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 600,
                mb: 1,
                color: "#6f7a8b",
              }}
            >
              Completetion Time
            </Typography>
            <Typography
              sx={{ fontSize: "16px", fontWeight: 600, color: "#3967FF" }}
            >
              6 months
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 600,
                mb: 1,
                color: "#6f7a8b",
              }}
            >
              Total Team Member
            </Typography>
            <Typography
              sx={{ fontSize: "16px", fontWeight: 600, color: "#3967FF" }}
            >
              12
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 600,
                mb: 1,
                color: "#6f7a8b",
              }}
            >
              My Role
            </Typography>
            <Typography
              sx={{ fontSize: "16px", fontWeight: 600, color: "#3967FF" }}
            >
              Front End Developer
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ mt: 3 }}>
        <Typography
          sx={{
            fontSize: "24px",
            mb: 2,
            fontWeight: 600,
            color: "#111827",
          }}
        >
          Overview
        </Typography>
        <Typography sx={{ color: "#6f7a8b" }}>
          Presenting a modern and minimal landing page design for Freelancer or
          Agency. This freebie is available for Figma only. Use this free
          landing page for your personal or commercial projects without any
          attribution. Fonts used in this freebie landing page for Freelancer or
          Agency are Abril Fatface and Rubik. <br />
          Both of these fonts are available on google fonts. This freebie is
          very modern and it is based on minimal design principles. You can use
          this freebie in any of your personal or commercial projects. This
          freebie contains all commen sections that are normally used in
          Personal portfolio website design. The design is very minimal and I
          really hope you will like this freebie. <br />
          To download this freebie you will need to subscribe my youtube
          channel. Once you subscribe the youtube channel the freebie will be
          unlocked.
        </Typography>
      </Box>
      <Box sx={{ mt: 3 }}>
        <Typography
          sx={{
            fontSize: "24px",
            mb: 2,
            fontWeight: 600,
            color: "#111827",
          }}
        >
          Technology used
        </Typography>
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
          <Chip
            label="React js"
            variant="outlined"
            sx={{
              color: "#B5B5B5",
              borderRadius: "2px",
              border: "1px solid #B5B5B5",
              fontWeight: 700,
            }}
          />
          <Chip
            label="React js"
            variant="outlined"
            sx={{
              color: "#B5B5B5",
              borderRadius: "2px",
              border: "1px solid #B5B5B5",
              fontWeight: 700,
            }}
          />
          <Chip
            label="React js"
            variant="outlined"
            sx={{
              color: "#B5B5B5",
              borderRadius: "2px",
              border: "1px solid #B5B5B5",
              fontWeight: 700,
            }}
          />
          <Chip
            label="React js"
            variant="outlined"
            sx={{
              color: "#B5B5B5",
              borderRadius: "2px",
              border: "1px solid #B5B5B5",
              fontWeight: 700,
            }}
          />
          <Chip
            label="React js"
            variant="outlined"
            sx={{
              color: "#B5B5B5",
              borderRadius: "2px",
              border: "1px solid #B5B5B5",
              fontWeight: 700,
            }}
          />
          <Chip
            label="React js"
            variant="outlined"
            sx={{
              color: "#B5B5B5",
              borderRadius: "2px",
              border: "1px solid #B5B5B5",
              fontWeight: 700,
            }}
          />
          <Chip
            label="React js"
            variant="outlined"
            sx={{
              color: "#B5B5B5",
              borderRadius: "2px",
              border: "1px solid #B5B5B5",
              fontWeight: 700,
            }}
          />
          <Chip
            label="React js"
            variant="outlined"
            sx={{
              color: "#B5B5B5",
              borderRadius: "2px",
              border: "1px solid #B5B5B5",
              fontWeight: 700,
            }}
          />
          <Chip
            label="React js"
            variant="outlined"
            sx={{
              color: "#B5B5B5",
              borderRadius: "2px",
              border: "1px solid #B5B5B5",
              fontWeight: 700,
            }}
          />
          <Chip
            label="React js"
            variant="outlined"
            sx={{
              color: "#B5B5B5",
              borderRadius: "2px",
              border: "1px solid #B5B5B5",
              fontWeight: 700,
            }}
          />
        </Box>
      </Box>
    </Container>
  );
}
