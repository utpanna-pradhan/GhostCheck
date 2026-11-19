
import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();

const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
  })
);

app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "GhostCheck API is running!",
    environment: process.env.NODE_ENV || "development",
    timestamp: new Date().toISOString(),
  });
});

app.listen(PORT, () => {
  console.log(`GhostCheck API running on port ${PORT}`);
});
