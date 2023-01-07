import React, { useState, useEffect } from 'react';

const Timer = ({ date }) => {
  // define the function that will calculate the remaining time
  const calculateRemainingTime = (date) => {
    // get the current time in milliseconds
    const currentTime = new Date().getTime();

    // get the target time in milliseconds
    const targetTime = new Date(date).getTime();

    // calculate the difference in milliseconds
    const diffTime = targetTime - currentTime;

    // calculate the remaining time in seconds
    let remainingTimeInSeconds = Math.floor(diffTime / 1000);

    // calculate the number of hours
    const hours = Math.floor(remainingTimeInSeconds / 3600);

    // calculate the number of minutes
    remainingTimeInSeconds = remainingTimeInSeconds % 3600;
    const minutes = Math.floor(remainingTimeInSeconds / 60);

    // calculate the number of seconds
    const seconds = remainingTimeInSeconds % 60;

    // return the remaining time in the desired format
    return `${hours} hours, ${minutes} minutes, ${seconds} seconds`;
  }

  // create a state variable to store the remaining time
  const [remainingTime, setRemainingTime] = useState(calculateRemainingTime(date));

  // use the useEffect hook to update the remaining time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(calculateRemainingTime(date));
    }, 1000);

    // clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, [date]);

  return (
    <div>
      {/* render the remaining time */}
      <p> {remainingTime}</p>
    </div>
  );
};

export default Timer;
