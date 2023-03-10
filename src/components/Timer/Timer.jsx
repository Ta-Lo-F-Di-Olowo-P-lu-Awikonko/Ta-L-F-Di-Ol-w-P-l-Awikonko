import { useEffect, useState } from 'react';


const Timer = ({setStop, questionNumber, timerRunning}) => {

  const [timer, setTimer] = useState(40);

  useEffect(() => {

    if (timer === 0) {
      setStop(true);
    }

    const interval = setInterval(() => {
        timerRunning && setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [setStop, timer, timerRunning]);

useEffect(() => {
    setTimer(40);
},[questionNumber]);

  return timer;

};

export default Timer;