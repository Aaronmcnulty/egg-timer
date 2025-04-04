import styles from "./cssModules/timerControls.module.css";
import PropTypes from 'prop-types'; // ES6

function TimerControls({
  setCountdownStarted,
  setSecondsRemaining,
  setMinutesRemaining,
  cookingOption,
}) {
  const handleStartClick = () => {
    setCountdownStarted(true);
  };

  const handleTimerClick = (event) => {
    const t = Math.floor(event.target.value / 60);
    setMinutesRemaining(t);
    const o = event.target.value - 60 * t;
    setSecondsRemaining(o);
  };

  const handleStopClick = () => {
    setCountdownStarted(false);
  };

  return (
    <div className={styles.buttonsContainer}>
      <div className={styles.timeOptionButtons}>
        {cookingOption &&
          cookingOption.map((option) => {
            return (
              <button
                key={option.type}
                onClick={handleTimerClick}
                value={option.time}
              >
                {option.type}
              </button>
            );
          })}
      </div >
        <div className={styles.startStopButtons}>
          <button onClick={handleStartClick}>Start</button>
          <button onClick={handleStopClick}>Stop</button>
        </div>
      
    </div>
  );
}

TimerControls.propTypes = {
  setCountdownStarted: PropTypes.bool.isRequired,
  setSecondsRemaining: PropTypes.func.isRequired,
  setMinutesRemaining: PropTypes.func.isRequired,
  cookingOption: PropTypes.object.isRequired
}

export default TimerControls;
