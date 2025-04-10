import { describe, it, vi, expect, afterEach, beforeEach } from "vitest";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import InstructionsPage from "../InstructionsPage";
import { BrowserRouter } from "react-router-dom";


describe('Hi', () => {

    it('Should render the component', () => {
        render(
            <BrowserRouter>
                <InstructionsPage />
            </BrowserRouter>
        )

        const mainTitle = screen.getByTestId("pageTitle")
   
        expect(mainTitle).toBeInTheDocument()
    })


    it('Should render the component', async () => {
        
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

    it('Should render the component', async () => {
        
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

    it('Should render the component', async () => {
        
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

    it('Should render the component', async () => {
        
        const user = userEvent.setup()
        
        render(
            <BrowserRouter>
                <InstructionsPage />
            </BrowserRouter>
        )

        const cookingOptionSelect = screen.getByTestId("cookingOptionSelect")
        let options = screen.getAllByTestId('select-option')

        await user.selectOptions(cookingOptionSelect,  "1")
        await user.selectOptions(cookingOptionSelect,  "0")
        await user.selectOptions(cookingOptionSelect,  "1")

        expect(options[1].selected).toBeTruthy()
        expect(options[0].selected).toBeFalsy()
    })

    it('Should render the component', async () => {
        
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
        await user.selectOptions(cookingOptionSelect,  "1")
        await user.selectOptions(cookingOptionSelect,  "0")
         
        expect(options[0].selected).toBeTruthy()
        expect(options[1].selected).toBeFalsy()  
    })
    

})
