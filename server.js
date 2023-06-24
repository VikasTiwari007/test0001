require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/routes");

mongoose
  .connect("mongodb url")
  .then((res) => {
    console.log("mongodb is connected");
  })
  .catch((err) => {
    console.log(err);
  });
//middleware
const app = express();
app.use("/api", router);

const port = process.env.port;
app.listen(port, () => {
  console.log(`server is running in the port number ${port}`);
});
