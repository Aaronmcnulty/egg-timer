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