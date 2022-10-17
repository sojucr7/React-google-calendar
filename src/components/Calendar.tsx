import styled from "styled-components";
import React, { useEffect, useState, WheelEvent } from "react";

let today = new Date();
var todaysDate = `${String(today.getDate())}-${String(
  today.getMonth() + 1
)}-${today.getFullYear()}`;

const CalendarStyle = styled.div`
--width:100%;
--height:500px;
width:var(--width);
height: var(--height);
display: flex;
flex-grow:1
align-content: flex-start;
flex-wrap: wrap;
border-top: 1px solid #dadce0;
border-left: 1px solid #dadce0;
box-sizing: border-box;  
position:relative;
@media (max-width: 768px) {
    flex-basis: 100%;
}
`;
const Cell = styled.div<{ active: boolean }>`
  box-sizing: border-box;
  width: calc(100% / 7);
  height: calc(100% / 5);
  border-right: 1px solid #dadce0;
  border-bottom: 1px solid #dadce0;
  text-align: center;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  background: ${(props) => props.active && "#ababffc7"};
`;
const DateSpan = styled.span<{ sameMonth: boolean }>`
  font-weight: 600;
  color: ${(props) => !props.sameMonth && "#D3D3D3"};
`;
function GoogleCalendar({
  monthInput,
  yearInput,
  setMonth,
  setYear,
  onSelected,
}: {
  monthInput: number;
  yearInput: number;
  setMonth?: (value: number) => void;
  setYear?: (value: number) => void;
  onSelected?: (value: string) => void;
}) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const [dates, setDates] = useState<string[]>([]);
  const [selectedMonth, setSelectedMonth] = useState<number>(monthInput);
  const [selectedYear, setSelectedYear] = useState<number>(yearInput);

  const getDaysArray = function(year: number, month: number): string[] {
    var monthIndex = month - 1;
    var date = new Date(year, monthIndex, 1);
    var result = [];
    while (date.getMonth() == monthIndex) {
      result.push(
        `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
      );
      date.setDate(date.getDate() + 1);
    }
    return result;
  };

  const lastNDatesOfPrevMonth = function(
    year: number,
    month: number,
    numberOfDates: number
  ): string[] {
    var monthIndex = month - 1;
    var date = new Date(year, monthIndex, 1);
    var result = [];
    while (result.length < numberOfDates) {
      date.setDate(date.getDate() - 1);
      result.push(
        `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
      );
    }
    return result.reverse();
  };

  const firstNDatesOfNextMonth = function(
    year: number,
    month: number,
    numberOfDates: number
  ): string[] {
    var monthIndex = month + 1;
    var date = new Date(year, monthIndex, 1);
    var result = [];
    while (result.length < numberOfDates) {
      result.push(
        `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
      );
      date.setDate(date.getDate() + 1);
    }
    return result;
  };

  const getFirstDay = (year: number, month: number): string => {
    var monthIndex = month - 1;
    let date = new Date(year, monthIndex, 1);
    return days[date.getDay()];
  };

  function dateSplit(date: string): [number, number, number] {
    const [day, month, year] = date.split("-").map(Number);
    return [day, month, year];
  }
  const goBack = () => {
    var d = new Date(selectedYear, selectedMonth - 1, 1);
    d.setMonth(d.getMonth() - 1);
    setSelectedMonth(d.getMonth() + 1);
    setSelectedYear(d.getFullYear());
    if (typeof setMonth == "function") {
      setMonth(d.getMonth() + 1);
    }
    if (typeof setYear == "function") {
      setYear(d.getFullYear());
    }
  };
  const goNext = () => {
    var d = new Date(selectedYear, selectedMonth - 1, 1);
    d.setMonth(d.getMonth() + 1);
    setSelectedMonth(d.getMonth() + 1);
    setSelectedYear(d.getFullYear());
    if (typeof setMonth == "function") {
      setMonth(d.getMonth() + 1);
    }
    if (typeof setYear == "function") {
      setYear(d.getFullYear());
    }
  };

  useEffect(() => {
    setSelectedYear(yearInput);
    setSelectedMonth(monthInput);
  }, [monthInput, yearInput]);

  useEffect(() => {
    let firstDay = getFirstDay(selectedYear, selectedMonth);

    let index = days.findIndex((day) => {
      return firstDay == day;
    });

    let daysOfMonth = getDaysArray(selectedYear, selectedMonth);

    const dates = [
      ...lastNDatesOfPrevMonth(selectedYear, selectedMonth, index),
      ...daysOfMonth,
      ...firstNDatesOfNextMonth(
        selectedYear,
        selectedMonth,
        42 - daysOfMonth.length - index
      ),
    ];

    setDates(dates);

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [selectedMonth, selectedYear]);

  const handleKey = (e: KeyboardEvent) => {
    if (e.key == "ArrowRight") {
      goNext();
    }

    if (e.key == "ArrowLeft") {
      goBack();
    }
  };

  const wheel = (e: WheelEvent) => {
    if (e.deltaY < 0) {
      goNext();
    } else if (e.deltaY > 0) {
      goBack();
    }
  };
  return (
    <>
      <CalendarStyle role="calendar" onWheel={wheel}>
        {dates.map((date, index) => {
          const [day, localMonth] = dateSplit(date);
          return (
            <Cell active={date == todaysDate} key={index} data-testid="cell" onClick={()=>typeof onSelected == "function" && onSelected(date)}>
              {index < 7 && (
                <span className="day" data-testid="day">
                  {days[index].substring(0, 3)}
                </span>
              )}
              <DateSpan
                sameMonth={selectedMonth == localMonth}
                data-testid="date"
              >
                {day}
              </DateSpan>
            </Cell>
          );
        })}
      </CalendarStyle>

      <span className="prev" onClick={goBack} data-testid="backward">
        &lt;
      </span>
      <span className="next" onClick={goNext} data-testid="forward">
        &gt;
      </span>
    </>
  );
}

export default React.memo(GoogleCalendar);
