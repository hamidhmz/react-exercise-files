import React, { useState } from "react";
import AsAttribute from "../../Props/AsAttribute/AsAttribute";

function RenderingConditionally() {
  const [dynamicState, setDynamicState] = useState(false);

  function changeState() {
    setDynamicState(!dynamicState);
  }

  return (
    <div className="State">
      <button onClick={changeState}>==Render==</button>
      {dynamicState ? <AsAttribute name="hamidreza" age="27" /> : null}
    </div>
  );
}

export default RenderingConditionally;
