import React from "react";
import Block from "./Block";

function timer(prop) {
  return (
    <section id="timer" className="countdown-timer">
      <h3 className="heading-tertiary">Next Event</h3>
      <div className="countdown-timer__box">
        <Block name="days" value={prop.value_days} color="red" />
        <Block name="hours" value={prop.value_hours} color="blue" />
        <Block name="minutes" value={prop.value_minutes} color="yellow" />
      </div>
    </section>
  );
}

export default timer;
