import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled, { ThemeProvider } from 'styled-components'
import Calendar from './components/Calendar';
import CalendarHeader from './components/CalendarHeader';
import CalendarSidebar from './components/CalendarSidebar';
function App() {
  const Content=styled.div`
  display: flex;
  height: 90%;
`

  const App=styled.div`
    height: 100vh;  
    font-family: ${props => props.theme.fontFamily};
  `
  const theme = {
    fontFamily: "Arial, Helvetica, sans-serif"
  };
  
  return (
    <ThemeProvider theme={theme}>
    <App>
        <CalendarHeader/>
        <Content>
            <CalendarSidebar/>
            <Calendar/>
        </Content> 
    </App>
    </ThemeProvider>
  );
}
export default App;
