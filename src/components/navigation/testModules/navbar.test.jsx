
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

describe('Egg Timer Link Tests', () => {

    it('Should contain the correct href to the EggTimePage route', async () => {
        const user = userEvent.setup()
        render(
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
        )
            const eggTimerLink = screen.getByTestId("egg-timer-link")
        
            expect(eggTimerLink.href).toContain('home/timer')
        })
    
        it('Should NOT contain the href to the InstructionsPage route', async () => {
            const user = userEvent.setup()
            render(
                <BrowserRouter>
                    <Navbar />
                </BrowserRouter>
            )
                const eggTimerLink = screen.getByTestId("egg-timer-link")
            
                expect(eggTimerLink.href).not.toContain('home/instructions')
            })
                
})

describe('Instructions Link Tests', () => {

    it('Should contain the correct href to the InstructionsPage route', async () => {
        const user = userEvent.setup()
        render(
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
        )
            const instructionsLink = screen.getByTestId("instructions-link")
        
            expect(instructionsLink.href).toContain('home/instructions')
        })
    
        it('Should NOT contain the href to the EggTimePage route', async () => {
            const user = userEvent.setup()
            render(
                <BrowserRouter>
                    <Navbar />
                </BrowserRouter>
            )
                const instructionsLink = screen.getByTestId("instructions-link")
            
                expect(instructionsLink.href).not.toContain('home/timer')
            })
                
})


