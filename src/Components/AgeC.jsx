import React from 'react'
import dayjs from 'dayjs';
import {useState} from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { Box, Button } from '@mui/material';
import {Typography} from '@mui/material'
import CalculateAge from './CalculateAge';

const AgeC = () => {
    const [ value , setValue] = useState(dayjs('2000-01-01'));
    const [show,setShow]=useState(true);
    const style = {
      textAlign: "center",
      width: "60%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",   // Add this
      flexDirection: "column",
      gap: "16px",            // Add spacing between elements
      border: "2px solid",
      borderColor: "var(--border_color)",
      padding: "12px",
      color: "var(--color)",
      };
      const handleClick = ()=>{
        
        setShow(false);
      }
      const handleShow = ()=>{
        setShow(true);
      }
  return (
    <>
    <Box sx={style} className='margin'>
        <Typography sx={{fontFamily:'unset',fontSize:{md:'20px',xl:'25px'}}}>Choose your birth day</Typography>
    <LocalizationProvider dateAdapter={AdapterDayjs} sx={{ color:'var(--color)'}} >
    <DemoContainer components={['DateCalendar']}>
      <DateCalendar
      value={value}
        referenceDate={dayjs('2022-04-17')}
        views={['year', 'month', 'day']}
        onChange={(newValue) => setValue(newValue)}
        shouldDisableDate={()=>!show}
        sx={{
          
          color: 'black',         // Text color
          background: 'var(--cardBg)',      // Background color
          '& .MuiPickersDay-root': {
            color: 'black',       // Day numbers
          },
          '& .Mui-selected': {
            backgroundColor: 'white', // Selected day
            color: 'black',
          },
        }}
        

      />
    </DemoContainer>
  </LocalizationProvider>
  <Button sx={{borderColor:'var(--border_color)',border:'2px solid' , color:'var(--color)', background:'var(--cardBg)'}} onClick={handleClick}>Click to Calculate</Button>
  <Button sx={{borderColor:'var(--border_color)',border:'2px solid' , color:'var(--color)' , background:'var(--cardBg)'}} onClick={handleShow}>Clear Previous Date</Button>
  {!show?<CalculateAge valAge={value} />:''}
  </Box></>
  )
}

export default AgeC
