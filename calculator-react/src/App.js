import React, { useState } from "react";
import "./App.css";

const Button = ({ onClick, label, className }) => (
  <button onClick={() => onClick(label)} className={className}>
    {label}
  </button>
);

const HistoryItem = ({ item }) => <li>{item}</li>;

const Calculator = () => {
  const [input, setInput] = useState("");
  const [mode, setMode] = useState("simple");
  const [history, setHistory] = useState([]);

  const handleClick = (value) => {
    if (value === "=") {
      calculateResult();
    } else if (value === "C") {
      clearDisplay();
    } else {
      appendToDisplay(value);
    }
  };

  const appendToDisplay = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const clearDisplay = () => {
    setInput("");
  };

  const calculateResult = () => {
    try {
      const result = eval(input);
      const newHistory = [`${input} = ${result}`, ...history].slice(0, 6);
      setHistory(newHistory);
      setInput(result.toString());
    } catch (error) {
      setInput("Error");
    }
  };

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "simple" ? "intermediate" : "simple"));
    clearDisplay();
  };

  const buttons = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "+",
    "-",
    "=",
    "C",
  ];
  const intermediateButtons = ["*", "/"];

  return (
    <div className="calculator-container">
      <div id="calculator" className="calculator">
        <input type="text" value={input} readOnly id="display" />
        <div id="keys" className="buttons">
          {buttons.map((label) => (
            <Button
              key={label}
              onClick={handleClick}
              label={label}
              className={
                label === "+" || label === "-" || label === "=" || label === "C"
                  ? "operator-btn"
                  : ""
              }
            />
          ))}
          {mode === "intermediate" &&
            intermediateButtons.map((label) => (
              <Button
                key={label}
                onClick={handleClick}
                label={label}
                className="operator-btn"
              />
            ))}
        </div>
        <button className="toggle-button" onClick={toggleMode}>
          Switch to {mode === "simple" ? "Intermediate" : "Simple"} Mode
        </button>
      </div>
      <div className="history">
        <h2>History</h2>
        <ul>
          {history.map((item, index) => (
            <HistoryItem key={index} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

const App = () => (
  <div className="App">
    <Calculator />
  </div>
);

export default App;
