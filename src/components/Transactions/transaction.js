import React from "react";
import Card from "react-bootstrap/Card";
import "./transaction.css";

export default function Transaction({ transaction,deleteTransaction,classN}) {

  return (
    <Card >
      <Card.Body>
      <Card.Text className={classN}>amount : {transaction.amount}</Card.Text>
      <Card.Text>category : {transaction.category} </Card.Text>
        <Card.Text>vendor : {transaction.vendor}</Card.Text>
        <button onClick={() => {deleteTransaction(transaction._id)}} className=" bg-danger"> Delete </button>
      </Card.Body>
    </Card>
  );
}
