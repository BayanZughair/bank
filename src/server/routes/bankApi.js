const express = require("express");
const Transaction = require("../models/transaction");
const router = express.Router();

router.get("/transactions", async (req, res) => {
  try {
    const transactions = await Transaction.find({});
    res.send(transactions);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving transactions");
  }
});

router.get("/balance", async (req, res) => {
  try {
    const transactions = await Transaction.find({});
    const balance = transactions.reduce((total, transaction) => total + transaction.amount, 0)
    res.send({ balance })
  } catch (error) {
    console.error(error)
    res.status(500).send("Error retrieving balance")
  }
});

router.post("/transactions", async (req, res) => {
  try {
    const transaction = req.body.newTransaction;
    const newTransaction = new Transaction({
      amount: transaction.amount,
      category: transaction.category,
      vendor: transaction.vendor,
    });
    await newTransaction.save()
    res.send("Transaction added successfully")
  } catch (error) {
    console.error(error)
    res.status(500).send("Error adding transaction")
  }
});

router.delete("/transaction/:transactionId", async (req, res) => {
  try {
    const transactionId = req.params.transactionId
    await Transaction.findByIdAndDelete(transactionId)
    res.send("Transaction deleted successfully");
  } catch (error) {
    console.error(error)
    res.status(500).send("Error deleting transaction")
  }
});

router.get("/breakdown", async (req, res) => {
  try {
    const transactionSum = await Transaction.aggregate([
      { $group: { _id: "$category", totalAmount: { $sum: "$amount" } } },
    ]);
    res.send(transactionSum)
  } catch (error) {
    console.error(error)
    res.status(500).send("Error retrieving transaction breakdown")
  }
});

module.exports = router;
