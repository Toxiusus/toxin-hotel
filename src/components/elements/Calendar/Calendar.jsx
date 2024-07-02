import React from "react";
import "./Calendar.scss";

const Calendar = () => {
  const days = [
    28, 29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
    19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];

  const currentDate = document.querySelector("current-date");
  //getting new date,current year and month
  let date = new Date();

  let currYear = date.getFullYear();

  let currMonth = date.getMonth();

  const renderCalendar = () => {
    currentDate.innerHTML = `${currMonth} ${currYear}`;
  };

  return (
    <div className="wrapper">
      <header>
        <p className="current-date">{currentDate}</p>
        <div className="icons">
          <span className="material-symbols-rounded">left</span>
          <span className="material-symbols-rounded">right</span>
        </div>
      </header>
      <div className="calendar">
        <ul className="weeks list-reset">
          <li>Пн</li>
          <li>Вт</li>
          <li>Ср</li>
          <li>Чт</li>
          <li>Пт</li>
          <li>Сб</li>
          <li>Вс</li>
        </ul>
        <ul className="days list-reset">
          {days.map((days, i) => (
            <li className="inactive active" key={i}>
              {days}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Calendar;
