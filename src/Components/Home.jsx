

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Blocks from "./Blocks";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import { useState, useEffect } from "react";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import CalculateIcon from '@mui/icons-material/Calculate';
// import { BrowserRouter,RouterProvider,Routes,Route } from "react-router-dom";
// import SetTime from "./Components/SetTime";


const Home = () => {
//     const [light, setLight] = useState(true);

//   const [logo, setLogo] = useState(true);
//   const ChangeBg = () => {
//     setLogo(!logo);
//     setLight((light) => !light);
//   };
//   useEffect(() => {
//     document.documentElement.setAttribute(
//       "dark-theme",
//       light ? "light" : "dark"
//     );
//   }, [light]);
const [light, setLight] = useState(localStorage.getItem("selectedTheme")==="light"?true:false);

useEffect(() => {
  const theme = light?"light":"dark"
  document.documentElement.setAttribute(
    "dark-theme",theme
  );
  localStorage.setItem("selectedTheme",theme);
}, [light]);

// const [logo, setLogo] = useState(true);

  const ChangeBg = () => {
    // setLogo(!logo);
    setLight(!light);
  };

 
  return (
    <div>
      <Box
        sx={{
          border: "2px solid",
          borderRadius: "25px",
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          padding:'5px',
          width: "45%",
          background: "var(--cardBg)",
          fontSize: { xs: "10px", sm: "12px", md: "20px", lg: "20px", xl: "25px" },
          borderColor:'var(--border_color)',
          color:'var(--color)',
          marginBottom:'120px',

        }}
        className="margin text-center"
      >
        {/* <Typography
          sx={{
            fontSize: {
              xs: "11px",
              sm: "15px",
              md: "20px",
              lg: "25px",
              xl: "30px",
            },color:'var(--color)'
          }}
          className="italic underline"
        >
          Welcome To...
        </Typography> */}
        <br />
        <Typography
          sx={{
            fontSize: {
              xs: "20px",
              sm: "20px",
              md: "20px",
              lg: "27px",
              xl: "35px",
            },
            fontWeight: "25px",
            color:'var(--color)',
            
          }}
          className="italic text-3xl"
        >
          Tempero : Spicing up time, one tick at a time.
        </Typography>
      </Box>
      <Box
        sx={{
          border: "3px solid black",
          borderRadius: "35px",
          padding: "25px",
          width: "90%", // Use relative width for responsiveness
          maxWidth: "1200px",
          display: "flex",
          flexWrap: "wrap", // Enable wrapping of cards
          gap: "25px",
          borderColor: "var(--border_color)",
          color: "var(--color)",
          justifyContent: "center",
          alignItems: "stretch",
        }}
        className="margin"
      >
        {/* //Making first card  */}

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
          }}
          onClick={ChangeBg}
        >
          <CardContent>
            {light ? (
              <DarkModeOutlinedIcon fontSize="large" />
            ) : (
              
              <WbSunnyOutlinedIcon fontSize="large" />
            )}

            <Typography
              gutterBottom
              sx={{
                fontSize: 20,
                textAlign: "center",
                fontWeight: "bold",
                marginTop: "20%",
                color:'var(--color)'
              }}
              className="black"
            >
              Theme
            </Typography>
          </CardContent>
        </Card>

        <Blocks
          header={"Timer"}
          direct="timer"
          know={"ok"}
          knowdata={"All fine"}
          logo={TimerOutlinedIcon}
        />
        <Blocks header={"Age Calculator"} direct="age" knowdata="Get accurate age including months and days" know="ok" logo={CalculateIcon}/>
      </Box>
      </div>
  )
}

export default Home
