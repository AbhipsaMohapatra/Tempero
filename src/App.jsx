// import { useState } from 'react'

import "./App.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Blocks from "./Components/Blocks";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import { useState, useEffect } from "react";
// import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
// import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import { BrowserRouter,  Routes, Route } from "react-router-dom";
import SetTime from "./Components/SetTime";
import Home from "./Components/Home";
import AgeC from "./Components/AgeC";

function App() {
  // const [light, setLight] = useState(true);

  // const [logo, setLogo] = useState(true);
  // const ChangeBg = () => {
  //   setLogo(!logo);
  //   setLight((light) => !light);
  // };
  // useEffect(() => {
  //   document.documentElement.setAttribute(
  //     "dark-theme",
  //     light ? "light" : "dark"
  //   );
  // }, [light]);
  const [light, setLight] = useState(localStorage.getItem("selectedTheme")==="light"?true:false);

  useEffect(() => {
    const theme = light?"light":"dark"
    document.documentElement.setAttribute(
      "dark-theme",theme
    );
    localStorage.setItem("selectedTheme",theme);
  }, [light]);

  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Home light={light} setLight={setLight} />} />
        <Route path="/timer" element={<SetTime />} />
        <Route path="/age" element={<AgeC/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
