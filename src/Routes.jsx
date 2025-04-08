import App from "./App";
import EggTimerPage from "./components/eggTimerPage/EggTimerPage";
import InstructionsPage from "./components/instructionsPage/InstructionsPage";
import LandingPage from "./components/landingPage/LandingPage";
import NavErrorPage from "./components/navigation/NavErrorPage";

const routes = [
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <NavErrorPage />,
  },
  {
    path: "home",
    element: <App />,
    children: [
     {
        path: "timer", 
        element: <EggTimerPage />
     },
     {
        path: "instructions",
        element: <InstructionsPage />
     }
    ]
  },
];

export default routes;
