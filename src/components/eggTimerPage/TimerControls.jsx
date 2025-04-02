import styles from "./cssModules/timerControls.module.css"

function TimerControls({setCountdownStarted, setSecondsRemaining, setMinutesRemaining, cookingOption}){

    const handleStartClick = () => {
        setCountdownStarted(true)
    }

    const handleTimerClick = (event) => {
        const t = Math.floor(event.target.value / 60)
        setMinutesRemaining(t)
        const o = event.target.value - (60 * t)
        setSecondsRemaining(o)
    }

    const handleStopClick = () => {
        setCountdownStarted(false)
    }


    return(
        <div>
            <div>
                {cookingOption && cookingOption.map((option) => {
                  return  <button key={option.type} onClick={handleTimerClick} value={option.time}>{option.type}</button>
                })}
            </div>

            <button onClick={handleStartClick}>Start</button>
            <button onClick={handleStopClick}>Stop</button>
        </div>
    )
}

export default TimerControls;