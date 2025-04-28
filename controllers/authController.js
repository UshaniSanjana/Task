import {
  generateAccessToken,
  generateRefreshToken,
} from "../utils/generateTokens.js";
import jwt from "jsonwebtoken";

const users = [{ username: "ushani111", password: "ushani123" }];
let refreshTokens = [];

export const login = (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  if (!user) return res.status(401).json({ message: "Invalid credentials" });

  const accessToken = generateAccessToken({ username });
  const refreshToken = generateRefreshToken({ username });

  refreshTokens.push(refreshToken);

  res.json({ accessToken, refreshToken });
};

export const protectedRoute = (req, res) => {
  res.send(`${req.user.username} authorized`);
};

export const token = (req, res) => {
  const { refreshToken } = req.body;

  if (!refreshToken)
    return res.status(401).json({ message: "Refresh token is required" });
  if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403);

  jwt.verify(refreshToken, process.env.REFRESH_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);

    const newAccessToken = generateAccessToken({ username: user.username });
    res.json({ accessToken: newAccessToken });
  });
};
