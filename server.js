import express from "express";
import { connectDB } from "./config/db.js";
import routes from "./routes/routes.js";

const app = express();
const PORT = 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
  //connectDB();
});
