import React from "react";
import { Grid, useMediaQuery, Box } from "@mui/material";
import "./Styles/contact.css";
import ContactCard from "./Components/ContactCard";
import Menu from "./Menu/Menu";
import MobileMenu from "./Menu/MobileMenu";
export default function Contact() {
    const fontForMobile = useMediaQuery("(max-width:900px)");

    return (
        <Box className="contact-body">
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
                    <Box sx={{ pb: 10 }}>
                        <ContactCard />
                        <MobileMenu />
                    </Box>
                )}
            </Box>
        </Box>
    );
}
