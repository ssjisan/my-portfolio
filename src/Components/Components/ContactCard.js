import {
  Alert,
  Button,
  Card,
  Divider,
  Grid,
  Snackbar,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "../Styles/AboutMe.css";
import { BsFacebook, BsGithub, BsLinkedin,BsFillTelephoneFill,BsEnvelopeFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import emailjs from 'emailjs-com';

export default function ContactCard() {
  const forBelow900 = useMediaQuery("(max-width:900px)");
  const forBelow1500 = useMediaQuery("(max-width:1500px)");
  const forBelow1200 = useMediaQuery("(max-width:1210px)");
  const [open, setOpen] = React.useState(false);

  //   const for955to901 = useMediaQuery("(min-width:901px) and (max-width:960px)");
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('portfolio_mail', 'portfolio_mail', e.target, 'user_mtQO7Imxg03OwEfEUDR1n')
      .then((result) => {
        setOpen(true);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

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
                alignItems: "center",
              }}
            >
              <Typography variant="h4" style={{ fontWeight: "bold",marginBottom:"20px"}}>
                Lets's get in touch
              </Typography>
              <Box>
                <a
                  href="https://www.linkedin.com/in/ssjisan/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsLinkedin style={{ fontSize: "30px", color: "#0077b5", padding:"10px"}} />
                </a>
                <a
                  href="https://github.com/ssjisan"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsGithub style={{ fontSize: "30px", color: "#171515", padding:"10px" }} />
                </a>
                <a
                  href="https://www.facebook.com/userjisan/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsFacebook style={{ fontSize: "30px", color: "#3b5998", padding:"10px" }} />
                </a>
              </Box>

              <Divider style={{margin:"10px", width:"100%"}}>
                {" "}
                <Typography>OR</Typography>
              </Divider>
              <Box style={{display:"flex",flexDirection:"column"}}>
                <Typography><BsFillTelephoneFill/> &nbsp; +88 01675 89 39 67</Typography>
                <Typography><BsEnvelopeFill/> &nbsp; ssjisan.dev@gmail.com</Typography>
                <Typography><FaMapMarkerAlt/> &nbsp; Khilkhet,Dhaka</Typography>
              </Box>
              <Divider style={{margin:"10px", width:"100%"}}>
                {" "}
                <Typography>OR</Typography>
              </Divider>
              <form onSubmit={sendEmail}>
              <TextField
              required
                label="Name"
                name="name"
                variant="outlined"
                style={{
                  borderRadius: "20px",
                  marginBottom: "20px",
                  width: "100%",
                }}
              />
              <TextField
              required
                label="E-mail"
                variant="outlined"
                name="email"
                style={{
                  borderRadius: "20px",
                  marginBottom: "20px",
                  width: "100%",
                }}
              />
              <TextField
              required
                label="Message"
                name="message"
                variant="outlined"
                multiline
                rows={3}
                style={{
                  borderRadius: "20px",
                  marginBottom: "20px",
                  width: "100%",
                }}
              />
              <Button variant="contained" type="submit">Send</Button>
              </form>
            </Box>
          </Grid>
        </Grid>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Thanks for your message! 
        </Alert>
      </Snackbar>
      </Card>
    </Box>
  );
}
