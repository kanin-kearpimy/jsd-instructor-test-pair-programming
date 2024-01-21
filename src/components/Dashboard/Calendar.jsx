import React, { useState, useEffect } from "react";
import MonthSelector from "./MonthSelector";

const Calendar = () => {
  const weekDay = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthNames = [
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
  ];

  const [currentDate, setCurrentDate] = useState(new Date());
  const [startPoint, setStartPoint] = useState(0);
  const [lastDay, setLastDay] = useState(0);
  const [OpenMonth, setOpenMonth] = useState(false);
  const [OpenDay, setOpenDay] = useState(true);

  const OnSelectedMonth = () => {
    setOpenDay(!OpenDay);
    setOpenMonth(!OpenMonth);
  };

  const onMonthClick = () => {};

  useEffect(() => {
    const timeDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    );
    const lastDay = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    ).getDate();
    const startPoint = timeDate.getDay();

    setLastDay(lastDay);
    setStartPoint(startPoint);
  }, [currentDate]);

  const handleDayClick = (dayNumber) => {
    const selectedDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      dayNumber
    );

    console.log(selectedDate.toLocaleDateString());
  };

  const generateCalendar = () => {
    let calendar = [];
    let col = startPoint;

    calendar.push(
      <tr key={-1}>
        {weekDay.map((day, index) => (
          <th key={index}>{day}</th>
        ))}
      </tr>
    );

    for (let i = 0; i < Math.ceil((lastDay + startPoint) / 7); i++) {
      calendar.push(
        <tr key={i}>
          {Array.from({ length: 7 }, (_, j) => {
            const dayNumber = i * 7 + j - startPoint + 1;
            return dayNumber > 0 && dayNumber <= lastDay ? (
              <td key={dayNumber} onClick={() => handleDayClick(dayNumber)}>
                {dayNumber}
              </td>
            ) : (
              <td key={dayNumber}></td>
            );
          })}
        </tr>
      );
    }

    return calendar;
  };

  const goToPreviousMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const goToNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  return (
    <div>
      <div>
        <button onClick={goToPreviousMonth}>Previous Month</button>
        <button onClick={OnSelectedMonth}>{`${
          monthNames[currentDate.getMonth()]
        } ${currentDate.getFullYear()}`}</button>
        <button onClick={goToNextMonth}>Next Month</button>
      </div>
      {OpenMonth && <MonthSelector onMonthClick={onMonthClick} />}
      {OpenDay && (
        <table>
          <tbody>{generateCalendar()}</tbody>
        </table>
      )}
    </div>
  );
};

export default Calendar;
