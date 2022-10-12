import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import Calendar from "./components/Calendar";
import CalendarHeader from "./components/CalendarHeader";
import CalendarSidebar from "./components/CalendarSidebar";

const Content = styled.div`
  display: flex;
  height: 90%;
`;

const AppStyle = styled.div`
  height: 100vh;
  font-family: ${(props) => props.theme.fontFamily};
`;
const theme = {
  fontFamily: "Arial, Helvetica, sans-serif",
};
function App() {
  const [currentDate, setCurrentDate] = useState<string>("01-10-2022");

  const goBack = () => {
    setCurrentDate((date) => {
      const [Day, Month, Year] = date.split("-").map(Number);
      var d = new Date(Year, Month - 1, Day);
      d.setMonth(d.getMonth() - 1);
      let month =
        d.getMonth() + 1 < 10 ? `0${d.getMonth() + 1}` : d.getMonth() + 1;
      return `${d.getDate()}-${month}-${d.getFullYear()}`;
    });
  };
  const goNext = () => {
    setCurrentDate((date) => {
      const [Day, Month, Year] = date.split("-").map(Number);
      var d = new Date(Year, Month - 1, Day);
      d.setMonth(d.getMonth() + 1);
      let month =
        d.getMonth() + 1 < 10 ? `0${d.getMonth() + 1}` : d.getMonth() + 1;
      return `${d.getDate()}-${month}-${d.getFullYear()}`;
    });
  };
  return (
    <ThemeProvider theme={theme}>
      <AppStyle>
        <CalendarHeader
          date={currentDate}
          prevHandler={goBack}
          nextHandler={goNext}
        />
        <Content>
          <Calendar date={currentDate} />
        </Content>
      </AppStyle>
    </ThemeProvider>
  );
}
export default App;
