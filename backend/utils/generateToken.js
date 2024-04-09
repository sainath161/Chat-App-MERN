import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });
  // Set cookie in response header
  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days in milliSeconds or 900000
    httpOnly: true, // Only accessible through HTTP(S) and not JS on client-side
    sameSite: "strict", // Protect against CSRF attacks by adding the SameSite attribute to cookies
    secure: process.env.NODE_ENV !== "development", // If the app is running over https, mark it as secure
  });
};

export default generateTokenAndSetCookie;
