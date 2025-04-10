import { useEffect, useState } from "react";
import styles from "./cssModules/countDownDisplay.module.css";
import PropTypes from "prop-types";

function CountDownDisplay({ minutesRemaining, secondsRemaining }) {
  const [correctSeconds, setCorrectSeconds] = useState("");
  const [correctMinutes, setCorrectMinutes] = useState("");

  useEffect(() => {
    formatSeconds()
    formatMinutes()
  }, [secondsRemaining, minutesRemaining]);

  const formatSeconds = () => {
    if (secondsRemaining < 10) {
      setCorrectSeconds(String(secondsRemaining).padStart(2, 0));
    } else {
      setCorrectSeconds(secondsRemaining);
    }
  }

  const formatMinutes = () => {
    if (minutesRemaining < 10) {
      setCorrectMinutes(String(minutesRemaining).padStart(2, 0));
    } else {
      setCorrectMinutes(minutesRemaining);
    }
  }

  return (
    <div  className={styles.timeContainer}>
      <p data-testid={'time-display'} className={styles.timeDisplay}>
        {correctMinutes}:{correctSeconds}
      </p>
    </div>
  );
}

CountDownDisplay.propTypes = {
  minutesRemaining: PropTypes.number,
  secondsRemaining: PropTypes.number,
};

export default CountDownDisplay;
