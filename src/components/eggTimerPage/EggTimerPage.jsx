import { useEffect, useState } from "react";
import CountDownDisplay from "./CountdownDisplay";
import TimerControls from "./TimerControls";

function EggTimerPage(){

    const [countdownStarted, setCountdownStarted] = useState(false)
    const [minutesRemaining, setMinutesRemaining] = useState(3)
    const [secondsRemaining, setSecondsRemaining] = useState(0)

    useEffect(() => {
        if(countdownStarted){
        const key = setInterval(() => {
            
                if(secondsRemaining > 0){
                    setSecondsRemaining(secondsRemaining => secondsRemaining -1)
                } else if (minutesRemaining > 0 && secondsRemaining == 0){
                    setSecondsRemaining(secondsRemaining => secondsRemaining +59)
                    setMinutesRemaining(minutesRemaining => minutesRemaining -1)
                }
        }, 1000)
        return () => {
            clearInterval(key);
          };
        }
    }, [countdownStarted, secondsRemaining])

    return(
        <div>
            <h1>Egg Page</h1>
            <CountDownDisplay />
            <TimerControls setCountdownStarted={setCountdownStarted} setSecondsRemaining={setSecondsRemaining}/>
            <p>{minutesRemaining} {secondsRemaining}</p>
        </div>
    )
}

export default EggTimerPage;