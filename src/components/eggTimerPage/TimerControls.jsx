import styles from "./cssModules/timerControls.module.css";
import PropTypes from "prop-types"; // ES6

function TimerControls({
  setCountdownStarted,
  setSecondsRemaining,
  setMinutesRemaining,
  cookingOption,
}) {
  const handleTimerClick = (event) => {
    setMinutesRemaining(minuteSum(event.target.value));
    setSecondsRemaining(secondsSum(event.target.value));
  };

  function minuteSum(totalSeconds){
    return Math.floor(totalSeconds / 60);
  }

  function secondsSum(totalSeconds){
    return totalSeconds - (60 * minuteSum(totalSeconds));
  }

  return (
    <div className={styles.timeOptionButtons} data-testid={'timerControls'}>
      {cookingOption &&
        cookingOption.map((option) => {
          return (
            <button
              className={styles.timerButton}
              key={option.type}
              onClick={handleTimerClick}
              value={option.time}
              data-testid={`test ${option.type}`}
            >
              {option.type}
            </button>
          );
        })}
    </div>
  );
}

TimerControls.propTypes = {
  setCountdownStarted: PropTypes.bool.isRequired,
  setSecondsRemaining: PropTypes.func.isRequired,
  setMinutesRemaining: PropTypes.func.isRequired,
  cookingOption: PropTypes.object.isRequired,
};

export default TimerControls;
