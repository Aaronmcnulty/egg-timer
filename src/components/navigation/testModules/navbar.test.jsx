
import { render, screen} from "@testing-library/react"
import { describe, it, vi, expect } from "vitest"
import Navbar from "../Navbar"
import { BrowserRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"


describe('Navbar component Tests', () => {

    it('Should render the component', () => {

        render(
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
        )
            const navbarContainer= screen.getByTestId("navbar-container")
    
            expect(navbarContainer).toBeInTheDocument()
        })

})