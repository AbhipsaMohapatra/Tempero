import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Style.css";
import Modals from "./Modals";
import { Box } from "@mui/material";
// import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import { useState } from "react";
// import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
// import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
// import SetTime from './SetTime';
import { Link } from "react-router-dom";

const Blocks = ({ header, direct, know, knowdata, logo: Logo }) => {
  // const backgroundC ="linear-gradient(90deg,#ff66c4,#ffde59)";

  return (
    <Card
      sx={{
        flex: "1 1 250px", // Flexible grow/shrink/basis
        minWidth: "250px",
        maxWidth: "300px",
        height: "auto",
        background: "var(--cardBg)",
        cursor: "pointer",
        boxShadow: "2px 2px 6px rgba(0,0,0,0.2)",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "4px 4px 10px rgba(0,0,0,0.3)",
        },
        textAlign: "center",
        borderRadius: "16px",
        color: "var(--color)",
      }}
      className="bg-emerald-700"
    >
      <CardContent>
        {Logo && <Logo fontSize="large" />}

        <Typography
          gutterBottom
          sx={{
            color: "text.black",
            fontSize: 20,
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          {header}
        </Typography>

        {/* <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>adjective</Typography> */}
        <div sx={{ display: "flex", p: "0", gap: "2px" }}>
          <Modals header={know} data={knowdata} />
          {/* <Link to={`/${direct}`} >Lets Go</Link> */}
          <Link
            to={`/${direct}`}
            style={{ textDecoration: "none" }} // Remove underline
          >
            <Box
              sx={{
                
                px: 2,
                py: 1.0,
                 // You can define this in CSS
                color: "var(--color)",
                borderRadius: "12px",
                textAlign: "center",
                fontWeight: "bold",
                fontSize: { xs: "14px", sm: "16px" },
                width: { xs: "100%", sm: "auto" },
                transition: "all 0.3s ease",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#444", // Or a hardcoded color like '#444'
                  color: "white",
                  transform: "scale(1.05)",
                },
              }}
            >
              Let's Go
            </Box>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default Blocks;
