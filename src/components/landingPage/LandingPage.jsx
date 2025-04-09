import { Link } from "react-router-dom";
import styles from "./cssModules/landingPage.module.css";
import EggElement from "./EggElement";
import Navbar from "../navigation/Navbar";

function LandingPage() {
  return (
    <div className={styles.landingPageContainer}>
      
     
     
        <EggElement />

        <Navbar />
        <div className={styles.bubble}>

        </div>
        <div className={styles.bubbleTwo}>

        </div>
        <div className={styles.bubbleThree}>

        </div>
        <div className={styles.bubbleFour}>

        </div>
        <div className={styles.bubbleFive}>

        </div>
        <div className={styles.bubbleSix}>

        </div>
        <div className={styles.bubbleSeven}>

        </div>
        <div className={styles.bubbleEight}>

        </div>
        <div className={styles.bubbleNine}>

        </div>
    </div>
  );
}

export default LandingPage;
