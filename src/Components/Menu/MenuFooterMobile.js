import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import "../Styles/MenuStyles.css";

export default function MenuFooterMobile({ pages }) {
  return (
    <Box>
      <Grid container spacing={5} justifyContent="center">
        <Grid item>
          <Link to="/about" className="Link">
            <Typography
              className="item"
              style={{
                fontSize: "15px",
                borderTop: pages===4 ? "2px solid black" : "2px solid transparent",
                color: "#444",
                fontWeight: pages === 4 &&"bold",
              }}
            >
              Bio
            </Typography>
          </Link>
        </Grid>
        <Grid item>
          <Link to="/contact" className="Link">
            <Typography
              className="item"
              style={{
                fontSize: "15px",
                borderTop: pages===5 ? "2px solid black" : "2px solid transparent",
                color: "#444",
                fontWeight: pages === 5 && "bold",
              }}
            >
              Contact Me
            </Typography>
          </Link>
        </Grid>
        <Grid item>
          <Link to="/blog" className="Link">
            <Typography
              className="item"
              style={{
                fontSize: "15px",
                borderTop: pages === 6 ? "2px solid black" : "2px solid transparent",
                color: "#444",
                fontWeight: pages === 6 && "bold",
              }}
            >
              Blogs
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
}
