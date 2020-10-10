import React from "react";
import "./button.css";

function Buttons({ value, handelDisplay, handelButtonC, mathExpression }) {
  return (
    <button className="all-buttons"
      onClick={(event) => {
        switch (event.target.value) {
            case "C":
                handelButtonC()
                break;
        
            case '=':
                mathExpression()
                break;

            default:
                handelDisplay(event.target.value);
                break; 
        }
      }}
      value={value}
    >
      {value}
    </button>
  );
}

export default Buttons;
