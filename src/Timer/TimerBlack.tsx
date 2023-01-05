import { useState, useEffect, useRef } from "react";
import { useTurn } from "../store/store";

export function TimerBlack() {
  const [countDown, setCountDown] = useState<number>(600);
  const previousValue = useRef<number>(0);
  const playWhite = useTurn(state => state.show)
    let timerId : number;

    useEffect(() => {
        previousValue.current = countDown;
      }, [countDown]);

    useEffect(() => {
      if (!playWhite) {
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
    }, [!playWhite]);
  
    useEffect(() => {
      if (countDown === 0 && !playWhite) {
        setCountDown(600);
      }
    }, [countDown, playWhite]);
  
    const minutes = Math.floor(countDown / 60)
    const seconds = (countDown % 60)
    

    return (
        <div>
            {minutes} : {seconds}
       </div>
    );
  }