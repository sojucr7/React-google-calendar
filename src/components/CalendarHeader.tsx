import React from 'react';
import styled from 'styled-components'

const CalendarHeaderStyle=styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
height: 10%;
gap:1rem;
border-bottom: 1px solid #dadce0;
box-sizing:border-box;
`;
function CalendarHeader({date,prevHandler,nextHandler}:{
    date:string,
    prevHandler:()=>void,
    nextHandler:()=>void
}){

    return (
        <CalendarHeaderStyle>
             <div className='logo'>Calendar</div>
             <div className='navigation-container'>
                <span className="prev" onClick={prevHandler}>&lt;</span>
                <span className="next" onClick={nextHandler}>&gt;</span>
             </div>
        </CalendarHeaderStyle>
    )

}
export default CalendarHeader;