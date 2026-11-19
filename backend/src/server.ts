
import express from "express";
import cors from "cors";
import "dotenv/config";

import analysisRoutes from "./routes/analysis.routes";

const app = express();

const PORT = process.env.PORT || 5050;

// 1. Middleware first
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
  })
);

app.use(express.json());

// 2. Routes after middleware
app.get("/api/health", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "GhostCheck API is running!",
    environment: process.env.NODE_ENV || "development",
    timestamp: new Date().toISOString(),
  });
});

app.use("/api/analyze", analysisRoutes);

// 3. Start server
app.listen(PORT, () => {
  console.log(`GhostCheck API running on port ${PORT}`);
});
