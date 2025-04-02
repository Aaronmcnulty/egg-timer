import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from './components/landingPage/LandingPage.jsx'
import NavErrorPage from './components/navigation/NavErrorPage.jsx'
import './index.css'
import App from './App.jsx'

const router = createBrowserRouter([

  {
    path: "/", 
    element: <LandingPage />,
    errorElement: <NavErrorPage />,
  },
  {
    path: "home", 
    element: <App />,
  }
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)

