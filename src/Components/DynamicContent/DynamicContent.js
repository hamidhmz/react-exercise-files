import React from "react";


function DynamicContent() {
  return (
    <div>
      <p>I am a DynamicContent!</p>
      <p>{ Math.random() }</p>
    </div>
  );
}

export default DynamicContent;
