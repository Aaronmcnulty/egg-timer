import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from './components/landingPage/LandingPage.jsx'
import EggTimerPage from './components/eggTimerPage/EggTimerPage.jsx'
import './index.css'
import App from './App.jsx'

const router = createBrowserRouter([

  {
    path: "/", 
    element: <LandingPage />,
  },
  {
    path: "egg-timer", 
    element: <EggTimerPage />
  }
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)

