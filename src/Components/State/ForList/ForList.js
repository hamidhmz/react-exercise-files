import React, { useState } from "react";
import AsAttribute from "../../Props/AsAttribute/AsAttribute";

function ForList() {
  const [dynamicState] = useState({
    persons: [
      { name: "hamidreza", age: "27" },
      { name: "Eman gamal", age: "28" },
    ],
  });

  return (
    <div>
      <div>==for==</div>
      {dynamicState.persons.map((person) => {
        return <AsAttribute key={person.name} name={person.name} age={person.age} />;
      })}
    </div>
  );
}

export default ForList;
