import React from "react";

function DynamicContent(props) {
  return (
    <div>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
}

export default DynamicContent;
