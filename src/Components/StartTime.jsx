import React from 'react'
import { useEffect,useState } from 'react'
import dayjs from 'dayjs';

const StartTime = ({times}) => {
    const [currentTime, setCurrentTime] = useState(dayjs()); // Current time
    const [elapsedTime, setElapsedTime] = useState('00:00:00');
    const [over,setOver] = useState(false);
  
    useEffect(() => {
        if (!times) return;
    
        const now = dayjs();
        let selectedTime = times
          .set('year', now.year())
          .set('month', now.month())
          .set('date', now.date());
    
        // If selected time is in the past today, move it to tomorrow
        if (selectedTime.isBefore(now)) {
          selectedTime = selectedTime.add(1, 'day');
        }
    
        const intervalId = setInterval(() => {
          const current = dayjs();
    
          // Check if selected time has passed
          if (current.isAfter(selectedTime)) {
            setOver(true);
            clearInterval(intervalId);
            return;
          }
    
          // Time left before "over"
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
    
   
  return (
    <div>{over?<p>Your time is up</p>:<> <h2>Elapsed Time</h2>
        <p>{elapsedTime}</p></>}
      
     
    
      
    </div>
  )
}

export default StartTime
