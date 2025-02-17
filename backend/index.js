// Import dependencies
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const productRoute = require("./route/productRoute");
require("dotenv").config();
const app = express();
const db = require("./connectdb");

app.use(
  cors({
    origin: [
      "http://localhost:5173",
    ],
    credentials: true,
  })
);

app.use(express.json());
app.use("/products", express.static("upload/products"));

db();

app.use("/api", productRoute);

// Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
