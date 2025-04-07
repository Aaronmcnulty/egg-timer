import styles from "./cssModules/startStopControls.module.css"

function StartStopControls({setCountdownStarted, setTimerFinished}){

    const handleStartClick = () => {
        setCountdownStarted(true);
      };

      const handleStopClick = () => {
        setCountdownStarted(false);
        setTimerFinished(false)
      };


    return(
        <div className={styles.startStopContainer}>
        <button className={styles.startStopButton} onClick={handleStartClick}>START</button>
            <button className={styles.startStopButton} onClick={handleStopClick}>STOP</button>
        </div>
    )
}

export default StartStopControls;
