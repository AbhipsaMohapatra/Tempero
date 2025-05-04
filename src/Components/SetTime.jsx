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
import { margin, padding, textAlign } from "@mui/system";
import "./Style.css";
import { Button } from "@mui/material";
import StartTime from "./StartTime";

const SetTime = () => {
  const [start, setStarted] = useState(false);
  const [time, setTime] = useState(dayjs("2023-01-01T12:00:00"));
  const style = {
    textAlign: "center",
    width: "60%",

    display: "flex",
    justifyContent: "center",
    border: "2px solid black",
    padding: "12px",
  };
  const handleChangeTime = () => {
    // setTime(newValue)
    console.log("Selected time: " + time.format("HH:mm"));
    setStarted(true);
  };
  return (
    <Box sx={style} className="margin">
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
                        bgcolor: "grey",
                        color: "white",
                        borderRadius: "10px",
                      },
                    },
                    clock: {
                      sx: {
                        bgcolor: "white",
                        color: "black",
                      },
                    },
                    actionBar: { actions: [] },
                  }}
                />
              </DemoItem>
              <Button
                sx={{
                  alignItems: "center",
                  width: "25px",
                  color: "blue",
                  "&:hover": { transform: "scale(1.03)" },
                }}
                onClick={handleChangeTime}
              >
                Start
              </Button>
            </DemoContainer>
          </LocalizationProvider>
        </>
      ) : (
        <StartTime times={time} />
      )}
    </Box>
  );
};

export default SetTime;
