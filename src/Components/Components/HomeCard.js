import { Grid, Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { useDencrypt } from "use-dencrypt-effect";
import jisan from "./../images/jisan.png";
const values = [
  "Front-end Developer",
  "Prototyping With Figma",
  "UI/UX Designer",
];

export default function HomeCard() {
  const { result, dencrypt } = useDencrypt();
  const fontForMobile = useMediaQuery("(max-width:900px)");

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
        spacing={2}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        style={{ padding: fontForMobile ? "20px" : "" }}
      >
        <Grid item xs={12} md={6}>
          <Typography variant={fontForMobile ? "h6" : "h4"}>
            Hi, I am
          </Typography>
          <Typography variant={fontForMobile ? "h4" : "h2"}>
            Sadman Sakib Jisan
          </Typography>
          {!fontForMobile && (
            <Box style={{ display: "flex" }}>
              <Typography variant="h6">I Love to work with</Typography>
              &nbsp;&nbsp;
              <Typography variant="h6" style={{ color: "red" }}>
                {result}
              </Typography>
            </Box>
          )}
          {fontForMobile && (
            <Box style={{ display: "flex" }}>
              <Typography variant="body2">I Love to work with</Typography>
              &nbsp;&nbsp;
              <Typography variant="body2" style={{ color: "red" }}>
                {result}
              </Typography>
            </Box>
          )}
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={jisan} width={fontForMobile ? "300px" : "400px"} alt="" />
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
        <Grid>
          <Typography style={{ fontSize: 25 }}>
            OLED Temperature and Humidity Meter oled-temp-humid-meter.ino
            Displays results on 128 x 64 OLED display Uses AM2320 I2C
            Temperature and Humidity sensor Uses Adafruit SSD1306 OLED Library
            Uses Adafruit AM2320 Library Uses Adafruit GFX Graphics Library OLED
            Temperature and Humidity Meter oled-temp-humid-meter.ino Displays
            results on 128 x 64 OLED display Uses AM2320 I2C Temperature and
            Humidity sensor Uses Adafruit SSD1306 OLED Library Uses Adafruit
            AM2320 Library Uses Adafruit GFX Graphics Library OLED Temperature
            and Humidity Meter oled-temp-humid-meter.ino Displays results on 128
            x 64 OLED display Uses AM2320 I2C Temperature and Humidity sensor
            Uses Adafruit SSD1306 OLED Library Uses Adafruit AM2320 Library Uses
            Adafruit GFX Graphics Library OLED Temperature and Humidity Meter
            oled-temp-humid-meter.ino Displays results on 128 x 64 OLED display
            Uses AM2320 I2C Temperature and Humidity sensor Uses Adafruit
            SSD1306 OLED Library Uses Adafruit AM2320 Library Uses Adafruit GFX
            Graphics Library OLED Temperature and Humidity Meter
            oled-temp-humid-meter.ino Displays results on 128 x 64 OLED display
            Uses AM2320 I2C Temperature and Humidity sensor Uses Adafruit
            SSD1306 OLED Library Uses Adafruit AM2320 Library Uses Adafruit GFX
            Graphics Library OLED Temperature and Humidity Meter
            oled-temp-humid-meter.ino Displays results on 128 x 64 OLED display
            Uses AM2320 I2C Temperature and Humidity sensor Uses Adafruit
            SSD1306 OLED Library Uses Adafruit AM2320 Library Uses Adafruit GFX
            Graphics Library
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
