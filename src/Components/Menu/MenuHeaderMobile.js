import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import "../Styles/MenuStyles.css";

export default function MenuHeaderMobile({ pages }) {
  return (
    <Box>
      <Grid container spacing={5} justifyContent="center">
        <Grid item>
          <Link to="/" className="Link">
            <Typography
              style={{
                fontSize: "15px",
                borderBottom: pages===1 ? "2px solid black" : "2px solid transparent",
                color: "#444",
              }}
            >
              Home
            </Typography>
          </Link>
        </Grid>
        <Grid item>
          <Link to="/" className="Link">
            <Typography
              style={{
                fontSize: "15px",

                color: "#444",
              }}
            >
              Projects
            </Typography>
          </Link>
        </Grid>
        <Grid item>
          <Link to="/" className="Link">
            <Typography
              style={{
                fontSize: "15px",

                color: "#444",
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
