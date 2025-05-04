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
        border: "2px solid black",
        padding: "12px",
        flexDirection:'column',
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
        <Typography>Choose your birth day</Typography>
    <LocalizationProvider dateAdapter={AdapterDayjs} sx={{width:'45%'}} >
    <DemoContainer components={['DateCalendar']}>
      <DateCalendar
      value={value}
        referenceDate={dayjs('2022-04-17')}
        views={['year', 'month', 'day']}
        onChange={(newValue) => setValue(newValue)}
        shouldDisableDate={()=>!show}
        

      />
    </DemoContainer>
  </LocalizationProvider>
  <Button onClick={handleClick}>Click to Calculate</Button>
  <Button onClick={handleShow}>Clear Previous Date</Button>
  {!show?<CalculateAge valAge={value} />:''}
  </Box></>
  )
}

export default AgeC
