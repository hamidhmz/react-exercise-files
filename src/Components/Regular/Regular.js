import React from "react";

function Regular() {

  const elements = [
    <p key="1">a</p>,
    <p key="2">b</p>,
    <p key="3">c</p>,
    <p key="4">d</p>,
  ]
  return <div>---------I am a Regular! {elements}--------</div>;
}

export default Regular;
