import styles from "./cssModules/navBar.module.css";

import { Link } from "react-router-dom";

function Navbar() {
  return (

    <div data-testid={'navbar-container'} className={styles.navbarContainer}>
        <Link data-testid={'instructions-link'} className={styles.navbarLink} to="home/instructions">How To</Link>
        <Link data-testid={'egg-timer-link'} className={styles.navbarLink} to="home/timer">Egg Timer</Link>
    </div>
  )
  
}

export default Navbar;
