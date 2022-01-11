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
                fontWeight: pages === 1 ? "bold" : "",
              }}
            >
              Home
            </Typography>
          </Link>
        </Grid>
        <Grid item>
          <Link to="/projects" className="Link">
            <Typography
              style={{
                fontSize: "15px",
                borderBottom: pages===2 ? "2px solid black" : "2px solid transparent",
                color: "#444",
                fontWeight: pages === 2 ? "bold" : "",
              }}
            >
              Projects
            </Typography>
          </Link>
        </Grid>
        <Grid item>
          <Link to="/experience" className="Link">
            <Typography
             style={{
              fontSize: "15px",
              borderBottom: pages===3 ? "2px solid black" : "2px solid transparent",
              color: "#444",
              fontWeight: pages === 3 ? "bold" : "",
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
