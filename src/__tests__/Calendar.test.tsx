import React from 'react'
import {render,screen} from '../test-utils';
import Calendar from "../components/Calendar";

describe("<GoogleCalendar/>",()=>{

    test('it should render the calender component', () => {
        render(<Calendar Month={9} Year={2022}/>);        
        expect(screen.getByRole("calender")).toBeInTheDocument();
    });
    
    test('it should render the dates correctly', () => {
        render(<Calendar  Month={9} Year={2022}/>);   
        let cells=screen.getAllByTestId("cell");  
        expect(cells[0]).toHaveTextContent('28');
        expect(cells[cells.length-1]).toHaveTextContent('8');
    });

    test('it should render the day correctly', () => {
        render(<Calendar  Month={9} Year={2022}/>);   
        let cells=screen.getAllByTestId("day");  
        expect(cells[0]).toHaveTextContent('Sun');
        expect(cells[1]).toHaveTextContent('Mon');
        expect(cells).toHaveLength(7);
    });
})