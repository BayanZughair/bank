const express = require("express");
const app = express();
const bankApi = require("./server/routes/bankApi");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


const { connectDB } = require("./utilities/connectDB");
connectDB();


app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With"
  )

  next()
})

app.use("/", bankApi)

const port = 5007;
app.listen(port, function () {
  console.log(`running server on port ${port}`)
})