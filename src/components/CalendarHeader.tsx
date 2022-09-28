import React from 'react';
import styled from 'styled-components'
function CalendarHeader(){
    const CalendarHeader=styled.div`
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: 10%;
        gap:1rem;
        border-bottom: 1px solid #dadce0;
        box-sizing:border-box;
    `
    return (
        <CalendarHeader>
            <button>TODO</button>
             <div className='logo'>Calendar</div>
             <div className='navigation-container'>
                <span className="prev">&lt;</span>
                <span className="next">&gt;</span>
             </div>
        </CalendarHeader>
    )

}
export default CalendarHeader;