import React from "react";


function AsChildren(props) {
  return (
    <div>
      <p>I am a AsChildren!</p>
      <p>{ props.children }</p>
    </div>
  );
}

export default AsChildren;
