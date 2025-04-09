import styles from "./cssModules/navBar.module.css";

import { Link } from "react-router-dom";

function Navbar() {
  return (

    <div className={styles.navbarContainer}>
        <Link className={styles.navbarLink} to="home/instructions">How To</Link>
        <Link className={styles.navbarLink} to="home/timer">Egg Timer</Link>
    </div>
  )
  
}

export default Navbar;
