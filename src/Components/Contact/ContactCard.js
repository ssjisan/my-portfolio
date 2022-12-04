import React, { useState } from "react";
import {
  Button,
  Grid,
  TextField,
  Typography,
  Box,
} from "@mui/material";
import "../Styles/AboutMe.css";
import {
  BsFillTelephoneFill,
} from "react-icons/bs";
import emailjs from "emailjs-com";
export default function ContactCard() {
  // eslint-disable-next-line
  const [open, setOpen] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "portfolio_mail",
        "portfolio_mail",
        e.target,
        "user_mtQO7Imxg03OwEfEUDR1n"
      )
      .then(
        (result) => {
          setOpen(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  // eslint-disable-next-line
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "760px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Box>
          <Typography
            sx={{ fontWeight: 700, fontSize: "24px", textAlign: "center" }}
          >
            Get in touch!
          </Typography>
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: "16px",
              color: "rgba(0, 0, 0, 0.6)",
              textAlign: "center",
            }}
          >
            Contact with me for any project or any idea
          </Typography>
        </Box>
        <Box sx={{ mt: 6 }}>
          <Grid container>
            <Grid xs={12} sm={4} md={4}>
              <Typography>
                <BsFillTelephoneFill /> &nbsp; +88 01675 89 39 67
              </Typography>
            </Grid>
            <Grid xs={12} sm={4} md={4}>
              <Typography>
                <BsFillTelephoneFill /> &nbsp; +88 01675 89 39 67
              </Typography>
            </Grid>
            <Grid xs={12} sm={4} md={4}>
              <Typography>
                <BsFillTelephoneFill /> &nbsp; +88 01675 89 39 67
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.08)",
            borderRadius: "12px",
            p: 4,
            mt: 4,
          }}
        >
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: "16px",
            }}
          >
            Contact form
          </Typography>
          <form onSubmit={sendEmail}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  label="First Name"
                  name="name"
                  variant="standard"
                  sx={{
                    marginBottom: "20px",
                    width: "100%",
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  label="Last Name"
                  name="name"
                  variant="standard"
                  sx={{
                    marginBottom: "20px",
                    width: "100%",
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  label="Email"
                  name="email"
                  variant="standard"
                  type="email"
                  sx={{
                    marginBottom: "20px",
                    width: "100%",
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  label="Phone"
                  name="name"
                  variant="standard"
                  sx={{
                    marginBottom: "20px",
                    width: "100%",
                  }}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <TextField
                  required
                  label="Message"
                  name="message"
                  variant="standard"
                  multiline
                  rows={3}
                  sx={{
                    borderRadius: "20px",
                    marginBottom: "20px",
                    width: "100%",
                  }}
                />
              </Grid>
            </Grid>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                variant="contained"
                type="submit"
                sx={{
                  borderRadius: "8px",
                  marginBottom: "20px",
                  width: "150px",
                  height: "44px",
                  background:
                    "linear-gradient(180deg, #141414 0%, rgba(20, 20, 20, 0.8) 100%)",
                }}
              >
                Send
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
}
