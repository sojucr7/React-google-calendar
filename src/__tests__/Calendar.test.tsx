import React from 'react'
import {render,screen,fireEvent} from '../test-utils';
import Calendar from "../components/Calendar";
import ReactTestUtils from 'react-dom/test-utils'; 
describe("<GoogleCalendar/>",()=>{

    test('it should render the calender component', () => {
        render(<Calendar monthInput={9} yearInput={2022} />);        
        expect(screen.getByRole("calender")).toBeInTheDocument();
    });
    
    test('it should render the dates correctly', () => {
        render(<Calendar  monthInput={9} yearInput={2022}/>);   
        let cells=screen.getAllByTestId("date");  
        expect(cells[0]).toHaveTextContent('28');
        expect(cells[cells.length-1]).toHaveTextContent('8');
    });

    test('it should render the day correctly', () => {
        render(<Calendar  monthInput={9} yearInput={2022}/>);   
        let cells=screen.getAllByTestId("day");  
        expect(cells[0]).toHaveTextContent('Sun');
        expect(cells[1]).toHaveTextContent('Mon');
        expect(cells).toHaveLength(7);
    });

    test('it should highlight todays date', () => {
        let today = new Date();
        var currentMonth = today.getMonth() + 1;
        var currentYear = today.getFullYear();
        render(<Calendar  monthInput={currentMonth} yearInput={currentYear}/>);   
        let cell=screen.getByText(today.getDate());  
        expect(cell).toHaveStyle(`background: #ababffc7`); 
    });

    test('it should navigate Month Correctly on BUTTON CLICKS', async () => {
        render(<Calendar  monthInput={10} yearInput={2022}/>);
        fireEvent.click(screen.getByTestId("forward"))
        fireEvent.click(screen.getByTestId("forward"))
        let cells=screen.getAllByTestId("date");  
        expect(cells[0]).toHaveTextContent('27');
        expect(cells[cells.length-1]).toHaveTextContent('7');
        fireEvent.click(screen.getByTestId("backward"))
        let cells2=screen.getAllByTestId("date");  
        expect(cells2[0]).toHaveTextContent('30');
        expect(cells2[cells2.length-1]).toHaveTextContent('10');
    });

    test('it should navigate Month Correctly on MOUSE WHEELS', async () => {
        render(<Calendar  monthInput={10} yearInput={2022}/>);
        ReactTestUtils.Simulate.wheel(screen.getByRole("calender"), { deltaY: -500 });
        await new Promise((r) => setTimeout(r, 500));
        let cells2=screen.getAllByTestId("date");  
        expect(cells2[0]).toHaveTextContent('30');
        expect(cells2[cells2.length-1]).toHaveTextContent('10');
    });
})