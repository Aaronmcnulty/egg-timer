import styles from "./cssModules/navErrorPage.module.css";

import { Link } from "react-router-dom";

const NavErrorPage = () => {
  return (
    <div>
      <h1>Oh no, this route doesn't exist!</h1>
      <Link to="home">
        You can go back to the home page by clicking here, though!
      </Link>
    </div>
  );
};

export default NavErrorPage;
