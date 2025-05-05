import React from "react";
import { useState } from "react";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import { DesktopTimePicker } from "@mui/x-date-pickers/DesktopTimePicker";
import { StaticTimePicker } from "@mui/x-date-pickers/StaticTimePicker";
import { TimeClock } from "@mui/x-date-pickers/TimeClock";
import Box from "@mui/material/Box";
import { bgcolor, height, margin, padding, textAlign } from "@mui/system";
import "./Style.css";
import { Button } from "@mui/material";
import StartTime from "./StartTime";
import { useNavigate } from "react-router-dom";

const SetTime = () => {
  const [start, setStarted] = useState(false);
  const [time, setTime] = useState(dayjs("2023-01-01T12:00:00"));
  const navigate = useNavigate();
  const style = {
    textAlign: "center",
    width: "100%",
    minheight: "100vh",

    display: "flex",
    justifyContent: "center",

    border: "2px solid black",
    padding: "12px",
    bgcolor: "black",
  };
  const handleChangeTime = () => {
    // setTime(newValue)
    console.log("Selected time: " + time.format("HH:mm"));
    setStarted(true);
  };
  const handlegetBack = () => {
    navigate("/");
  };
  return (
    <Box sx={style} className="bgImage">
      {!start ? (
        <>
          <LocalizationProvider dateAdapter={AdapterDayjs} variant="dark">
            <DemoContainer
              components={[
                "TimePicker",
                "MobileTimePicker",
                "DesktopTimePicker",
                "StaticTimePicker",
              ]}
            >
              <Box
                sx={{
                  marginTop: "12%",
                  alignItems: "center",
                  width: "100%",
                  color: "black",
                  fontWeight: "bold",
                  fontSize: "20px",
                  p: "12px",
                  "&:hover": {
                    transform: "scale(1.03)",
                    transition: "transform 200ms ease-out",
                  },
                }}
                className="btnColor"
              >
                Choose your time and start the timer
              </Box>
              <DemoItem>
                <StaticTimePicker
                  value={time}
                  onChange={(newValue) => {
                    const today = dayjs(); // today's date
                    const updatedTime = today
                      .hour(newValue.hour())
                      .minute(newValue.minute())
                      .second(0);
                    setTime(updatedTime);
                  }}
                  slotProps={{
                    layout: {
                      sx: {
                        bgcolor: "#ffbd59",
                        color: "white",
                        borderRadius: "10px",
                        width: "100%",
                        overflow: "hidden",
                      },
                    },
                    clock: {
                      sx: {
                        bgcolor: "white",
                        color: "black",
                        overflow: "hidden",
                        "&::-webkit-scrollbar": { display: "none" },
                        scrollbarWidth: "none",
                        "& .MuiClockNumber-root": {
                          fontSize: {
                            xs: "0.8rem",
                            sm: "1rem",
                            md: "1.2rem",
                          },
                        },
                      },
                    },
                    actionBar: { actions: [] },
                  }}
                />
              </DemoItem>
              <Button
                sx={{
                  alignItems: "center",
                  width: "100%",
                  color: "black",
                  fontWeight: "bold",
                  fontSize: "20px",

                  "&:hover": {
                    transform: "scale(1.1)",
                    transition: "transform 2ms ease-out",
                  },
                }}
                onClick={handleChangeTime}
                className="btnColor"
              >
                Start
              </Button>
              <br />
              <Button
                sx={{
                  alignItems: "center",
                  width: "100%",
                  color: "black",
                  fontWeight: "bold",
                  fontSize: "20px",
                  marginBottom: "12px",

                  "&:hover": {
                    transform: "scale(1.1)",
                    transition: "transform 200ms ease-out",
                  },
                }}
                onClick={handlegetBack}
                className="btnColor"
              >
                Go Back to home
              </Button>
              <br />
              <br />
            </DemoContainer>
          </LocalizationProvider>
        </>
      ) : (
        <StartTime times={time} s={setStarted} />
      )}
    </Box>
  );
};

export default SetTime;
