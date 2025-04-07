import { useEffect, useState } from "react";
import CountDownDisplay from "./CountDownDisplay";
import TimerControls from "./TimerControls";
import { cookingOptions } from "./cookingOptions";
import styles from "./cssModules/eggTimerPage.module.css";
import StartStopControls from "./StartStopControls";

function EggTimerPage() {
  const [countdownStarted, setCountdownStarted] = useState(false);
  const [minutesRemaining, setMinutesRemaining] = useState(1);
  const [secondsRemaining, setSecondsRemaining] = useState(1);
  const [cookingOption, setCookingOption] = useState(cookingOptions[0]);
  const [timerFinished, setTimerFinished] = useState(false);

  useEffect(() => {
    if (countdownStarted) {
      const key = setInterval(() => {
        if (secondsRemaining > 0) {
          setSecondsRemaining((secondsRemaining) => secondsRemaining - 1);
        } else if (minutesRemaining > 0 && secondsRemaining == 0) {
          setSecondsRemaining((secondsRemaining) => secondsRemaining + 59);
          setMinutesRemaining((minutesRemaining) => minutesRemaining - 1);
        }
      }, 1000);
      return () => {
        clearInterval(key);
      };
    }
  }, [countdownStarted, secondsRemaining, minutesRemaining]);

  const handleCookingChange = (event) => {
    setCookingOption(cookingOptions[event.target.value]);
  };

  useEffect(() => {
    if (minutesRemaining == 0 && secondsRemaining == 0) {
      setTimerFinished(true);
      console.log("hi");
    }
  }, [minutesRemaining, secondsRemaining]);

  return (
    <div className={styles.eggTimerContainer}>
      <h1 className={styles.mainTitle}>How Do You Like Your Eggs?</h1>
      <div className={styles.cookingSelectContainer}>
        <select onChange={handleCookingChange}>
          <option value={0}>BOILED</option>
          <option value={1}>POACHED</option>
        </select>
      </div>

      <TimerControls
        cookingOption={cookingOption}
        setMinutesRemaining={setMinutesRemaining}
        setSecondsRemaining={setSecondsRemaining}
      />

      <div className={!timerFinished ? styles.eggShape : styles.eggShapeAlarm}>
        <CountDownDisplay
          minutesRemaining={minutesRemaining}
          secondsRemaining={secondsRemaining}
        />
      </div>

      <StartStopControls
        setCountdownStarted={setCountdownStarted}
        countdownStarted={countdownStarted}
        setTimerFinished={setTimerFinished}
      />
    </div>
  );
}

export default EggTimerPage;
