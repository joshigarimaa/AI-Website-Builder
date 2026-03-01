require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const cookieParser = require("cookie-parser");
const authRouter = require("./routes/authRoute");
const cors = require("cors");

const app = express();

// middleware
app.use(express.json());
app.use(cookieParser());

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

// connect database
connectDB();

const PORT = process.env.PORT || 5000;

// routes
app.use("/api/auth", authRouter);

// test route
app.get("/", (req, res) => {
  res.send("Server running");
});

// start server
app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});