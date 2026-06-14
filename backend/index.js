import dns from 'node:dns';
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import http from "http";
import authRoutes from "./routes/auth.js";
import applicationRoutes from "./routes/application.js";
import supportRoutes from "./routes/support.js";
import accountRoutes from "./routes/accountRoutes.js"; // ADD THIS IMPORT
import { initializeWebSocketServer } from "./websocket.js";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
dns.setServers(['1.1.1.1', '8.8.8.8']);

app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Serve uploaded files statically
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

mongoose.set('strictQuery', true);

mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("MongoDB Connected"))
.catch((err)=> console.log(err));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/applications", applicationRoutes);
app.use("/api/support", supportRoutes);
app.use("/api/accounts", accountRoutes); // ADD THIS LINE - Account Routes

// Create HTTP server
const server = http.createServer(app);

// Initialize WebSocket
initializeWebSocketServer(server);

server.listen(5000, () => {
  console.log("Server running on port 5000");
  console.log("WebSocket server available at ws://localhost:5000/chat");
});