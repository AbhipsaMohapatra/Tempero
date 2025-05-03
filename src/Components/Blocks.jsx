import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Style.css';
import Modals from './Modals';
// import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import {useState} from 'react';
// import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
// import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
// import SetTime from './SetTime';
import { Link } from 'react-router-dom';



const Blocks = ({header,direct,know,knowdata,logo:Logo}) => {
    // const backgroundC ="linear-gradient(90deg,#ff66c4,#ffde59)";
    

    
  return (
    
        <Card sx={{ width: "25%",height:'auto', bgcolor:'grey',cursor:"pointer", boxShadow:"2px 2px 2px black",'&:hover': {
      
          transform: 'scale(1.05)',
          boxShadow:'2px 1px 1px black',
          
        },textAlign:'center',margin:'10px'}} className='bg-emerald-700'>
      <CardContent>
      {Logo && <Logo fontSize="large" />} 
      
        
        <Typography gutterBottom sx={{ color: 'text.black', fontSize: 20,textAlign:"center" , fontWeight:"bold"}}>
          
          
          
      
          {header}
        </Typography>
        
        {/* <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>adjective</Typography> */}
        <div sx={{display:'flex', p:'0' , gap:'2px'}}>
          <Modals header={know} data={knowdata}/>
          <Link to={`/${direct}`}>Lets Go</Link>
          
        </div>
      </CardContent>
     
    </Card>
      
   
  )
}

export default Blocks

