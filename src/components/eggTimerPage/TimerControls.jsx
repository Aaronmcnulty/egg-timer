import styles from "./cssModules/timerControls.module.css";
import PropTypes from 'prop-types'; // ES6

function TimerControls({
  setCountdownStarted,
  setSecondsRemaining,
  setMinutesRemaining,
  cookingOption,
}) {
  

  const handleTimerClick = (event) => {
    const t = Math.floor(event.target.value / 60);
    setMinutesRemaining(t);
    const o = event.target.value - 60 * t;
    setSecondsRemaining(o);
  };

  

  return (
      <div className={styles.timeOptionButtons}>
        {cookingOption &&
          cookingOption.map((option) => {
            return (
              <button 
                className={styles.timerButton}
                key={option.type}
                onClick={handleTimerClick}
                value={option.time}
              >
                {option.type}
              </button>
            );
          })}
      </div >
    
  );
}

TimerControls.propTypes = {
  setCountdownStarted: PropTypes.bool.isRequired,
  setSecondsRemaining: PropTypes.func.isRequired,
  setMinutesRemaining: PropTypes.func.isRequired,
  cookingOption: PropTypes.object.isRequired
}

export default TimerControls;
