
import { render, screen} from "@testing-library/react"
import { describe, it, vi, expect } from "vitest"
import LandingPage from "../LandingPage"
import { BrowserRouter } from "react-router-dom"
import Navbar from "../../navigation/Navbar"


describe('LandingPage component Tests', () => {

    it('Should render the component', () => {

        render(
        <LandingPage />
        )

            const pageTitle= screen.getByTestId("page-title")
    
            expect(pageTitle).toBeInTheDocument()
        })

})
