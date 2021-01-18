import React from "react";

function ReactMemo(props) {
  console.log("----->React memo rendering...");
  return (
    <div>
      <span role="img" aria-label="mindblower">
        -------------ReactMemo🤯-------------
      </span>

      <span role="img" aria-label="mindblower">
        -------------ReactMemo🤯-------------
      </span>
    </div>
  );
}

export default React.memo(ReactMemo); // shouldn't put here when all the time component will render
