import "./App.css";
import logo from "./logo.svg";
import React, { useState } from "react";
import Calendar from "./components/Calendar";
import CalendarHeader from "./components/CalendarHeader";
import styled, { ThemeProvider } from "styled-components";

const Content = styled.div`
  height: 90%;
`;

const AppStyle = styled.div`
  font-family: ${(props) => props.theme.fontFamily};
  box-sizing:border-box;
`;
export const theme = {
  fontFamily: "Arial, Helvetica, sans-serif",
};

let today = new Date();
var todaysDay = today.getDate()
var todaysMonth = today.getMonth()+1
var todaysYear = today.getFullYear()

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppStyle>
        <CalendarHeader/>
        <Content>
          <Calendar monthInput={todaysMonth} yearInput={todaysYear}/>
        </Content>
      </AppStyle>
    </ThemeProvider>
  );
}
export default App;
