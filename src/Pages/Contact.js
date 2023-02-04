import React from "react";
import { Grid, useMediaQuery, Box } from "@mui/material";
import "../Components/Styles/contact.css";
import ContactCard from "../Components/Contact/ContactCard";
import Menu from "../Components/Menu/Menu";
import MobileMenu from "../Components/Menu/MobileMenu";
export default function Contact() {
    const fontForMobile = useMediaQuery("(max-width:900px)");

    return (
        <Box className="contact-body" sx={{backgroundColor:"#F7F8FA"}}>
            <Box>
                {!fontForMobile && (
                    <Grid container>
                        <Grid item md={11} style={{ padding: "5%" }}>
                            <ContactCard />
                        </Grid>
                        <Grid
                            item
                            md={1}
                            sx={{
                                height: "100vh",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Menu />
                        </Grid>
                    </Grid>
                )}
                {fontForMobile && (
                    <Box sx={{ padding: "20px 32px 80px 32px" }}>
                        <ContactCard />
                        <MobileMenu />
                    </Box>
                )}
            </Box>
        </Box>
    );
}
