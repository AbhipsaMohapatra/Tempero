import React from 'react'
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(duration);
dayjs.extend(relativeTime);


const CalculateAge = ({valAge}) => {
    const today = dayjs();

  let years = today.diff(valAge, 'year');
  const afterYears = valAge.add(years, 'year');

  let months = today.diff(afterYears, 'month');
  const afterMonths = afterYears.add(months, 'month');

  let days = today.diff(afterMonths, 'day');
  return (
    <div>
         <h3>Age:</h3>
         <p>{years} years, {months} months, {days} days</p>

    </div>
  )
}

export default CalculateAge
