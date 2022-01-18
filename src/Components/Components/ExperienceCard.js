import {
  Card,
  CardActions,
  CardContent,
  Collapse,
  Grid,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
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
      <Box>
        <Timeline position="alternate">
        {experience.map((data, index) => (
  <TimelineItem>
  <TimelineOppositeContent color="text.secondary">
    {data.start}-{data.end}
  </TimelineOppositeContent>
  <TimelineSeparator>
  <Avatar src={data.companyLogo}/>
    <TimelineConnector />
  </TimelineSeparator>
  <TimelineContent><Card style={{backgroundColor:"#fafafa",padding:""}}>
     <Typography>{data.companyName}</Typography>
     <Typography>{data.position}</Typography>
    </Card></TimelineContent>
</TimelineItem>
 ))}
        </Timeline>
      </Box>
    </Grid>
  );
}

