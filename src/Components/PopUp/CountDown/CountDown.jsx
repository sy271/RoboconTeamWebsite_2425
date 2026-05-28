import React, { useState, useEffect } from 'react';
import './CountDown.css';
import dayjs from 'dayjs';

const CountdownTimer = ({ targetDateTime }) => {
  const [countdown, setCountdown] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  });

  useEffect(() => {
    updateCountdown(targetDateTime);

    const intervalId = setInterval(() => {
      updateCountdown(targetDateTime);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [targetDateTime]);

  function updateCountdown(targetDateTime) {
    const now = dayjs();
    const targetTime = dayjs(targetDateTime);

    const duration = targetTime.diff(now);

    const days = Math.floor(duration / (1000 * 60 * 60 * 24));
    const hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((duration % (1000 * 60)) / 1000);

    setCountdown({
      days: padWithZeros(days, 2),
      hours: padWithZeros(hours, 2),
      minutes: padWithZeros(minutes, 2),
      seconds: padWithZeros(seconds, 2)
    });
  }

  function padWithZeros(number, minLength) {
    const numberString = number.toString();
    if (numberString.length >= minLength) return numberString;
    return '0'.repeat(minLength - numberString.length) + numberString;
  }

  return (
    <div className="countdown-timer">
      <span className="two-numbers">{countdown.days}</span>
      <span>days</span>
      <span className="two-numbers">{countdown.hours}</span>
      <span>hours</span>
      <span className="two-numbers">{countdown.minutes}</span>
      <span>minutes</span>
      <span className="two-numbers">{countdown.seconds}</span>
      <span>seconds</span>
    </div>
  );
};

export default CountdownTimer;
