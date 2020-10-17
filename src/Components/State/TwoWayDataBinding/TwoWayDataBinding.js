import React from "react";

function TwoWayDataBinding(props) {
  return (
    <div>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
}

export default TwoWayDataBinding;
