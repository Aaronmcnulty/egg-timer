import styles from "./cssModules/instructionsPage.module.css"
import { cookingOptions } from "../eggTimerPage/cookingOptions";
import { cookingInstructions } from "../eggTimerPage/cookingOptions";
import { useState } from "react";
import { Link } from "react-router-dom";


function InstructionsPage({}){

    const [instructionsOption, setInstructionsOption] = useState(0)

    const handleCookingChange = (event) => {
        setInstructionsOption(event.target.value);
      };



    return(
        <div className={styles.instructionsPage}>
            <div className={styles.mainTitle}>
                <h1>Guide to Cook:</h1>
            </div>
            <div className={styles.cookingSelectContainer}>
                    <select onChange={handleCookingChange}>
                      <option value={0}>BOILED</option>
                      <option value={1}>POACHED</option>
                    </select>
            </div>

            <div className={styles.cookingInstructionsContainer}>
                <ul className={styles.instructionsList}>
                {cookingInstructions[instructionsOption] && cookingInstructions[instructionsOption].map(entry => {
                    return <li className={styles.listEntry}>{entry}</li>
                })}
                </ul>
            </div>
            <Link className={styles.eggTimerButton} to="/home/timer">Ready</Link>
        </div>
    )
}

export default InstructionsPage;