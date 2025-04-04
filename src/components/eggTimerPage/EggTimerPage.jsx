import { useEffect, useState } from "react";
import CountDownDisplay from "./CountDownDisplay";
import TimerControls from "./TimerControls";
import { cookingOptions } from "./cookingOptions";
import styles from "./cssModules/eggTimerPage.module.css";


function EggTimerPage() {
  const [countdownStarted, setCountdownStarted] = useState(false);
  const [minutesRemaining, setMinutesRemaining] = useState(0);
  const [secondsRemaining, setSecondsRemaining] = useState(0);
  const [cookingOption, setCookingOption] = useState(cookingOptions[0]);

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

  return (
    <div className={styles.eggTimerContainer}>
      <div className={styles.eggShape}>
      <h4>Egg Timer</h4>
      <select onChange={handleCookingChange}>
        <option value={0}>Boiled</option>
        <option value={1}>Poached</option>
      </select>
      
      <CountDownDisplay
        minutesRemaining={minutesRemaining}
        secondsRemaining={secondsRemaining}
      />
      <TimerControls
        cookingOption={cookingOption}
        setMinutesRemaining={setMinutesRemaining}
        setCountdownStarted={setCountdownStarted}
        setSecondsRemaining={setSecondsRemaining}
      />
    </div>
    </div>
  );
}

export default EggTimerPage;
