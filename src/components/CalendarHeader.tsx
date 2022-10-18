import React, { useMemo, useState, useEffect } from "react";
import styled from "styled-components";

const CalendarHeaderStyle = styled.div`
  justify-content: center;
  margin: 20px;
  height: 10%;
`;
const CalendarLogo = styled.div`
  gap: 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

function range(start: number, end: number) {
  let ranges = [];
  for (var i = start; i <= end; i += 1) {
    ranges.push(i);
  }
  return ranges;
}

let today = new Date();
var currentMonth = today.getMonth() + 1;
var currentYear = today.getFullYear();
function CalendarHeader({
  setMonth,
  setYear,
  year,
  month,
}: {
  setMonth: (value: number) => void;
  setYear: (value: number) => void;
  year: number;
  month: number;
}) {
  const years = useMemo(() => range(1900, 3000), []);

  let months = useMemo(
    () => [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    []
  );

  let yearList = useMemo(
    () =>
      years.map((localYear, index) => {
        return (
          <option
            key={`year-${index}`}
            value={localYear}
          >
            {localYear}
          </option>
        );
      }),
    [year]
  );

  let monthList = useMemo(
    () =>
      months.map((localMonth, index) => {
        return (
          <option
            key={`month-${index}`}
            value={index + 1}
          >
            {localMonth}
          </option>
        );
      }),
    [month]
  );

  return (
    <CalendarHeaderStyle>
      <CalendarLogo className="logo">
        <img src="/download.png" width="50" data-testid="logo"/>
        <h3>Google Calendar</h3>
        <select
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setMonth(Number(e.currentTarget.value))
          }
          value={month}
          data-testid="calendar-month"
        >
          {monthList}
        </select>
        <select
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setYear(Number(e.currentTarget.value))
          }
          data-testid="calendar-year"
          value={year}
        >
          {yearList}
        </select>
      </CalendarLogo>
    </CalendarHeaderStyle>
  );
}
export default CalendarHeader;
