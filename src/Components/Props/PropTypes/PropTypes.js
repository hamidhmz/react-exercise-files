import React from "react";
import PropTypes from "prop-types";

function PropTypesComponent(props) {
  return (
    <div>
      <p>this should be number {props.mustNumber}</p>
      <p>this should be function {props.mustFunction()}</p>
      <p>this should be string {props.mustString}</p>
    </div>
  );
}

PropTypesComponent.propTypes = {
  mustNumber: PropTypes.number,
  mustFunction: PropTypes.func,
  mustString: PropTypes.string,
};

export default PropTypesComponent;
