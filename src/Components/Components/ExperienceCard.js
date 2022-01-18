import {
  Card,
  CardActions,
  CardContent,
  Collapse,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "../Styles/AboutMe.css";
import Avatar from "@mui/material/Avatar";
import job from "../../Assets/experience.json";
import { useState } from "react";
import "../Styles/Experience.css";
import { styled } from "@mui/material/styles";
import { BsCaretDown } from "react-icons/bs";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));
export default function ExperienceCard() {
  // eslint-disable-next-line
  const [experience, setExperience] = useState(job);
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = (id) => {
    setExpanded(expanded === id ? false : id);
  };
  return (
    <Grid container spacing={1}>
      {experience.map((data) => (
        <Grid item xs={12} md={6} sm={6} lg={4}>
          <Card>
            <Box className="jobBox" >
              <Box
                style={{
                  padding: "5%",
                }}
              >
                <Avatar
                  style={{
                    width: "100px",
                    height: "100px",
                    border: "5px solid #F7F8FA",
                    backgroundColor: "#fff",
                    borderRadius: "50%",
                    margin: "auto",
                  }}
                  src={
                    data.companyLogo && data.companyLogo.length
                      ? `${data.companyLogo}`
                      : `https://ui-avatars.com/api/?color=00756A&name=${data.companyName}`
                  }
                />
              </Box>
            </Box>
            <CardContent>
              <Typography
                variant="h5"
                style={{ fontWeight: "bold", color: "#22215B", paddingBottom:"5%"}}
              >
                {data.companyName}
              </Typography>
              <Typography variant="body1" style={{paddingLeft:"3%",marginBottom:"3%"}}>{data.position}</Typography>
              <Typography variant="body2" style={{paddingLeft:"3%"}}>
                {data.start}-{data.end}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <ExpandMore
                expand={expanded === data.id}
                onClick={() => handleExpandClick(data.id)}
              >
                <BsCaretDown />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded === data.id} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography variant="body1" style={{ fontWeight: "bold",paddingBottom:"2%"}}>
                  Responsibilities:
                </Typography>
                {data.responsibilities.map((data) => (
                  <Box style={{paddingLeft:"2%"}}>
                    <Typography variant="body2">-{data}</Typography> <br />
                  </Box>
                ))}
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
