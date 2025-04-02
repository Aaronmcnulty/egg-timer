import { useEffect, useState } from "react";
import Navbar from "../navigation/Navbar";
import CountDownDisplay from "./CountdownDisplay";
import TimerControls from "./TimerControls";

function EggTimerPage(){

    const [countdownStarted, setCountdownStarted] = useState(false)
    const [timeRemaining, setTimeRemaining] = useState(120)
    const [chosenTime, setChosenTime] = useState(0)
    
    useEffect(() => {
       if(countdownStarted){
        const key = setInterval(() => {
            setTimeRemaining(timeRemaining => timeRemaining -1)
        }, 1000)
        
        return () => {
            clearInterval(key);
          };
       }
    }, [countdownStarted])

    return(
        <div>
            <h1>Egg Page</h1>
            <CountDownDisplay />
            <TimerControls setCountdownStarted={setCountdownStarted} setTimeRemaining={setTimeRemaining}/>
            <p>{timeRemaining}</p>
        </div>
    )
}

export default EggTimerPage;