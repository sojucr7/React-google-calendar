import React from 'react'
import {render,screen,fireEvent} from '../test-utils';
import App from "../App";
import Calendar from "../components/Calendar";
import ReactTestUtils from 'react-dom/test-utils'; 

describe("<Calendar/>",()=>{

    test('it should render the calendar component', () => {
        render(<Calendar monthInput={9} yearInput={2022} />);        
        expect(screen.getByRole("calendar")).toBeInTheDocument();
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
        let cell=screen.getByTestId('today');  
        expect(cell).toHaveTextContent('Today'); 
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
        ReactTestUtils.Simulate.wheel(screen.getByRole("calendar"), { deltaY: -500 });
        await new Promise((r) => setTimeout(r, 500));
        let cells2=screen.getAllByTestId("date");  
        expect(cells2[0]).toHaveTextContent('30');
        expect(cells2[cells2.length-1]).toHaveTextContent('10');
    });


    test('it should Highlight active dates', () => {
        render(<Calendar  monthInput={10} yearInput={2022} activeDates={[
            '4-10-2022',
            '19-10-2022',
            '20-10-2022',
            '21-10-2022'
          ]}/>);
          
        let cell1=screen.getByText('19').closest("div");
        let cell2=screen.getAllByText('4');  
        let cell3=screen.getByText('20').closest("div"); 
        let cell4=screen.getByText('21').closest("div"); 
        expect(cell1).toHaveStyle('background: #84c0de'); 
        expect(cell2[0].closest("div")).toHaveStyle('background: #84c0de'); 
        expect(cell2[1].closest("div")).not.toHaveStyle('background: #84c0de'); 
        expect(cell3).toHaveStyle('background: #84c0de'); 
        expect(cell4).toHaveStyle('background: #84c0de'); 
    });

    test('it should Highlight Hover date', () => {
        render(<Calendar  monthInput={10} yearInput={2022}/>);          
        fireEvent.mouseOver(screen.getByText('19'))
        let cell1=screen.getByText('19').closest("div");
        expect(cell1).toHaveStyle('background: #1515efc7');  
    });
})