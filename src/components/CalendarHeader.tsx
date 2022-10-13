import React from 'react';
import styled from 'styled-components'

const CalendarHeaderStyle=styled.div`
justify-content:center;
margin:20px;
height:10%;
`;
const CalendarLogo=styled.div`
gap:2rem;
display: flex;
justify-content: flex-start;
align-items: center;
`;
function CalendarHeader(){

    return (
        <CalendarHeaderStyle>
             <CalendarLogo className='logo'>
             <img src="/download.png" width="50"/>
             <h3>Google Calendar</h3>
             </CalendarLogo>
        </CalendarHeaderStyle>
    )

}
export default CalendarHeader;