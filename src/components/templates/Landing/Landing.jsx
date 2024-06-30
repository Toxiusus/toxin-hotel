import Calendar from "../../elements/Calendar/Calendar";
import "./Landing.scss";
import React, { useState } from "react";

const Landing = () => {

  return (
    <div className="landing">
      <div className="landing__container container">
        <Calendar/>
      </div>
    </div>
  );
};

export default Landing;
