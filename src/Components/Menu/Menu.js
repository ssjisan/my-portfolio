import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import "../Styles/MenuStyles.css"
export default function Menu({ pages }) {
  return (
    <Box>
      <Grid
        container
        flexDirection="column"
        alignItems="flex-end"
        spacing={5}
        style={{ paddingRight: "20px" }}
      >
        <Grid item>
          <Link to="/" className="Link">
            <Typography
              className="item"
              variant="h6"
              style={{
                fontSize: pages === 1 ? "24px" : "20px",
                fontWeight: pages === 1 ? "bold" : "",
                color: "#444",
                textShadow: "15px 0px 20px rgba(0,0,0,0.66)",
                padding: pages === 1 ? 20 : 10,
              }}
            >
              Home
            </Typography>
          </Link>
        </Grid>
        <Grid item>
          <Link to="/about" className="Link">
            <Typography
              className="item"
              variant="h6"
              style={{
                fontSize: pages === 2 ? "24px" : "20px",
                fontWeight: pages === 2 ? "bold" : "",
                color: "#444",
                textShadow: "15px 0px 20px rgba(0,0,0,0.66)",
                padding: pages === 2 ? 20 : 10,
              }}
            >
             Bio
            </Typography>
          </Link>
        </Grid>
        <Grid item>
          <Link to="/projects" className="Link">
            <Typography
              className="item"
              variant="h6"
              style={{
                fontSize: pages === 3 ? "24px" : "20px",
                fontWeight: pages === 3 ? "bold" : "",
                color: "#444",
                textShadow: "15px 0px 20px rgba(0,0,0,0.66)",
                padding: pages === 3 ? 20 : 10,
              }}
            >
              Projects
            </Typography>
          </Link>
        </Grid>
        <Grid item>
          <Link to="/experience" className="Link">
            <Typography
              className="item"
              variant="h6"
              style={{
                fontSize: pages === 4 ? "24px" : "20px",
                fontWeight: pages === 4 ? "bold" : "",
                color: "#444",
                textShadow: "15px 0px 20px rgba(0,0,0,0.66)",
                padding: pages === 4 ? 20 : 10,
              }}
            >
              Experience
            </Typography>
          </Link>
        </Grid>
        <Grid item>
          <Link to="/blog" className="Link">
            <Typography
              className="item"
              variant="h6"
              style={{
                fontSize: pages === 5 ? "24px" : "20px",
                fontWeight: pages === 5 ? "bold" : "",
                color: "#444",
                textShadow: "15px 0px 20px rgba(0,0,0,0.66)",
                padding: pages === 5 ? 20 : 10,
              }}
            >
              Blog
            </Typography>
          </Link>
        </Grid>
        <Grid item>
          <Link to="/contact" className="Link">
            <Typography
              className="item"
              variant="h6"
              style={{
                fontSize: pages === 6 ? "24px" : "20px",
                fontWeight: pages === 6 ? "bold" : "",
                color: "#444",
                textShadow: "15px 0px 20px rgba(0,0,0,0.66)",
                padding: pages === 6 ? 20 : 10,
              }}
            >
              Contact
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
}
