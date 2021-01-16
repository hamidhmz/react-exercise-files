import React, { useState } from "react";
import AsAttribute from "../Props/AsAttribute/AsAttribute";
import PassingMethod from "./PassingMethod/PassingMethod";
import TwoWayDataBinding from "./TwoWayDataBinding/TwoWayDataBinding";
import RenderingConditionally from "./RenderingConditionally/RenderingConditionally";
import ForList from "./ForList/ForList";
import "./State.css";
import UseEffect from "./UseEffect/UseEffect";

function State() {
  const [personState, setPersonState] = useState({
    // we can have multiple states
    visible: true,
    persons: [{ name: "Emma", age: 28 }],
  });

  function changeStateToEman() {
    setPersonState({ visible: true, persons: [{ name: "Eman", age: 29 }] });
  }

  function changeStateToHamid() {
    setPersonState({ visible: true, persons: [{ name: "Hamid", age: 27 }] });
  }

  function forTwoWayDataBinding(event) {
    setPersonState({
      visible: true,
      persons: [{ name: event.target.value, age: 27 }],
    });
  }

  function changeVisibilityStatus() {
    setPersonState({ ...personState, visible: !personState.visible });
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
      <button onClick={changeVisibilityStatus}>Change visibility</button>
      {personState.visible ? (
        <UseEffect name={personState.persons[0].name} />
      ) : null}
      <RenderingConditionally />
      <ForList />
    </div>
  );
}

export default State;
