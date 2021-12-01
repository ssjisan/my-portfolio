import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import "./Styles/MenuStyles.css";

export default function MenuHeaderMobile({ pages }) {
  return (
    <Box>
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <Link to="/" className="Link">
            <Typography
              variant="body1"
              style={{
                fontSize: pages === 1 ? "30px" : "20px",
                fontWeight: pages === 1 ? "bold" : "",
                color: "#444",
                textShadow: "2px 10px 10px #ccc",
                padding: pages === 1 ? 20 : "",
              }}
            >
              Home
            </Typography>
          </Link>
        </Grid>
        <Grid item>
          <Link to="/" className="Link">
            <Typography
              variant="body1"
              style={{
                fontSize: pages === 1 ? "30px" : "20px",
                fontWeight: pages === 1 ? "bold" : "",
                color: "#444",
                textShadow: "2px 10px 10px #ccc",
                padding: pages === 1 ? 20 : "",
              }}
            >
              Projects
            </Typography>
          </Link>
        </Grid>
        <Grid item>
          <Link to="/" className="Link">
            <Typography
              variant="body1"
              style={{
                fontSize: pages === 1 ? "30px" : "20px",
                fontWeight: pages === 1 ? "bold" : "",
                color: "#444",
                textShadow: "2px 10px 10px #ccc",
                padding: pages === 1 ? 20 : "",
              }}
            >
              Experiences
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
}
