import dns from "node:dns";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import http from "http";
import path from "path";
import { fileURLToPath } from "url";

import authRoutes from "./routes/auth.js";
import applicationRoutes from "./routes/application.js";
import supportRoutes from "./routes/support.js";
import accountRoutes from "./routes/accountRoutes.js";
import { initializeWebSocketServer } from "./websocket.js";

dotenv.config();

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// DNS Configuration
dns.setServers(["1.1.1.1", "8.8.8.8"]);

// Middleware
app.use(
  cors({
    origin: [
      "https://udaan-nidhi-bank.vercel.app",
      "http://localhost:5173",
      "http://localhost:3000",
    ],
    credentials: true,
  })
);

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// Static Upload Folder
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Health Check Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Udaan Nidhi Bank Backend Running 🚀",
  });
});

// MongoDB Connection
mongoose.set("strictQuery", true);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");
  })
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err);
  });

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/applications", applicationRoutes);
app.use("/api/support", supportRoutes);
app.use("/api/accounts", accountRoutes);

// Create HTTP Server
const server = http.createServer(app);

// WebSocket Initialization
initializeWebSocketServer(server);

// Port
const PORT = process.env.PORT || 5000;

// Start Server
server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});