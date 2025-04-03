import { useEffect, useState } from "react";
import styles from "./cssModules/countDownDisplay.module.css";
import PropTypes from "prop-types";

function CountDownDisplay({ minutesRemaining, secondsRemaining }) {
  const [correctSeconds, setCorrectSeconds] = useState("");

  useEffect(() => {
    if (secondsRemaining < 10) {
      setCorrectSeconds(String(secondsRemaining).padStart(2, 0));
    } else {
      setCorrectSeconds(secondsRemaining);
    }
  }, [secondsRemaining]);

  return (
    <div className={styles.timeContainer}>
      <p>
       {minutesRemaining}:{correctSeconds}
      </p>
    </div>
  );
}

CountDownDisplay.propTypes = {
  minutesRemaining: PropTypes.number, 
  secondsRemaining: PropTypes.number, 
}

export default CountDownDisplay;
