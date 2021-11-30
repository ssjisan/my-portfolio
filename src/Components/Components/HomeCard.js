import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useDencrypt } from "use-dencrypt-effect";
const values = ["Front-end Developer", "Prototyping With Figma", "UI/UX Designer"];

export default function HomeCard() {
  const { result, dencrypt } = useDencrypt();  
    useEffect(()=>{
      let i = 0;
        const action = setInterval(() => {
          dencrypt(values[i]);
          if(i === values.length - 1){
            i = 0;
            } 
            else{
              i = i+1;
            }
        }, 3000);
        return () => clearInterval(action);
    }, [dencrypt])
  return (
    <Box>
      <Grid
        container
        spacing={2}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        alignContent="center"
      >
        <Grid item xs={12} md={6}>
          <Typography variant="h4">Hi, I am</Typography>
          <Typography variant="h2">Sadman Sakib Jisan</Typography>
          <Typography variant="h6"> I Love to work with</Typography>
          <Typography variant="h6" style={{color:"red"}}> {result}</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src="https://ssjisan-pp.web.app/static/media/jisan.cdabf414.png"
            width="500px" alt=""
          />
        </Grid>
      </Grid>
    </Box>
  );
}
