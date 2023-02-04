import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import React from "react";

export default function BlogDetails() {
  const forBelow416 = useMediaQuery("(max-width:416px)");

  return (
    <Box>
      <Container>
        <Box sx={{ mt: 2 }}>Back</Box>
        <Box sx={{ mt: 2 }}>
          <Typography
            sx={{
              fontSize: forBelow416 ? "18px" : "24px",
              fontWeight: 600,
            }}
          >
            A Comprehensive Guide to JavaScript: Variables, Arrays, Objects &
            more
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
