import React from "react";
import "./CalculatorButton.css";

function CalculatorButton(props) {
  return (
    <button
      className={`${props.className}` + " calculator-button"}
      onClick={() => props.onClick(props.value)}
    >
      {props.value}{" "}
    </button>
  );
}

export default CalculatorButton;
