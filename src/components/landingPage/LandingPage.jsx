import { Link } from "react-router-dom";
import styles from "./cssModules/landingPage.module.css";
import EggElement from "./EggElement";

function LandingPage() {
  return (
    <div className={styles.landingPageContainer}>
      <Link to="home/instructions">How To</Link>
      <Link to="home/timer">Timer</Link>
     <h1 className={styles.pageTitle}>Landing Page</h1>
      <EggElement />
    </div>
  );
}

export default LandingPage;
