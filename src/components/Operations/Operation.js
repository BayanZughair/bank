import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Operations.css";


export default function Operation({ addTransaction }) {
  const [amount, setAmount] = useState("")
  const [category, setCategory] = useState("")
  const [vendor, setVendor] = useState("")

  const addTransactionInput = function () {
    let newTransaction = { amount, category, vendor }
    addTransaction(newTransaction)
  };
  return (
    <div className="App">

      <Form>
        <Form.Control
          onChange={(e) => { setAmount(e.target.value) }} type="Number" placeholder="Transaction amount" value={amount} /> 
        <Form.Control onChange={(e) => { setVendor(e.target.value) }} type="text" placeholder="Transaction vendor" value={vendor} /> 
        <Form.Control onChange={(e) => { setCategory(e.target.value) }} type="text" placeholder="Transaction category" value={category} />
        <div>
          <Button onClick={addTransactionInput}> Submit </Button>
        </div>
      </Form>
    </div>
  );
}
