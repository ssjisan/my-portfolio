import { useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/MenuStyles.css";
import menuData from "../../Assets/Menu.json";
import "../Styles/MenuStyles.css";

export default function Menu({ pages, handleClick }) {
  const forBelow360 = useMediaQuery("(max-width:360px)");
    // eslint-disable-next-line no-unused-vars
    const [menu, setMenu] = useState(menuData);

    return (
        <Box
            style={{
                position: "fixed",
                bottom: 0,
                backgroundColor: "#ffffff",
                width: "100%",
            }}
        >
            <Box
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "5px 16px 5px 16px",
                    boxShadow: "4px 0px 20px #9399CF",
                    borderRadius: "10px 10px 0px 0px",
                }}
            >
                {menu.map((data) => (
                    <Link to={data.link} className="Link">
                        <Box
                            key={menuData.id}
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            <img src={data.icon} alt="" />
                            {!forBelow360 && <p
                                style={{
                                    fontFamily: "Helvetica",
                                    fontSize: "10px",
                                }}
                            >
                                {data.menu}
                            </p> }
                        </Box>
                    </Link>
                ))}
            </Box>
        </Box>
    );
}
