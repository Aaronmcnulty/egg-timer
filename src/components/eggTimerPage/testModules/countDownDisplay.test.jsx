import { vi, describe, it, expect } from 'vitest'
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CountDownDisplay from "../CountDownDisplay"



describe("CountDownDisplay Test", () => {

    it("Should render component", () => {
        render(<CountDownDisplay />)

        const timeDisplay = screen.getByTestId("time-display")

        expect(timeDisplay).toBeInTheDocument()
    })
})



describe("Timer display test", () => {

    it("Should display correct time", () => {
        const minutesRemaining = 1
        const secondsRemaining = 20
        render(<CountDownDisplay secondsRemaining={secondsRemaining}
                                 minutesRemaining={minutesRemaining} 
                />)

        const timeDisplay = screen.getByTestId("time-display")

        expect(timeDisplay.textContent).toEqual('01:20')
    })

    it("Should display leading zero if minutesRemaining is under 10", () => {
        const minutesRemaining = 0
        const secondsRemaining = 46
        render(<CountDownDisplay secondsRemaining={secondsRemaining}
                                 minutesRemaining={minutesRemaining} 
                />)

        const timeDisplay = screen.getByTestId("time-display")

        expect(timeDisplay.textContent).toEqual('00:46')
    })

    it("Should display leading zero if secondsRemainin is below 10", () => {
        const minutesRemaining = 2
        const secondsRemaining = 6
        render(<CountDownDisplay secondsRemaining={secondsRemaining}
                                 minutesRemaining={minutesRemaining} 
                />)

        const timeDisplay = screen.getByTestId("time-display")

        expect(timeDisplay.textContent).toEqual('02:06')
    })

    it("Should display leading zero if secondsRemainin is below 10", () => {
        const minutesRemaining = 0
        const secondsRemaining = 0
        render(<CountDownDisplay secondsRemaining={secondsRemaining}
                                 minutesRemaining={minutesRemaining} 
                />)

        const timeDisplay = screen.getByTestId("time-display")

        expect(timeDisplay.textContent).toEqual('00:00')
    })

})

