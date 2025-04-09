import { Link } from "react-router-dom";
import styles from "./cssModules/landingPage.module.css";
import EggElement from "./EggElement";
import Navbar from "../navigation/Navbar";

function LandingPage() {
  return (
    <div className={styles.landingPageContainer}>
      
     <h1 className={styles.pageTitle}>Egg Time</h1>
      <EggElement />
      
        <Navbar />
      
    </div>
  );
}

export default LandingPage;
