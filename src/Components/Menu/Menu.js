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
          <Link to="/about" className="Link">
            <Typography
              className="item"
              variant="h6"
              style={{
                fontSize: pages === 2 ? "30px" : "20px",
                fontWeight: pages === 2 ? "bold" : "",
                color: "#444",
                textShadow: "2px 10px 10px #ccc",

                padding: pages === 2 ? 20 : "",
              }}
            >
              About Me
            </Typography>
          </Link>
        </Grid>
        <Grid item>
          <Link to="/projects" className="Link">
            <Typography
              className="item"
              variant="h6"
              style={{
                fontSize: pages === 3 ? "30px" : "20px",
                fontWeight: pages === 3 ? "bold" : "",
                color: "#444",
                textShadow: "2px 10px 10px #ccc",
                padding: pages === 3 ? 20 : "",
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
                fontSize: pages === 4 ? "30px" : "20px",
                fontWeight: pages === 4 ? "bold" : "",
                color: "#444",
                textShadow: "2px 10px 10px #ccc",
                padding: pages === 4 ? 20 : "",
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
                fontSize: pages === 5 ? "30px" : "20px",
                fontWeight: pages === 5 ? "bold" : "",
                color: "#444",
                textShadow: "2px 10px 10px #ccc",
                padding: pages === 5 ? 20 : "",
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
                fontSize: pages === 6 ? "30px" : "20px",
                fontWeight: pages === 6 ? "bold" : "",
                color: "#444",
                textShadow: "2px 10px 10px #ccc",
                padding: pages === 6 ? 20 : "",
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
