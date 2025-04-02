import Navbar from "../navigation/Navbar";
import CountDownDisplay from "./CountdownDisplay";
import TimerControls from "./TimerControls";

function EggTimerPage(){

    return(
        <div>
            <h1>Egg Page</h1>
            <CountDownDisplay />
            <TimerControls />
        </div>
    )
}

export default EggTimerPage;