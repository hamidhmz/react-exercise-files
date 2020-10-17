import React from "react";
import Radium from "radium";

function ForList() {
  const style = {
    backgroundColor: "green",
    color: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer",
    ":hover":{
      backgroundColor:"lightgreen",
      color:"black"
    }
  };

  return (
    <div>
      <div style={style}>==Style==</div>
    </div>
  );
}

export default Radium(ForList);
