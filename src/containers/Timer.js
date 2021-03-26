import React from 'react';

export default function Timer({ timeLeft, onCountdownEnd, timerClass }) {
    const minutesInNumber = Math.floor(timeLeft / 60);
    const secondsInNumber = (timeLeft - minutesInNumber * 60);

    const minutes = minutesInNumber < 10 ? '0' + minutesInNumber.toString() : minutesInNumber.toString();
    const seconds = secondsInNumber < 10 ? '0' + secondsInNumber.toString() : secondsInNumber.toString();

    if (minutesInNumber === 0 && secondsInNumber === 0) {
        onCountdownEnd();
    }
    return <span className={timerClass}>{minutes}:{seconds}</span>;
}