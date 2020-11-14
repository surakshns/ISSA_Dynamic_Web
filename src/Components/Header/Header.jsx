import React from "react";
import logo from "./issa-logo.png";

function header(props) {
  return (
    <header id="home" className="header">
      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">ISSA</span>
          <span className="heading-primary--sub">
            Information System Security Association
          </span>
        </h1>
        <a href="#" className="btn btn--white btn--animated">
          Register For The Event
        </a>
      </div>
    </header>
  );
}

export default header;
