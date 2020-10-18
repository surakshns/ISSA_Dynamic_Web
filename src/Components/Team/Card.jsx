import React from "react";

function card(props) {
  return (
    <div className="our-team">
      <div className="picture">
        <img
          className="img-fluid"
          src={require(`../../img/lead-pics/${props.name}.jpg`)}
        />
      </div>
      <div className="team-content">
        <h3 className="name">{props.name}</h3>
        <h4 className="title">{props.position}</h4>
      </div>
      <ul className="social">
        <li>
          <a href="#" className="fa fa-facebook" aria-hidden="true"></a>
        </li>
        <li>
          <a href="#" className="fa fa-twitter" aria-hidden="true"></a>
        </li>
        <li>
          <a href="#" className="fa fa-google-plus" aria-hidden="true"></a>
        </li>
        <li>
          <a href="#" className="fa fa-linkedin" aria-hidden="true"></a>
        </li>
      </ul>
    </div>
  );
}

export default card;
