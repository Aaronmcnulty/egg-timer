import styles from "./cssModules/instructionsPage.module.css"
import { cookingOptions } from "../eggTimerPage/cookingOptions";
import { cookingInstructions } from "../eggTimerPage/cookingOptions";
import { useState } from "react";


function InstructionsPage({}){

    const [instructionsOption, setInstructionsOption] = useState(0)

    const handleCookingChange = (event) => {
        setInstructionsOption(event.target.value);
      };



    return(
        <div>
            <div className={styles.cookingSelectContainer}>
                    <select onChange={handleCookingChange}>
                      <option value={0}>BOILED</option>
                      <option value={1}>POACHED</option>
                    </select>
            </div>

            <div className={styles.cookingInstructionsContainer}>
                <ul>
                {cookingInstructions[instructionsOption] && cookingInstructions[instructionsOption].map(entry => {
                    return <li>{entry}</li>
                })}
                </ul>
            </div>
        </div>
    )
}

export default InstructionsPage;