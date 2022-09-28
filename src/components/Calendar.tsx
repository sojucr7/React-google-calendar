import React from 'react';
import styled from 'styled-components'
function GoogleCalender(){
    const Calender = styled.div`
        --width:70%;
        --height:80%;
        width:var(--width);
        height: var(--height);
        display: flex;
        align-content: flex-start;
        flex-wrap: wrap;
        border-top: 1px solid #dadce0;
        border-left: 1px solid #dadce0;
        box-sizing: border-box;  
        flex-basis: 80%;
        @media (max-width: 768px) {
            flex-basis: 100%;
        }
    `
    const Cell =styled.div`
        box-sizing: border-box;
        width:calc(100%/7);
        height: calc(100%/5);
        border-right: 1px solid #dadce0;
        border-bottom: 1px solid #dadce0;
        text-align: center;
        display: flex;
        flex-direction: column;
        
    `
    const DateSpan=styled.span`
        font-weight: 600;
    `
    return (
        <>     
        
        <Calender>            
            <Cell>
                <span className='day'>Sun</span>
                <DateSpan>28</DateSpan>
            </Cell>
            <Cell>
                <span className='day'>Mon</span>
                <DateSpan>28</DateSpan>
            </Cell>
            <Cell>
                <span className='day'>Tue</span>
                <DateSpan>28</DateSpan>
            </Cell>
            <Cell>
                <span className='day'>Wen</span>
                <DateSpan>28</DateSpan>
            </Cell>
            <Cell>
                <span className='day'>Thu</span>
                <DateSpan>28</DateSpan>
            </Cell>
            <Cell>
                <span className='day'>Fri</span>
                <DateSpan>28</DateSpan>
            </Cell>
            <Cell>
                <span className='day'>Sat</span>
                <DateSpan>28</DateSpan>
            </Cell>


            <Cell>
            <DateSpan>28</DateSpan>
            </Cell>
            <Cell>
            <DateSpan>28</DateSpan>
            </Cell>
            <Cell>
            <DateSpan>28</DateSpan>
            </Cell>
            <Cell>
            <DateSpan>28</DateSpan>
            </Cell>
            <Cell>
            <DateSpan>28</DateSpan>
            </Cell>
            <Cell>
            <DateSpan>28</DateSpan>
            </Cell>
            <Cell>
            <DateSpan>28</DateSpan>
            </Cell>


            <Cell>
            <DateSpan>28</DateSpan>
            </Cell>
            <Cell>
            <DateSpan>28</DateSpan>
            </Cell>
            <Cell>
            <DateSpan>28</DateSpan>
            </Cell>
            <Cell>
            <DateSpan>28</DateSpan>
            </Cell>
            <Cell>
            <DateSpan>28</DateSpan>
            </Cell>
            <Cell>
            <DateSpan>28</DateSpan>
            </Cell>
            <Cell>
            <DateSpan>28</DateSpan>
            </Cell>
        </Calender>
        </>
    )

}

export default GoogleCalender;