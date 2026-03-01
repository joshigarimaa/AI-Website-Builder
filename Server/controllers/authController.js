const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const googleAuth = async (req, res) => {
  try {
    const { name, email, avatar } = req.body;

    // validation
    if (!name || !email) {
      return res.status(400).json({
        success: false,
        message: "Name and email are required",
      });
    }

    // check if user exists
    let user = await userModel.findOne({ email });

    // create user if not exists
    if (!user) {
      user = await userModel.create({
        name,
        email,
        avatar,
      });
    }

    // check JWT_SECRET exists
    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET is not defined in .env");
    }

    // generate token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    // set cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    // response
    return res.status(200).json({
      success: true,
      message: "Authentication successful",
      user,
      token,
    });
  } catch (error) {
    console.log("Google Auth Error:", error.message);

    return res.status(500).json({
      success: false,
      message: error.message || "Server error",
    });
  }
};

const logout = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    return res.status(200).json({
      success: true,
      message: "Logged out successfully",
    });
  } catch (error) {
    console.log("Logout Error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Logout failed",
    });
  }
};

module.exports = { googleAuth, logout };
