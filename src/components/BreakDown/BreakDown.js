import React from "react";
import "./BreakDown.css";

export default function BreakDown({ BreakDownInfo }) {
  return (
    <div className="breakdown-item">
      <div className="breakdown-category">{BreakDownInfo._id}: </div>
      <div className="breakdown-amount">  {BreakDownInfo.totalAmount}</div>
    </div>
  );
}