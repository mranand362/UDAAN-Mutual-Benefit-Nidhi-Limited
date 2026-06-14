import { WebSocketServer } from "ws";
import ChatSession from "./models/ChatSession.js";

let wss;

export function initializeWebSocketServer(server) {
  wss = new WebSocketServer({ server, path: "/chat" });
  
  const clients = new Map();
  
  wss.on("connection", (ws, req) => {
    console.log("New WebSocket connection");
    const clientId = Date.now();
    clients.set(clientId, ws);
    
    ws.on("message", async (data) => {
      try {
        const message = JSON.parse(data);
        console.log("Received:", message);
        
        if (message.type === "message") {
          // Broadcast to all connected clients (or specific ones)
          clients.forEach((client, id) => {
            if (client.readyState === ws.OPEN) {
              client.send(JSON.stringify({
                type: "message",
                message: getBotResponse(message.message),
                id: Date.now()
              }));
            }
          });
        }
      } catch (error) {
        console.error("WebSocket error:", error);
      }
    });
    
    ws.on("close", () => {
      clients.delete(clientId);
      console.log("Client disconnected");
    });
  });
  
  return wss;
}

function getBotResponse(message) {
  const msgLower = message.toLowerCase();
  
  if (msgLower.includes("account") || msgLower.includes("open")) {
    return "You can open an account by clicking on the 'Open Account' button on our website. The process takes 5-10 minutes.";
  } else if (msgLower.includes("deposit") || msgLower.includes("fd")) {
    return "We offer Fixed Deposits with interest rates ranging from 7% to 9.5% per annum.";
  } else if (msgLower.includes("loan")) {
    return "We provide Personal Loans, Gold Loans, and Business Loans. Interest rates start from 10.5% per annum.";
  } else {
    return "Thank you for your message. Our support team will get back to you shortly. For immediate assistance, please call us at +91 73977 82590.";
  }
}