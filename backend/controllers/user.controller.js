import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    const filteredUsers = await User.find({
      _id: { $ne: loggedInUserId }, // for not sending messages ourselves
    }).select("-password");

    res.status(200).json(filteredUsers);
  } catch (error) {
    console.error("Error getting users for sidebar: ", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
