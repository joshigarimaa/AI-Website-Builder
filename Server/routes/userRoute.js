const express = require("express");
const { getCurrentUser } = require("../controllers/userController");
const isAuth = require("../middleware/isAuth");

const userRouter = express.Router();

userRouter.get("/me", isAuth, getCurrentUser);

module.exports = userRouter;