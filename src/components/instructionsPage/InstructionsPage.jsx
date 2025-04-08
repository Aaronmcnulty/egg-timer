import styles from "./cssModules/instructionsPage.module.css"
import { cookingOptions } from "../eggTimerPage/cookingOptions";
import { cookingInstructionsBoiled } from "../eggTimerPage/cookingOptions";


function InstructionsPage({}){

    const handleCookingChange = (event) => {
        setCookingOption(cookingOptions[event.target.value]);
      };



    return(
        <div>
            <div className={styles.cookingSelectContainer}>
                    <select onChange={handleCookingChange}>
                      <option value={0}>BOILED</option>
                      <option value={1}>POACHED</option>
                    </select>
            </div>

            <div>
                <p>{cookingInstructionsBoiled}</p>
            </div>
        </div>
    )
}

export default InstructionsPage;