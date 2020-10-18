import React from "react";

function block(props) {
  return (
    <div className={props.name + " count"}>
      <h4>{props.value}</h4>
      <div className={"countdown__header " + props.color}>{props.name}</div>
    </div>
  );
}

export default block;
