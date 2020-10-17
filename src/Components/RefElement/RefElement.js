import React,{ useState } from "react";

function RefElement() {
  let myElement;

  const [elementState, setElementState] = useState(myElement);

  function setElement(element){
    setElementState(element.value)
  }

  return (
    <div>
      <input
        ref={(element) => {
          console.log(element)
          myElement = element
        }}
        type="text"
      ></input>
      <button onClick={()=>{ setElement(myElement) }}>ok</button>
      <p>---------I am a RefElement! {JSON.stringify(elementState)}--------</p>
    </div>
  );
}

export default RefElement;
