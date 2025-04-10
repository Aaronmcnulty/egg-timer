import { describe, it, vi, expect, afterEach, beforeEach } from "vitest";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import InstructionsPage from "../InstructionsPage";
import { BrowserRouter } from "react-router-dom";


describe('InstructionsPage Tests', () => {

    it('Should render the component', () => {
        render(
            <BrowserRouter>
                <InstructionsPage />
            </BrowserRouter>
        )

        const mainTitle = screen.getByTestId("pageTitle")

        expect(mainTitle).toBeInTheDocument()
    })

    it('Should render select options with the correct textContent', async () => {
        
        render(
            <BrowserRouter>
                <InstructionsPage />
            </BrowserRouter>
        )
        let options = screen.getAllByTestId('select-option')

        expect(options[0].textContent).toStrictEqual('BOILED')
        expect(options[1].textContent).toStrictEqual('POACHED')
    })
    

    it('Should change selected option from option 0 to option 1', async () => {
        
        const user = userEvent.setup()
        
        render(
            <BrowserRouter>
                <InstructionsPage />
            </BrowserRouter>
        )

        const cookingOptionSelect = screen.getByTestId("cookingOptionSelect")
        let options = screen.getAllByTestId('select-option')

        await user.selectOptions(cookingOptionSelect,  "1")

        expect(options[1].selected).toBeTruthy()
        expect(options[0].selected).toBeFalsy()
    })

    it('Should NOT change selected option from 0 if userEvent is not called', async () => {
        
        const user = userEvent.setup()
        
        render(
            <BrowserRouter>
                <InstructionsPage />
            </BrowserRouter>
        )

        const cookingOptionSelect = screen.getByTestId("cookingOptionSelect")
        let options = screen.getAllByTestId('select-option')


        expect(options[0].selected).toBeTruthy()
        expect(options[1].selected).toBeFalsy()
    })

    it('option 0 should stay selected when option 0 is selected', async () => {
        
        const user = userEvent.setup()
        
        render(
            <BrowserRouter>
                <InstructionsPage />
            </BrowserRouter>
        )

        const cookingOptionSelect = screen.getByTestId("cookingOptionSelect")
        let options = screen.getAllByTestId('select-option')

        await user.selectOptions(cookingOptionSelect,  "0")

        expect(options[0].selected).toBeTruthy()
        expect(options[1].selected).toBeFalsy()
    })


    it('Should change selected option after each user event', async () => {
        
        const user = userEvent.setup()
        
        render(
            <BrowserRouter>
                <InstructionsPage />
            </BrowserRouter>
        )

        const cookingOptionSelect = screen.getByTestId("cookingOptionSelect")
        let options = screen.getAllByTestId('select-option')

        await user.selectOptions(cookingOptionSelect,  "1")
        expect(options[1].selected).toBeTruthy()
        expect(options[0].selected).toBeFalsy()
        
        await user.selectOptions(cookingOptionSelect,  "0")
        expect(options[0].selected).toBeTruthy()
        expect(options[1].selected).toBeFalsy()
    })

    it('Should change selected option after each user event (reverse order)', async () => {
        
        const user = userEvent.setup()
        const onChange = vi.fn()
        render(
            <BrowserRouter>
                <InstructionsPage onChange={onChange} />
            </BrowserRouter>
        )

        const cookingOptionSelect = screen.getByTestId("cookingOptionSelect")
        let options = screen.getAllByTestId('select-option')

        await user.selectOptions(cookingOptionSelect,  "0")
        expect(options[0].selected).toBeTruthy()
        expect(options[1].selected).toBeFalsy()
        
        await user.selectOptions(cookingOptionSelect,  "1")
        expect(options[1].selected).toBeTruthy()
        expect(options[0].selected).toBeFalsy()
    })

   
})
