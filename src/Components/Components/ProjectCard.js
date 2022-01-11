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
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";
import projectData from "../../Assets/projects.json";
import "../Styles/AboutMe.css";
import { BsCaretDown } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { GoGlobe  } from "react-icons/go";

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
  const forBelow900 = useMediaQuery("(max-width:900px)");
  const forBelow1500 = useMediaQuery("(max-width:1500px)");
  const forBelow1200 = useMediaQuery("(max-width:1210px)");
  //   const for955to901 = useMediaQuery("(min-width:901px) and (max-width:960px)");
  const [project, setProject] = useState(projectData);
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = (id) => {
    setExpanded(expanded === id ? false : id);
  };
  return (
    <Grid container spacing={1}>
      {project.map((data) => (
        <Grid item md={4} sm={6} xs={12} >
          <Card sx={{ maxWidth: 345 }} style={{overflowY:"auto"}}>
            <CardHeader title={data.title} />
            <CardMedia
              component="img"
              height="194"
              image={data.image}
              alt={data.title}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites"><GoGlobe/></IconButton>
              <IconButton aria-label="share">
                <AiFillGithub />
              </IconButton>
              <ExpandMore
                expand={expanded === data.id}
                onClick={()=>handleExpandClick(data.id)}
              >
                <BsCaretDown />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded === data.id} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Tech:</Typography>
                <Typography paragraph>
                  Heat 1/2 cup of the broth in a pot until simmering, add
                  saffron and set aside for 10 minutes.
                </Typography>
                <Typography>
                  Set aside off of the heat to let rest for 10 minutes, and then
                  serve.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
