import styles from "./cssModules/startStopControls.module.css";

function StartStopControls({ setCountdownStarted, setTimerFinished }) {
  const handleStartClick = () => {
    let isBoiling = confirm('Is the water already boiling?')
    
    if(isBoiling == true){
      setCountdownStarted(true)
    } else {
      alert('Make Sure the water is boiling before you start the timer')
    }
  };

  const handleStopClick = () => {
    setCountdownStarted(false);
    setTimerFinished(false);
  };

  return (
    <div className={styles.startStopContainer}>
      <button className={styles.startStopButton} onClick={handleStartClick}>
        START
      </button>
      <button className={styles.startStopButton} onClick={handleStopClick}>
        STOP
      </button>
    </div>
  );
}

export default StartStopControls;
