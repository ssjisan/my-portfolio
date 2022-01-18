import { Grid, Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { useDencrypt } from "use-dencrypt-effect";
const values = [
  "Front-end Developer",
  "Prototyping With Figma",
  "UI/UX Designer",
];

export default function HomeCard() {
  const { result, dencrypt } = useDencrypt();
  const forBelow900 = useMediaQuery("(max-width:900px)");
  const forBelow1500= useMediaQuery("(max-width:1500px)");
  const forBelow1200= useMediaQuery("(max-width:1210px)");
    useEffect(() => {
    let i = 0;
    const action = setInterval(() => {
      dencrypt(values[i]);
      if (i === values.length - 1) {
        i = 0;
      } else {
        i = i + 1;
      }
    }, 3000);
    return () => clearInterval(action);
  }, [dencrypt]);
  return (
    <Box>
      <Grid
        container
        spacing={1}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        style={{ padding: forBelow900 ? "20px" : "" }}
      >
        <Grid item xs={12} md={6}>
          <Typography variant={forBelow900 ? "body1" : "h4"}>
            Hi, I am
          </Typography>
          <Typography variant={(forBelow900 && "h4") ||(forBelow1200 && "h4") || (forBelow1500 && "h3") || "h2"}>
            Sadman Sakib Jisan
          </Typography>
          {!forBelow900 && (
            <Box style={{ display: "flex"}}>
              <Typography variant={(forBelow1200 && "body2")||(forBelow1200 && "body1") || "h6"} style={{width:"200px"}}>I Love to work with</Typography>
              
              <Typography variant={(forBelow1200 && "body2")||(forBelow1200 && "body1") || "h6"} style={{ color: "red",width:"300px"}}>
                {result}
              </Typography>
            </Box>
          )}
          {forBelow900 && (
            <Box style={{ display: "flex" }}>
              <Typography variant="body2" style={{ width:"150px"}}>I Love to work with</Typography>
              
              <Typography variant="body2" style={{ color: "red", width:"200px"}}>
                {result}
              </Typography>
            </Box>
          )}
        </Grid>
        <Grid item xs={12} md={6}>
          <img src="https://i.ibb.co/N6LGtdj/jisan.png" width={forBelow900 ? "280px" : "400px"} alt="" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container spacing={3}>
            <Grid item>
              <a
                href="https://www.linkedin.com/in/ssjisan/"
                target="_blank"
                rel="noreferrer"
              >
                <BsLinkedin style={{ fontSize: "30px", color: "#0077b5" }} />
              </a>
            </Grid>

            <Grid item>
              <a
                href="https://github.com/ssjisan"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub style={{ fontSize: "30px", color: "#171515" }} />
              </a>
            </Grid>
            <Grid item>
              <a
                href="https://www.facebook.com/userjisan/"
                target="_blank"
                rel="noreferrer"
              >
                <BsFacebook style={{ fontSize: "30px", color: "#3b5998" }} />
              </a>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
