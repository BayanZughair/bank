import React from "react";
import { Link } from "react-router-dom";

export default function NavBar({ balance }) {
  return (
    <div className="custom-nav">
      <div className="custom-container">
        <Link to="/">Transactions</Link>
        <Link to="/operations">Operations</Link>
        <Link to="/breakDowns">Breakdown</Link>
        <h5>
          Balance :   
          <span className={balance > 500 ? "positive":  "negative"}> {balance} </span>
        </h5>
      </div>
    </div>
  );
}
