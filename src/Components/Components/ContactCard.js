import {
  Button,
  Card,
  Grid,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "../Styles/AboutMe.css";
export default function ContactCard() {
  const forBelow900 = useMediaQuery("(max-width:900px)");
  const forBelow1500 = useMediaQuery("(max-width:1500px)");
  const forBelow1200 = useMediaQuery("(max-width:1210px)");
  //   const for955to901 = useMediaQuery("(min-width:901px) and (max-width:960px)");
  return (
    <Box>
      <Card>
        <Grid
          container
          spacing={1}
          justifyContent="center"
          alignItems="center"
          alignContent="center"
          style={{ padding: "50px" }}
        >
          <Grid
            item
            xs={12}
            md={6}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <img
              src="https://i.ibb.co/88Y6pdZ/contact.png"
              style={{ maxWidth: "100%" }}
              alt=""
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Typography variant="h4" style={{ fontWeight: "bold" }}>
                Lets's get in touch
              </Typography>
              <Typography variant="h6" style={{marginBottom:"20px"}}>
                Lets's get in touch
              </Typography>
              <TextField
                label="Name"
                variant="outlined"
                style={{borderRadius:"20px",marginBottom:"20px",width:"100%"}}
              />
              <TextField
                label="E-mail"
                variant="outlined"
                style={{borderRadius:"20px",marginBottom:"20px",width:"100%"}}
              />
              <TextField
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                style={{borderRadius:"20px",marginBottom:"20px",width:"100%"}}
              />
              <Button variant="contained">Send</Button>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
}
