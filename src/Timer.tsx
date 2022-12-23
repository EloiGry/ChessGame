import { useState, useEffect, useRef } from "react";
export function TimerWhite() {
    const [countDown, setCountDown] = useState<number>(600);
    const [runTimer, setRunTimer] = useState<boolean>(false);
    const previousValue = useRef<number>(0);
    let timerId : number;

    useEffect(() => {
        previousValue.current = countDown;
      }, [countDown]);

    useEffect(() => {
      if (runTimer) {
        if (previousValue.current) {
            setCountDown(previousValue.current)
        } else {
            setCountDown(60 * 10);
        }
        timerId = setInterval(() => {
          setCountDown((countDown) => countDown - 1);
        }, 1000);
      } else {
            clearInterval(timerId);
      }
  
      return () => clearInterval(timerId);
    }, [runTimer]);
  
    useEffect(() => {
      if (countDown < 0 && runTimer) {
        setRunTimer(false);
        setCountDown(600);
      }
    }, [countDown, runTimer]);
  
    const togglerTimer = () => setRunTimer((t) => !t);

    const minutes = Math.floor(countDown / 60)
    const seconds = (countDown % 60)
    

    return (
      <div>
        <div>
          {minutes} : {seconds}
        </div>
  
        <button type="button" onClick={togglerTimer}>
          {runTimer ? "Stop" : "Start"}
        </button>
      </div>
    );
  }