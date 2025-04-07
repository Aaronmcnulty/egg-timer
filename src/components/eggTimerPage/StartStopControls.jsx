import styles from "./cssModules/startStopControls.module.css"

function StartStopControls({setCountdownStarted}){

    const handleStartClick = () => {
        setCountdownStarted(true);
      };

      const handleStopClick = () => {
        setCountdownStarted(false);
      };


    return(
        <div className={styles.startStopContainer}>
            <button className={styles.startStopButton} onClick={handleStartClick}>Start</button>
            <button className={styles.startStopButton} onClick={handleStopClick}>Stop</button>
        </div>
    )
}

export default StartStopControls;
