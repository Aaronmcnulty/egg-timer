import { vi, describe, it, expect, afterAll } from 'vitest'
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TimerControls from '../TimerControls';
import { cookingOptions } from '../cookingOptions';



describe("Timer Controls Component", () => {

    afterEach(() => {
        vi.restoreAllMocks()
      })

    it("Should render component", async () => {
        render(<TimerControls />)

        const timerControls = screen.getByTestId('timerControls')

        expect(timerControls).toBeInTheDocument();
    })
})

describe("Boiled Egg Time Buttons", () => {
    
    afterEach(() => {
        vi.restoreAllMocks()
      })
    const cookingOption = cookingOptions[0]

    const setMinutesRemaining = vi.fn();
    const setSecondsRemaining = vi.fn();
    const user = userEvent.setup()

    it("Should call time setting functions when RUNNY YOLK button clicked", async () => {


        render(<TimerControls cookingOption={cookingOption}
            setMinutesRemaining={setMinutesRemaining}
            setSecondsRemaining={setSecondsRemaining}
        />)

        const button = screen.getByTestId('test RUNNY YOLK')
        await user.click(button)
        expect(setMinutesRemaining).toHaveBeenCalled();
        expect(setSecondsRemaining).toHaveBeenCalled();
    })

    it("Should call time setting functions when 'SOFT BOILED' button clicked", async () => {

        render(<TimerControls cookingOption={cookingOption}
            setMinutesRemaining={setMinutesRemaining}
            setSecondsRemaining={setSecondsRemaining}
        />)

        const button = screen.getByTestId('test SOFT BOILED')
        await user.click(button)
        expect(setMinutesRemaining).toHaveBeenCalled();
        expect(setSecondsRemaining).toHaveBeenCalled();
    })

    it("Should call time setting functions when 'HARD BOILED' button clicked", async () => {

        render(<TimerControls cookingOption={cookingOption}
            setMinutesRemaining={setMinutesRemaining}
            setSecondsRemaining={setSecondsRemaining}
        />)

        const button = screen.getByTestId('test HARD BOILED')
        await user.click(button)
        expect(setMinutesRemaining).toHaveBeenCalled();
        expect(setSecondsRemaining).toHaveBeenCalled();
    })
})

describe("Poached Egg Time Buttons", () => {
    afterEach(() => {
        vi.restoreAllMocks()
      })
    const cookingOption = cookingOptions[1]
    const setMinutesRemaining = vi.fn();
    const setSecondsRemaining = vi.fn();
    const user = userEvent.setup()

    it("Should call time setting functions when RUNNY YOLK button clicked", async () => {


        render(<TimerControls cookingOption={cookingOption}
            setMinutesRemaining={setMinutesRemaining}
            setSecondsRemaining={setSecondsRemaining}
        />)

        const button = screen.getByTestId('test RUNNY YOLK')
        await user.click(button)
        expect(setMinutesRemaining).toHaveBeenCalled();
        expect(setSecondsRemaining).toHaveBeenCalled();
    })

    it("Should call time setting functions when 'GOOEY YOLK' button clicked", async () => {

        render(<TimerControls cookingOption={cookingOption}
            setMinutesRemaining={setMinutesRemaining}
            setSecondsRemaining={setSecondsRemaining}
        />)

        const button = screen.getByTestId('test GOOEY YOLK')
        await user.click(button)
        expect(setMinutesRemaining).toHaveBeenCalled();
        expect(setSecondsRemaining).toHaveBeenCalled();
    })

    it("Should call time setting functions when 'HARD YOLK' button clicked", async () => {

        render(<TimerControls cookingOption={cookingOption}
            setMinutesRemaining={setMinutesRemaining}
            setSecondsRemaining={setSecondsRemaining}
        />)

        const button = screen.getByTestId('test HARD YOLK')
        await user.click(button)
        expect(setMinutesRemaining).toHaveBeenCalled();
        expect(setSecondsRemaining).toHaveBeenCalled();
    })

    
})

describe("scc", () => {

    it("Should ", async () => {

        render(<TimerControls 
        />)

        
    })
})