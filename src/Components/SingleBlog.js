import React, { useEffect } from "react";
import { Grid, useMediaQuery } from "@mui/material";
import Menu from "./Menu/Menu";
import "./Styles/AboutMe.css";
import { Box } from "@mui/system";
import BioCard from "./Components/BioCard";
import MenuHeaderMobile from "./Menu/MenuHeaderMobile";
import MenuFooterMobile from "./Menu/MenuFooterMobile";
import BlogCardDetails from "./Components/BlogCardDetails";
import { useParams } from "react-router-dom";
import blogData from "../Assets/blogData.json";
import { useState } from "react";

export default function SingleBlog({ pages }) {
  const fontForMobile = useMediaQuery("(max-width:900px)");
  const { id } = useParams();
  const [blog, setBlog] = useState(blogData);
  const [singleBlog, setSingleBlog] = useState([]);
  useEffect(() => {
    let selectedBlog = blog.filter((data) => data.id === +id);
    setSingleBlog(selectedBlog);
  }, []);
  return (
    <Box className="bio-body">
       {!fontForMobile && (<Grid container>
        <Grid item md={10} style={{ padding: "5%", maxHeight: "100vh", overflowY: "scroll" }}>
          <BlogCardDetails singleBlog={singleBlog} />
        </Grid>
        <Grid item md={2}>
          <Menu pages={5} />
        </Grid>
      </Grid>
        )}
        {fontForMobile && (
        <Grid container style={{ display: "flex" , justifyContent: "space-between"  }}>
          <Grid item xs={12} style={{ display:"flex", justifyContent:"center", width:"100%", top:0,maxHeight:"10vh", padding:"2%"}}>
            <MenuHeaderMobile/>
          </Grid>
          <Grid item xs={12} sm={12} md={12}style={{padding:"5%",maxHeight:"85vh",overflowY:"scroll"}}>
          <BlogCardDetails singleBlog={singleBlog} />
          </Grid>
          <Grid item xs={12} style={{display:"flex", justifyContent:"center", width:"100%", position:"fixed", bottom:0,maxHeight:"10vh"}}>
            <MenuFooterMobile pages={6}/>
          </Grid>
        </Grid>
      )}
    </Box>
  );
}
