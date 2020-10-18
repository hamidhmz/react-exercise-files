import React from "react";
import AsAttribute from "../Props/AsAttribute/AsAttribute";
import HigherOrderComponents from "./HigherOrderComponents"

const Hidable = HigherOrderComponents(AsAttribute)

function ExampleForHigherOrderComponents() {
  

  return (
    <div>
      <p>+++++++++++++++++++++++++++++++++</p>
      <Hidable isHidden={true} name="hamid" age="27"/>
      <Hidable isHidden={false} name="Eman" age="29"/>
    </div>
  );
}

export default ExampleForHigherOrderComponents;
