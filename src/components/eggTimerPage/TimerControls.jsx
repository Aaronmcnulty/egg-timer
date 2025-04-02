
function TimerControls({setCountdownStarted, setSecondsRemaining, setMinutesRemaining}){

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
                <button value={360} onClick={handleTimerClick}>Runny Yolk</button>
                <button value={480} onClick={handleTimerClick}>Soft Boiled</button>
                <button value={600} onClick={handleTimerClick}>Hard Boiled</button>
            </div>

            <button onClick={handleStartClick}>Start</button>
            <button onClick={handleStopClick}>Stop</button>
        </div>
    )
}

export default TimerControls;