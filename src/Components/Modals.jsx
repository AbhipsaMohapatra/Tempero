import React from 'react'
// import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';


const Modals = ({header,data}) => {
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'var(--modalColor)',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    textAlign:'center',
    color:'var(--color)',
    
    
    
  };

  return (
    <div>
    <Button onClick={handleOpen} ><Box
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
             Know More
            </Box></Button>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
     
        <Typography id="modal-modal-title" variant="h6" component="h2" sx={{textAlign:'center',color:'var(--color)'}}>
          {header}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2,textAlign:'center', color:'var(--color)' }}>
          {data}
        </Typography>
        <IconButton
      onClick={handleClose}
      sx={{
        position: 'absolute',
        top: 8,
        right: 8,
        color: 'var(--color)',
        '&:hover': {
          color: 'red',
        },
      }}
    >
      <CloseIcon />
      
    </IconButton>
      </Box>
    </Modal>
  </div>
  )
}

export default Modals
