import React, { useState, useEffect } from "react";

function RefElement() {
  let myElement;
  let myElement1 = React.createRef();

  const [elementState, setElementState] = useState(myElement);

  function setElement(element) {
    setElementState(element.value);
  }
  useEffect(() => {
    console.log("element from createRef--->", myElement1.current);
  });

  return (
    <div>
      <input
        ref={(element) => {
          console.log("element from ref---->", element);
          myElement = element;
        }}
        type="text"
      ></input>
      <input ref={myElement1} type="text"></input>
      <button
        onClick={() => {
          setElement(myElement);
        }}
      >
        ok
      </button>
      <p>---------I am a RefElement! {JSON.stringify(elementState)}--------</p>
    </div>
  );
}

export default RefElement;
