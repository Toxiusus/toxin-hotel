import "./Landing.scss";
import React, { useState } from "react";
import DatePicker, { CalendarContainer } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import { ru } from "date-fns/locale/ru";
registerLocale("ru", ru);

const Landing = () => {
  const [startDate, setStartDate] = useState(new Date("2024/06/08"));
  const [endDate, setEndDate] = useState(new Date("2024/06/10"));

  return (
    <div className="landing">
      <div className="landing__container container">
        <div className="datepicker">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            locale="ru"
          />
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            locale="ru"
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
