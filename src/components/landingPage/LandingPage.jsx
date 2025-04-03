import { Link } from "react-router-dom";
import styles from "./cssModules/landingPage.module.css"
import EggElement from "./EggElement";

function LandingPage() {
  return (
    <div className={styles.landingPageContainer}>
      <h1>Landing Page</h1>
      <Link to="home">Enter</Link>
      <EggElement />
    <div>
    
    </div>

    </div>
  );
}

export default LandingPage;
