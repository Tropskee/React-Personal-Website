import React, { useState } from "react";
import CalculatorButton from "./CalculatorButton";
import "./Calculator.css";
import Button from "react-bootstrap/Button";
// Use 'eval()' function that accepts string of characters and outputs value

function CalculatorApp() {
  const [formula, setFormula] = useState("");
  const [output, setOutput] = useState("0");
  const [prevInput, setPrev] = useState("");

  //useEffect(() => {}, [formula, output, prevInput, setNext]);

  // Handles all click events and routes to correct event handler
  const handleClick = (value) => {
    if (
      ["/", "x", "*", "+", "-"].includes(value) &&
      ["/", "x", "*", "+", "-"].includes(prevInput)
    ) {
      handleOperations(value);
    } else if (value === "=") {
      equalClick();
    } else if (value === "AC") {
      clearClick();
    } else {
      if (value === "x") {
        value = "*";
      }
      handleFormula(value);
    }
  };

  // Handles setting formula if no operations take place
  const handleFormula = (value) => {
    setFormula(formula.concat(value));
    setPrev(value);
  };

  // Handles operations and logic of switching operations if two are clicked in a row
  const handleOperations = (value) => {
    if (value === "x") {
      value = "*";
    }
    // Lets the calculator handle squaring numbers
    if (prevInput === "*" && value === "*" && !formula.includes(["**"])) {
      handleFormula(value);
    }
    // Lets the calculator handle changing of signs from ** to [+,/]
    else if (
      formula.slice(-2).includes(["**"]) &&
      (value === "/") | (value === "+") | (value === "-")
    ) {
      setFormula(formula.slice(0, -2).concat(value));
      setPrev(value);
    }
    // Handles adding a negative number
    else if (
      (prevInput === "+" && value === "-") |
      (prevInput === "*" && value === "-")
    ) {
      handleFormula(value);
    }
    // Switches to new operator if two are pressed in a row
    else {
      setFormula(formula.slice(0, -1).concat(value));
      setPrev(value);
    }
  };

  // Handles clicking the equal button
  const equalClick = () => {
    try {
      setFormula(formula);
      setOutput(eval(formula));
      setFormula(eval(formula).toString());
      setPrev("=");
    } catch {
      nanClick();
    }
  };

  // If the user tries to input an open ended operation ie. '9+'.
  const nanClick = () => {
    setFormula("");
    setOutput("NaN");
    setPrev("");
  };

  // Handles clicking the clear/AC button
  const clearClick = () => {
    setFormula("");
    setOutput("0");
    setPrev("");
  };

  return (
    <div className="calc-app">
      <div className="calc-container">
        <div className="formula-screen">{formula}</div>
        <div className="output-screen">{output}</div>
        <div>
          <CalculatorButton
            id="clear"
            value={"AC"}
            className="AC"
            onClick={handleClick}
          ></CalculatorButton>
          <CalculatorButton
            id="divide"
            value={"/"}
            className="divide"
            onClick={handleClick}
          ></CalculatorButton>
          <CalculatorButton
            id="times"
            value={"x"}
            className="times"
            onClick={handleClick}
          ></CalculatorButton>
          <CalculatorButton
            id="seven"
            value={"7"}
            className="seven"
            onClick={handleClick}
          ></CalculatorButton>
          <CalculatorButton
            id="eight"
            value={"8"}
            className="eight"
            onClick={handleClick}
          ></CalculatorButton>
          <CalculatorButton
            id="nine"
            value={"9"}
            className="nine"
            onClick={handleClick}
          ></CalculatorButton>
          <CalculatorButton
            id="minus"
            value={"-"}
            className="minus"
            onClick={handleClick}
          ></CalculatorButton>
          <CalculatorButton
            id="four"
            value={"4"}
            className="four"
            onClick={handleClick}
          ></CalculatorButton>
          <CalculatorButton
            id="five"
            value={"5"}
            className="five"
            onClick={handleClick}
          ></CalculatorButton>
          <CalculatorButton
            id="six"
            value={"6"}
            className="six"
            onClick={handleClick}
          ></CalculatorButton>
          <CalculatorButton
            id="plus"
            value={"+"}
            className="plus"
            onClick={handleClick}
          ></CalculatorButton>
          <CalculatorButton
            id="one"
            value={"1"}
            className="one"
            onClick={handleClick}
          ></CalculatorButton>
          <CalculatorButton
            id="two"
            value={"2"}
            className="two"
            onClick={handleClick}
          ></CalculatorButton>
          <CalculatorButton
            id="three"
            value={"3"}
            className="three"
            onClick={handleClick}
          ></CalculatorButton>
          <CalculatorButton
            id="zero"
            value={"0"}
            className="zero"
            onClick={handleClick}
          ></CalculatorButton>
          <CalculatorButton
            id="decimal"
            value={"."}
            className="decimal"
            onClick={handleClick}
          ></CalculatorButton>
          <CalculatorButton
            id="equals"
            value={"="}
            className="equals"
            onClick={handleClick}
          ></CalculatorButton>
        </div>
      </div>
      <Button
        className="calculator-link-button"
        variant="info"
        href="https://github.com/Tropskee/React-Calculator-App"
        target="_blank"
        block
      >
        Check out the Github
      </Button>
    </div>
  );
}

export default CalculatorApp;
