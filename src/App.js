import React from "react";
import Regular from "./Components/Regular/Regular.js";
import "./App.css";
import DynamicContent from "./Components/DynamicContent/DynamicContent.js";
import AsAttribute from "./Components/Props/AsAttribute/AsAttribute.js";
import AsChildren from "./Components/Props/AsChildren/AsChildren.js";
import State from "./Components/State/State.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">Hi i am hamidreza nasrollahy</header>
      <Regular />
      <DynamicContent />
      <AsAttribute name="hamidreza" age="27" />
      <AsAttribute name="Emma" age="29" />
      <AsChildren> Something as child </AsChildren>
      <State />
    </div>
  );
  // return React.createElement('div',{className:"App"}, React.createElement('header',{className:"App-header"},"Hi i am hamidreza nasrollahy")) // equivalent
}

export default App;
