import React from "react";

function DynamicContent(props) {
  return (
    <div>
      <button onClick={props.changeStateToHamid}>change to Hamid</button>
    </div>
  );
}

export default DynamicContent;
