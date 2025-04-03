import { useEffect, useState } from "react";
import styles from "./cssModules/countDownDisplay.module.css";

function CountDownDisplay({ minutesRemaining, secondsRemaining }) {
  const [correctSeconds, setCorrectSeconds] = useState("");

  useEffect(() => {
    if (secondsRemaining < 10) {
      setCorrectSeconds(String(secondsRemaining).padStart(2, 0));
    } else {
      setCorrectSeconds(secondsRemaining);
    }
  });

  return (
    <div>
      <p>
        Time: {minutesRemaining}:{correctSeconds}
      </p>
    </div>
  );
}

export default CountDownDisplay;
