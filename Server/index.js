require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const cookieParser = require("cookie-parser");

const app = express();

// middleware
app.use(express.json());
app.use(cookieParser()); // REQUIRED for cookies

// connect database
connectDB();

const PORT = process.env.PORT || 5000;

// test route
app.get("/", (req, res) => {
  res.send("Server is running");
});

// start server
app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});