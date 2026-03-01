const express = require("express");
const { googleAuth, logout } = require("../controllers/authController");

const authRouter = express.Router();

authRouter.post("/google", googleAuth);
authRouter.get("/logout", logout);

module.exports = authRouter;