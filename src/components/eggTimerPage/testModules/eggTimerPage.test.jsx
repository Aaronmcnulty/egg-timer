
import { vi, describe, it, expect } from 'vitest'
import { render,rerender, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EggTimerPage from "../EggTimerPage"

describe("EggTimerPage Component Tests", () => {

    it("Should render component", () => {
        render(<EggTimerPage />)

        const pageTitle= screen.getByTestId("page-title")

        expect(pageTitle).toBeInTheDocument()
    })
})



