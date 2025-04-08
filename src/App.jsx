import "./App.css";
import EggTimerPage from "./components/eggTimerPage/EggTimerPage";
import Navbar from "./components/navigation/Navbar";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
