import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  Grid,
  IconButton,
  Typography,
  Chip
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { BsCaretDown } from "react-icons/bs";
import { GoGlobe } from "react-icons/go";
import projectData from "../../Assets/projects.json";
import "../Styles/AboutMe.css";

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

export default function ProjectCard() {
   // eslint-disable-next-line
  const [project, setProject] = useState(projectData);
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = (id) => {
    setExpanded(expanded === id ? false : id);
  };
  return (
    <Grid container spacing={1}>
      {project.map((data) => (
        <Grid item lg={4} md={6} sm={6} key={data.id}>
          <Card>
            <CardHeader title={data.title} />
            <CardMedia
              component="img"
              height="194"
              image={data.image}
              alt={data.title}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {data.shortDescription}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites"><GoGlobe/></IconButton>
              <a href={data.github}><IconButton aria-label="share">
                <AiFillGithub />
              </IconButton></a>
              <ExpandMore
                expand={expanded === data.id}
                onClick={()=>handleExpandClick(data.id)}
              >
                <BsCaretDown />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded === data.id} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Description</Typography>
                <Typography paragraph>
                  {data.detailsDescription}
                </Typography>
                <Typography paragraph>Tech:</Typography>
                {data.tech.map((data,i)=>
                  <Chip label={data} style={{ margin: "5px" }} key={i}/>)}
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
