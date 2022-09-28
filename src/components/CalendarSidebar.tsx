import React from 'react';
import styled from 'styled-components'
function CalendarSidebar(){

    const CalendarSidebar =styled.div`
        flex-basis: 20%;
        @media (max-width: 768px) {
            display:none;
        }
    `
    return (
        <CalendarSidebar></CalendarSidebar>
    )
}
export default CalendarSidebar;