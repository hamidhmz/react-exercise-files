import React, { useState } from "react";
import AsAttribute from "../Props/AsAttribute/AsAttribute";
import PassingMethod from "./PassingMethod/PassingMethod";
import TwoWayDataBinding from "./TwoWayDataBinding/TwoWayDataBinding";
import RenderingConditionally from "./RenderingConditionally/RenderingConditionally";
import ForList from "./ForList/ForList";
import "./State.css"

function State() {
  const [personState, setPersonState] = useState({
    // we can have multiple states
    persons: [{ name: "Emma", age: 28 }],
  });

  function changeStateToEman() {
    setPersonState({ persons: [{ name: "Eman", age: 29 }] });
  }

  function changeStateToHamid() {
    setPersonState({ persons: [{ name: "Hamid", age: 27 }] });
  }

  function forTwoWayDataBinding(event) {
    setPersonState({ persons: [{ name: event.target.value, age: 27 }] });
  }

  return (
    <div className="State">
      <button onClick={changeStateToEman}>change to eman</button>
      <AsAttribute
        name={personState.persons[0].name}
        age={personState.persons[0].age}
        
      />
      <PassingMethod changeStateToHamid={changeStateToHamid} />
      <TwoWayDataBinding changed={forTwoWayDataBinding} />
      <RenderingConditionally />
      <ForList />
    </div>
  );
}

export default State;
