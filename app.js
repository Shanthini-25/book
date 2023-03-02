const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/books", router); // localhost:5000/books

mongoose
  .connect(
    "mongodb://localhost:27017/book"
  )
  .then(() => 
    app.listen(5000)
  .then(() => console.log("Connected To Database"))
  )
  .catch((err) => console.log(err));
