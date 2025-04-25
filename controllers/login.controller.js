import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (username !== "ushani" || password !== "ushani123") {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const payload = { username };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    return res.json({ token });
  } catch (error) {
    return res.status(500).json({ message: "Error" });
  }
};
