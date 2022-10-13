import "./App.css";
import logo from "./logo.svg";
import React, { useState } from "react";
import Calendar from "./components/Calendar";
import CalendarHeader from "./components/CalendarHeader";
import styled, { ThemeProvider } from "styled-components";
import CalendarSidebar from "./components/CalendarSidebar";

const Content = styled.div`
  display: flex;
  height: 90%;
`;

const AppStyle = styled.div`
  height: 100vh;
  font-family: ${(props) => props.theme.fontFamily};
`;
export const theme = {
  fontFamily: "Arial, Helvetica, sans-serif",
};

let today = new Date();
var todaysDay = today.getDate()
var todaysMonth = today.getMonth()+1
var todaysYear = today.getFullYear()

function App() {
  const [month, setMonth] = useState<number>(todaysMonth);
  const [year, setYear] = useState<number>(todaysYear);

  const goBack = () => {
    var d = new Date(year, month - 1, 1);
    d.setMonth(d.getMonth() - 1);
    setMonth(d.getMonth() + 1)
    setYear(d.getFullYear())
  };
  const goNext = () => {
    var d = new Date(year, month - 1, 1);
    d.setMonth(d.getMonth() + 1);
    setMonth(d.getMonth() + 1)
    setYear(d.getFullYear())
  };
  return (
    <ThemeProvider theme={theme}>
      <AppStyle>
        <CalendarHeader
          prevHandler={goBack}
          nextHandler={goNext}
        />
        <Content>
          <Calendar Month={month} Year={year} />
        </Content>
      </AppStyle>
    </ThemeProvider>
  );
}
export default App;
