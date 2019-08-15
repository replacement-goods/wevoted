import React, { useState } from 'react';

const padInts = num => num.toString().padStart(2, '0');

const doCountdown = target => {
  const now = new Date().getTime();
  const distance = target - now;
  if (distance <= 0) {
    return false;
  }

  const minsConst = 1000 * 60;
  const hoursConst = minsConst * 60;
  const daysConst = hoursConst * 24;

  const days = padInts(Math.floor(distance / daysConst));
  const hours = padInts(Math.floor((distance % daysConst) / hoursConst));
  const mins = padInts(Math.floor((distance % hoursConst) / minsConst));
  const secs = padInts(Math.floor((distance % minsConst) / 1000));

  const formattedTime = `${days}:${hours}:${mins}:${secs}`;

  return formattedTime;
}

const CountdownClock = () => {
  const [timeToLaunch, setTimeToLaunch] = useState('00:00:00:00');
  const countDownDate = new Date("Sept 12, 2019 12:00:00").getTime();
  const launchInterval = setInterval(() => {
    setTimeToLaunch(doCountdown(countDownDate));
    if (!timeToLaunch) {
      clearInterval(launchInterval);
    }
  }, 100);

  return timeToLaunch;
};

export default CountdownClock;