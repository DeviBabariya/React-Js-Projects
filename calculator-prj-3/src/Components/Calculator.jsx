import { useState } from "react";
import "./Calculator.css";


function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "C") {
      setInput("");
    } else if (value === "=") {
        setInput(eval(input).toString());
    } else {
      setInput(input + value);
    }
  };

  const buttons = [
    ["C", "/", "*", "-"],
    ["7", "8", "9", "+"],
    ["4", "5", "6", "="],
    ["1", "2", "3", "."],
    ["0"]
  ];

  return (


    <div className="calculator">

      <div className="display">{input || "0"}</div>

        {buttons.map((row, i) => (

            <div key={i} className="row">
                
            {row.map((btn, j) => (
                <button key={j}  className={`btn ${getColorClass(btn)}`}  onClick={() => handleClick(btn)}>
                    {btn}
                </button>
            ))}

            </div>
        ))}

    </div>
  );
}

function getColorClass(btn) {

  if (btn === "C") return "red";
  if (["/", "*", "-", "+"].includes(btn)) return "orange";
  if (btn === "=") return "green";
  return "blue";

}


export default Calculator;