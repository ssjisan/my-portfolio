import React from "react";
import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./Styles/MenuStyles.css"

export default function Menu({pages}) {
  return (
    <div style={{marginTop:"100%"}}><Grid
    container
    flexDirection="column"
    justifyContent="center"
    alignItems="flex-end"
    style={{ marginTop: "center" }}
  >
    <Grid>
      <Link to="/" className="Link">
        <Typography className="item" variant="h6" style={{borderBottom: pages===1? "2px solid green" : "2px solid transparent"}}>Home</Typography>
      </Link>
    </Grid>
    <Grid>
      <Link to="/about" className="Link">
        <Typography className="item" variant="h6" style={{borderBottom: pages===2? "2px solid green" : "2px solid transparent" }}>About Me</Typography>
      </Link>
    </Grid>
    <Grid>
      <Link to="/projects" className="Link">
        <Typography className="item" variant="h6" style={{borderBottom: pages===3? "2px solid green" : "2px solid transparent" }}>Projects</Typography>
      </Link>
    </Grid>
    <Grid>
      <Link to="/experience" className="Link">
        <Typography className="item" variant="h6" style={{borderBottom: pages===4? "2px solid green" : "2px solid transparent" }}>Experience</Typography>
      </Link>
    </Grid>
    <Grid>
      <Link to="/blog" className="Link">
        <Typography className="item" variant="h6" style={{borderBottom: pages===5? "2px solid green" : "2px solid transparent" }}>Blog</Typography>
      </Link>
    </Grid>
    <Grid>
      <Link to="/contact" className="Link">
        <Typography className="item" variant="h6" style={{borderBottom: pages===6? "2px solid green" : "2px solid transparent" }}>Contact</Typography>
      </Link>
    </Grid>
  </Grid></div>
  );
}
