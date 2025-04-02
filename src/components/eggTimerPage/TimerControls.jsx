
function TimerControls({setCountdownStarted, setTimeRemaining}){

    const handleStartClick = () => {
        setCountdownStarted(true)
    }

    const handleTimerClick = (event) => {
        setTimeRemaining(event.target.value)
    }

    const handleStopClick = () => {
        setCountdownStarted(false)
    }
    return(
        <div>

            <div>
                <button value={120} onClick={handleTimerClick}>3:00</button>
                <button value={150} onClick={handleTimerClick}>3:30</button>
                <button value={180} onClick={handleTimerClick}>4:00</button>
            </div>

            <button onClick={handleStartClick}>Start</button>
            <button onClick={handleStopClick}>Stop</button>
        </div>
    )
}

export default TimerControls;