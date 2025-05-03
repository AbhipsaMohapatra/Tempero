

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
// import { BrowserRouter,RouterProvider,Routes,Route } from "react-router-dom";
// import SetTime from "./Components/SetTime";


const Home = ({ light, setLight }) => {
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
const [logo, setLogo] = useState(true);

  const ChangeBg = () => {
    setLogo(!logo);
    setLight((prev) => !prev);
  };

 
  return (
    <div>
      <Box
        sx={{
          border: "2px solid black",
          borderRadius: "25px",
          padding: "25px",
          width: "45%",
          bgcolor: "bisque",
          fontSize: { xs: 0, sm: "12px", md: "20px", lg: "20px", xl: "25px" },
        }}
        className="margin text-center "
      >
        <Typography
          sx={{
            fontSize: {
              xs: "11px",
              sm: "15px",
              md: "20px",
              lg: "25px",
              xl: "30px",
            },
          }}
          className="italic underline"
        >
          Welcome To...
        </Typography>
        <br />
        <Typography
          sx={{
            fontSize: {
              xs: "11px",
              sm: "15px",
              md: "20px",
              lg: "27px",
              xl: "35px",
            },
            fontWeight: "25px",
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
          width: "55%",
          display: "flex",
          gap: "25px",
        }}
        className="margin"
      >
        {/* //Making first card  */}

        <Card
          sx={{
            width: "25%",
            height: "auto",
            bgcolor: "grey",
            cursor: "pointer",
            boxShadow: "2px 2px 2px black",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: "2px 1px 1px black",
            },
            textAlign: "center",
            margin: "10px",
          }}
          onClick={ChangeBg}
        >
          <CardContent>
            {logo ? (
              <WbSunnyOutlinedIcon fontSize="large" />
            ) : (
              <DarkModeOutlinedIcon />
            )}

            <Typography
              gutterBottom
              sx={{
                fontSize: 20,
                textAlign: "center",
                fontWeight: "bold",
                marginTop: "20%",
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
      </Box>
      </div>
  )
}

export default Home
