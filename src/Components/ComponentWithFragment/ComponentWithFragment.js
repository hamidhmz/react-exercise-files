import React from "react";

//when you don't wanna wrap your jsx code with some tag you can use fragment
function ComponentWithFragment(props) {
  console.log("----->React memo rendering...");
  return (
    <React.Fragment>
      <div>
        <span role="img" aria-label="mindblower">
          -------------ComponentWithFragment🎯-------------
        </span>
      </div>
      <div>
        <span role="img" aria-label="mindblower">
          -------------ComponentWithFragment🎯-------------
        </span>
      </div>
    </React.Fragment>
  );
}

export default ComponentWithFragment;
