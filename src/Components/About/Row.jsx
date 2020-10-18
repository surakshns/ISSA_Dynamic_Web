import React from "react";

function row(props) {
  return (
    <div className="about">
      <h3 className="heading-tertiary">{props.heading}</h3>
      <p>{props.para}</p>
    </div>
  );
}

export default row;
