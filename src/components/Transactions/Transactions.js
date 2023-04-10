import React from "react";
import Transaction from "./transaction";

export default function Transactions({ transactions, deleteTransaction }) {
  const TransactionAmount = function (amount) {
    return amount > 0 ? "positive" : "negative";
  };
  return (
    <div>
      {transactions.map((transaction) => {
        return (
          <Transaction key={transaction._id} transaction={transaction} deleteTransaction={deleteTransaction} classN={TransactionAmount(transaction.amount)} />);
      })}
    </div>
  );
}
