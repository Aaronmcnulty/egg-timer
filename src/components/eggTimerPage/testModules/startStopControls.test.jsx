import { vi, describe, it, expect } from 'vitest'
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import StopStartControls from "../StartStopControls";

describe("blah", () => {

    it("Should render component", async () => {
        render(<StopStartControls />)

        const startButton = screen.getByTestId("startButton")
        const stopButton = screen.getByTestId("stopButton")

        expect(startButton.textContent).toEqual("START");
        expect(stopButton.textContent).toEqual("STOP");
    })



    it("Should call functions when 'START' button is clicked", async () => {
        window.confirm = vi.fn(() => true)
        const setCountdownStarted = vi.fn()
        const user = userEvent.setup()

        render(<StopStartControls setCountdownStarted={setCountdownStarted} />)

        const startButton = screen.getByTestId("startButton")

        await user.click(startButton)

        expect(setCountdownStarted).toHaveBeenCalledOnce();

    })

    it("Should NOT call functions if 'START' button is NOT clicked", async () => {
        window.confirm = vi.fn(() => true)
        const setCountdownStarted = vi.fn()
        const user = userEvent.setup()

        render(<StopStartControls setCountdownStarted={setCountdownStarted} />)

        const startButton = screen.getByTestId("startButton")

        expect(setCountdownStarted).not.toHaveBeenCalledOnce();
    })

    it("Should NOT call 'START' button functions if window.confirm is 'false'.", async () => {
        window.confirm = vi.fn(() => false)
        const setCountdownStarted = vi.fn()
        const user = userEvent.setup()

        render(<StopStartControls setCountdownStarted={setCountdownStarted} />)

        const startButton = screen.getByTestId("startButton")

        await user.click(startButton)

        expect(setCountdownStarted).not.toHaveBeenCalledOnce();
    })


    

    it("Should call correct functions when 'Stop' button is clicked", async () => {
        const user = userEvent.setup()
        const setCountdownStarted = vi.fn()
        const setTimerFinished = vi.fn()

        render(<StopStartControls
            setCountdownStarted={setCountdownStarted}
            setTimerFinished={setTimerFinished}
        />)

        const stopButton = screen.getByTestId("stopButton")

        await user.click(stopButton)

        expect(setCountdownStarted).toHaveBeenCalledOnce();
        expect(setTimerFinished).toHaveBeenCalledOnce();
    })

    it("Should NOT call functions if 'Stop' button is not clicked", async () => {
        const user = userEvent.setup()
        const setCountdownStarted = vi.fn()
        const setTimerFinished = vi.fn()

        render(<StopStartControls
            setCountdownStarted={setCountdownStarted}
            setTimerFinished={setTimerFinished}
        />)

        const stopButton = screen.getByTestId("stopButton")

        expect(setCountdownStarted).not.toHaveBeenCalledOnce();
        expect(setTimerFinished).not.toHaveBeenCalledOnce();
    })


})