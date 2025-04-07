

function StartStopControls({setCountdownStarted}){

    const handleStartClick = () => {
        setCountdownStarted(true);
      };

      const handleStopClick = () => {
        setCountdownStarted(false);
      };


    return(
        <div >
            <button onClick={handleStartClick}>Start</button>
            <button onClick={handleStopClick}>Stop</button>
        </div>
    )
}

export default StartStopControls;
