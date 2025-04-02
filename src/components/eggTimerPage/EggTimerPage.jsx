import { useEffect, useState } from "react";
import CountDownDisplay from "./CountdownDisplay";
import TimerControls from "./TimerControls";

function EggTimerPage(){

    const [countdownStarted, setCountdownStarted] = useState(false)
    const [minutesRemaining, setMinutesRemaining] = useState(3)
    const [secondsRemaining, setSecondsRemaining] = useState(120)

    useEffect(() => {
        const key = setInterval(() => {
            if(countdownStarted && secondsRemaining > 0){
                setSecondsRemaining(secondsRemaining => secondsRemaining -1)
            }
        }, 1000)
        return () => {
            clearInterval(key);
          };
    }, [countdownStarted, secondsRemaining])

    return(
        <div>
            <h1>Egg Page</h1>
            <CountDownDisplay />
            <TimerControls setCountdownStarted={setCountdownStarted} setSecondsRemaining={setSecondsRemaining}/>
            <p>{secondsRemaining}</p>
        </div>
    )
}

export default EggTimerPage;