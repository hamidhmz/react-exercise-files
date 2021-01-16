import React, { useEffect } from "react";

function UseEffect(props) {
  useEffect(() => {
    console.log(`this is useEffect`);
    // HTTP request...
    const timer = setTimeout(() => {
      alert("save data to cloud!(an alert from useEffect function)");
    }, 1000);

    return () => {
      clearTimeout(timer); // this is clean up work for useEffect
      console.log(
        "this is inside useEffect component and this is clean up work "
      );
    };
  }, [props.name]); // every time name changed
  // },[]) // this would cause that this function just once render
  // useEffect(()=>{// we can have use effect what ever we want
  //   console.log(`this is useEffect`);
  //   // HTTP request...
  //   setTimeout(() => {
  //     alert('save data to cloud!')
  //   }, 1000);
  // })

  return (
    <div>
      <p>-------------use effect and lifecycle-------------</p>
      <input type="text" value={props.name} />
      <p>-------------use effect and lifecycle-------------</p>
    </div>
  );
}

export default UseEffect;
