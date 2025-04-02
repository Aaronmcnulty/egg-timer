import App from "./App";
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
  },
];

export default routes;