import React, { useState, useEffect } from "react";

function RefElement() {
  let myElement;
  let myElement1 = React.useRef(null);
  let myElement2 = React.createRef();

  const [elementState, setElementState] = useState(myElement);

  function setElement(element) {
    setElementState(element.value);
  }
  function logInConsoleElement(element,refKind) {
    console.log(`element from ${refKind}--->`, element.current);
  }
  useEffect(() => {
    console.log("element from Ref--->", myElement);
    console.log("element from useRef--->", myElement1.current);
    console.log("element from createRef--->", myElement2.current);
  });

  return (
    <div>
      <input
        ref={(element) => {
          console.log("element from ref---->", element);
          myElement = element;
        }}
        type="text"
        name="ref"
        value="Ref check console"
      ></input>
      <button
        onClick={() => {
          setElement(myElement);
        }}
      >
        Ref check console
      </button>
      <br />
      <input ref={myElement1} type="text" name="useref" value="Ref useRef check console"></input>
      <button
        onClick={() => {
          logInConsoleElement(myElement1,'useRef');
        }}
      >
        Ref useRef check console
      </button>
      <br />
      <input ref={myElement2} type="text" name="createRef" value="Ref createRef check console"></input>
      <button
        onClick={() => {
          logInConsoleElement(myElement2,'createRef');
        }}
      >
        Ref createRef check console
      </button>
      
      <p>---------I am a RefElement! {JSON.stringify(elementState)}--------</p>
    </div>
  );
}

export default RefElement;
