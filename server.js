import express from "express";
import { connectDB } from "./config/db.js";
import routes from "./routes/routes.js";

import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 5000;

app.use(express.json());

app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
  connectDB();
});
