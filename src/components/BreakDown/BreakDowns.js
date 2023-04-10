import React from "react";
import BreakDown from "./BreakDown";
import "./BreakDown.css";

export default function BreakDowns({ breakDowns }) {
  return (
    <div className="App">
      <div>
          <div>
            {breakDowns.map((breakDown) => (
              <BreakDown BreakDownInfo={breakDown} />
            ))}
          </div>
        </div>
    </div>
  );
}