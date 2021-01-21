import React, { useEffect, useContext } from "react";
import Context from "./Context";

function ContextComponentExample(props) {
  const myContext = useContext(Context);
  console.log(
    "🚀 ~ file: ContextComponentExample.js ~ line 6 ~ ContextComponentExample ~ myContext",
    myContext
  );
  useEffect(() => {
    console.log(`this is useEffect`);
    // HTTP request...
    setTimeout(() => {
      alert("save data to cloud!");
    }, 1000);
    // },[props.name])// every time name changed
  }, []); // this would cause that this function just once render
  // useEffect(()=>{// we can have use effect what ever we want
  //   console.log(`this is useEffect`);
  //   // HTTP request...
  //   setTimeout(() => {
  //     alert('save data to cloud!')
  //   }, 1000);
  // })

  return (
    <Context.Consumer>
      {(context) => (
        <div>
          <p>-------------ContextComponentExample-------------</p>
          <input
            type="text"
            onChange={context.login}
            value={context.authentication.persons[0].name}
          />
          <p>-------------ContextComponentExample-------------</p>
        </div>
      )}
    </Context.Consumer>
  );
}

export default ContextComponentExample;
