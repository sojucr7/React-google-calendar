import React from 'react'
import {render,screen,fireEvent} from '../test-utils';
import CalendarHeader from "../components/CalendarHeader";
import ReactTestUtils from 'react-dom/test-utils'; 
describe("<Calendar Header/>",()=>{

    test('it should call setMonth fn on MONTH DROPDOWN change', async () => {
        const setMonth = jest.fn();
        const setYear = jest.fn();
        render(<CalendarHeader  month={10} year={2022} setMonth={setMonth}
            setYear={setYear}/>);
        fireEvent.change(screen.getByTestId("calendar-month"), {
            target: { value: 11 }
        })
        expect(setMonth).toHaveBeenCalledWith(11);
        expect(setMonth).toHaveBeenCalled();    
    });

    test('it should call setYear fn on YEAR DROPDOWN change', async () => {
        const setMonth = jest.fn();
        const setYear = jest.fn();
        render(<CalendarHeader  month={10} year={2022} setMonth={setMonth}
            setYear={setYear}/>);
        fireEvent.change(screen.getByTestId("calendar-year"), {
            target: { value: 2023 }
        })
        expect(setYear).toHaveBeenCalledWith(2023);
        expect(setYear).toHaveBeenCalled();    
    });

    test('it should render Logo image', async () => {
        const setMonth = jest.fn();
        const setYear = jest.fn();
        render(<CalendarHeader  month={10} year={2022} setMonth={setMonth}
            setYear={setYear}/>);
        const testImage =screen.getByTestId("logo")
        expect(testImage).toHaveAttribute('src', '/download.png');
    });
    //logo
})