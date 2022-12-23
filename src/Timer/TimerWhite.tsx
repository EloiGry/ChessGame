import { useState, useEffect, useRef, useContext } from "react";
import { TurnContext } from "../context/Turn";
export function TimerWhite() {
  const [countDown, setCountDown] = useState<number>(600);
  const previousValue = useRef<number>(0);
  const { whiteToPlay, setWhiteToPlay } = useContext(TurnContext)
    
    let timerId : number;

    useEffect(() => {
        previousValue.current = countDown;
      }, [countDown]);

    useEffect(() => {
      if (whiteToPlay) {
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
    }, [whiteToPlay]);
  
    useEffect(() => {
      if (countDown < 0 && whiteToPlay) {
        setWhiteToPlay(undefined);
        setCountDown(600);
      }
    }, [countDown, whiteToPlay]);

    const minutes = Math.floor(countDown / 60)
    const seconds = (countDown % 60)
    

    return (
        <div>
         {minutes} : {seconds}
        </div>
    );
  }