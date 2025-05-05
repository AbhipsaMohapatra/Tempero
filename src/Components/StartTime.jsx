import React, { useEffect, useState, useRef } from 'react';
import dayjs from 'dayjs';
import audiofile from '../Videos/song1.mp3';
import { Button } from '@mui/material';
import "./Style.css";

const StartTime = ({ times,s }) => {
  const [elapsedTime, setElapsedTime] = useState('00:00:00');
  const [over, setOver] = useState(false);
  const [audioPlayed, setAudioPlayed] = useState(false);
  const audioRef = useRef(null);
const [audioEnabled, setAudioEnabled] = useState(false);

  function handleBack(){
    if(over==true){
      s(false);
    }

  }
  const handleEnableAudio = () => {
    setAudioEnabled(true); // Unlock audio
  };
  

  useEffect(() => {
    if (!times) return;

    const now = dayjs();
    let selectedTime = times
      .set('year', now.year())
      .set('month', now.month())
      .set('date', now.date());

    if (selectedTime.isBefore(now)) {
      selectedTime = selectedTime.add(1, 'day');
    }

    const intervalId = setInterval(() => {
      const current = dayjs();

      if (current.isAfter(selectedTime)) {
        setOver(true);
        clearInterval(intervalId);
        return;
      }

      const diffInSeconds = selectedTime.diff(current, 'seconds');
      const hours = Math.floor(diffInSeconds / 3600);
      const minutes = Math.floor((diffInSeconds % 3600) / 60);
      const seconds = diffInSeconds % 60;

      setElapsedTime(
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
      );
    }, 1000);

    return () => clearInterval(intervalId);
  }, [times]);

  useEffect(() => {
    let timeoutId;

    if (over && audioEnabled && !audioPlayed) {
      const audio = new Audio(audiofile);
      audioRef.current = audio;

      audio
        .play()
        .then(() => {
          setAudioPlayed(true);

          timeoutId = setTimeout(() => {
            audio.pause();
            audio.currentTime = 0;
          }, 60000); // stop after 1 minute
        })
        .catch((err) => {
          console.error('Audio play error:', err);
        });
    }

    return () => {
      clearTimeout(timeoutId);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, [over, audioPlayed]);

  return (
    <div className='text-white font-semibold w-1/2 text-5xl textCol'>
    {/* Show Enable Sound Button if not already allowed */}
    {(!audioEnabled && over) && (
        <Button sx={{
          alignItems: "center",
          width: "100%",
          color: "black",
          fontWeight:'bold',
          fontSize:'20px',
          mt:'2%',
          
          "&:hover": { transform: "scale(1.03)" },
        }}  className="btnColor"
          onClick={() => {
            const audio = new Audio(audiofile);
            audio
              .play()
              .then(() => {
                setAudioEnabled(true);
              })
              .catch((e) => {
                console.error('Enable sound error:', e);
              });
          }}
         >
          Enable Sound
        </Button>
      )}
      
    {over ? (
      <>
        <p style={{marginTop:'12%'}}>Your time is up</p>
        <Button sx={{
                  alignItems: "center",
                  width: "100%",
                  color: "black",
                  fontWeight:'bold',
                  fontSize:'20px',
                  mt:'12%',
                  
                  "&:hover": { transform: "scale(1.03)" },
                }} className="btnColor" onClick={handleBack}>Go Back</Button>
      </>
    ) : (
      <>
        <h2 className='mt-3.5'>Elapsed Time</h2>
        <p className='mt-5'>{elapsedTime}</p>
      </>
    )}
  </div>
  );
};

export default StartTime;
