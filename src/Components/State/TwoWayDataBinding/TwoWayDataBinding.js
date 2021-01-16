import React, {useEffect} from "react";

function TwoWayDataBinding(props) {
  useEffect(()=>{
    console.log(`this is useEffect`);
    // HTTP request...
    setTimeout(() => {
      alert('save data to cloud!')
    }, 1000);
  // },[props.name])// every time name changed
  },[]) // this would cause that this function just once render 
  // useEffect(()=>{// we can have use effect what ever we want
  //   console.log(`this is useEffect`);
  //   // HTTP request...
  //   setTimeout(() => {
  //     alert('save data to cloud!')
  //   }, 1000);
  // })


  return (
    <div>
      <p>-------------two way data binding-------------</p>
      <input type="text" onChange={props.changed} value={props.name} />
      <p>-------------two way data binding-------------</p>
    </div>
  );
}

export default TwoWayDataBinding;
