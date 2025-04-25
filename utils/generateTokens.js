import jwt from "jsonwebtoken";

export const generateAccessToken = (user) => {
  return jwt.sign(user, process.env.ACCESS_SECRET, { expiresIn: "6d" });
};

export const generateRefreshToken = (user) => {
  return jwt.sign(user, process.env.REFRESH_SECRET, { expiresIn: "7d" });
};
