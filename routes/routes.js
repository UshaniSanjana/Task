import express from "express";
import { login, protectedRoute, token } from "../controllers/authController.js";
import { authenticateToken } from "../middleware/authenticateToken.js";

const router = express.Router();

router.post("/login", login);
router.get("/protected", authenticateToken, protectedRoute);
router.post("/token", token);

export default router;
