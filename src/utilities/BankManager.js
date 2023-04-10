import axios from "axios";

class BankManager {
  constructor(setTransactions, setBalance, setBreakDowns) {
    this.setTransactions = setTransactions;
    this.setBalance = setBalance;
    this.setBreakDowns = setBreakDowns;
  }

  async getTransactionsFromDB() {
    const response = await axios.get("http://localhost:5007/transactions")
    this.setTransactions(response.data)
  }

  async getBalance() {
    const response = await axios.get("http://localhost:5007/balance")
    this.setBalance(response.data.balance)
  }

  async addTransaction(newTransaction) {
    try {
      await axios.post("http://localhost:5007/transactions", { newTransaction })
      console.log("added");
      this.getTransactionsByCategory()
      this.getTransactionsFromDB()
      this.getBalance()
    } catch (error) {
      console.log("error");
    }
  }

  async deleteTransaction(transactionId) {
    await axios.delete(`http://localhost:5007/transaction/${transactionId}`)
    this.getTransactionsByCategory()
    this.getTransactionsFromDB()
    this.getBalance()
    console.log("deleted");
  }
  async getTransactionsByCategory() {
    const response = await axios.get("http://localhost:5007/breakdown")
    this.setBreakDowns(response.data)
  }
}

export default BankManager;
