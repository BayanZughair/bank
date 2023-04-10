import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";

import NavBar from "./components/NavBar/NavBar";
import Transactions from "./components/Transactions/Transactions";
import Operation from "./components/Operations/Operation";
import BreakDowns from "./components/BreakDown/BreakDowns";

import "./App.css";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState(0);
  const [breakDowns, setBreakDowns] = useState([]);


  const getTransactions = async () => {
    const response = await axios.get("http://localhost:5007/transactions")
    setTransactions(response.data)
  };
  
  const getBalance = async () => {
    const response = await axios.get("http://localhost:5007/balance")
    setBalance(response.data.balance)
  };

  const addTransaction = async (newTransaction) => {
    await axios.post("http://localhost:5007/transactions", { newTransaction })
    getTransactions()
    getBalance()
    alert("Transaction Added")
  };

  const deleteTransaction = async (transactionId) => {
    await axios.delete(`http://localhost:5007/transaction/${transactionId}`)
    getTransactions()
    getBalance()
    alert("Transaction Deleted")
  };

  const getBreakDowns = async () => {
    const response = await axios.get("http://localhost:5007/breakdown")
    setBreakDowns(response.data)
  };

  useEffect(() => {
    getTransactions()
    getBalance()
    getBreakDowns()
  }, []);

  return (
    <div>
      <Router>
        <NavBar balance={balance} />
        <Routes>
          <Route path="/" element={<Transactions transactions={transactions} deleteTransaction={deleteTransaction} />} />
          <Route path="/operations" element={<Operation addTransaction={addTransaction} />} />
          <Route path="/breakDowns" element={<BreakDowns breakDowns={breakDowns} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
