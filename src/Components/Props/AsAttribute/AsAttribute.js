import React from "react";

function AsAttribute(props) {
  return (
    <div>
      <p>
        Ich bin {props.name} und ich bin {props.age} jahre alt!
      </p>
    </div>
  );
}

export default AsAttribute;
