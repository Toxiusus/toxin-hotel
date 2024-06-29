import DatePicker from "../../elements/DatePicker/DatePicker";
import "./Landing.scss";
import React, { useState } from "react";

const Landing = () => {

  return (
    <div className="landing">
      <div className="landing__container container">
        <div className="datepicker">
          <DatePicker/>
        </div>
      </div>
    </div>
  );
};

export default Landing;
