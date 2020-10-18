import React, { Component } from "react";

class Navigation extends Component {
  state = {
    values: [
      { id: "01", value: "Home", link: "#home" },
      { id: "02", value: "Know more about issa", link: "#about" },
      { id: "03", value: "Next event countdown", link: "#timer" },
      { id: "04", value: "Meet our team", link: "#team" },
    ],
    check: false,
  };

  checkboxHandler = (event) => {
    this.setState({ check: event.target.checked });
  };

  uncheckHandler = () => {
    this.setState({ check: false });
  };

  render() {
    return (
      <div className="navigation">
        <input
          type="checkbox"
          checked={this.state.check}
          onChange={this.checkboxHandler}
          className="navigation__checkbox"
          id="navi-toggle"
        />
        <label htmlFor="navi-toggle" className="navigation__button">
          <span className="navigation__icon">&nbsp;</span>
        </label>

        <div className="navigation__background">&nbsp;</div>

        <nav className="navigation__nav">
          <ul className="navigation__list">
            {this.state.values.map((item) => {
              return (
                <li key={item.id} className="navigation__item">
                  <a
                    onClick={this.uncheckHandler}
                    href={item.link}
                    className="navigation__link"
                  >
                    <span>{item.id}</span>
                    {item.value}
                  </a>
                </li>
              );
            })}
            {/* <li className="navigation__item">
            <a href="#" className="navigation__link">
              <span>01</span>Home
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              <span>02</span>Know more about issa
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              <span>03</span>Next event countdown
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              <span>04</span>Meet our team
            </a>
          </li> */}
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navigation;
