const getCurrentUser = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(200).json({ user: null });
    }

    return res.status(200).json({
      user: {
        id: req.user._id,
        name: req.user.name,
        email: req.user.email,
        avatar: req.user.avatar
      }
    });

  } catch (error) {
    console.error("Get Current User Error:", error);
    return res.status(500).json({ message: "Server Error" });
  }
};

module.exports = { getCurrentUser };
