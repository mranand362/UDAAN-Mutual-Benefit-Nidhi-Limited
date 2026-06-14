import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import jwt from "jsonwebtoken";
import FAQ from "../models/FAQ.js";
import Ticket from "../models/Ticket.js";
import ChatSession from "../models/ChatSession.js";
import KnowledgeBase from "../models/KnowledgeBase.js";

const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = "uploads/tickets";
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|pdf|doc|docx/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);
    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error("Only images, PDFs, and documents are allowed"));
    }
  },
});

// Auth middleware
const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Authentication required" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "your_secret_key");
    req.userId = decoded.userId;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

// ==================== FAQ ROUTES ====================
router.get("/faqs", async (req, res) => {
  try {
    const faqs = await FAQ.find().sort({ category: 1, order: 1 });
    res.json({ faqs });
  } catch (error) {
    console.error("Error fetching FAQs:", error);
    res.status(500).json({ message: "Error fetching FAQs" });
  }
});

router.post("/faqs/:id/feedback", async (req, res) => {
  try {
    const { helpful } = req.body;
    const faqId = req.params.id;

    if (helpful) {
      await FAQ.findByIdAndUpdate(faqId, { $inc: { helpful: 1 } });
    } else {
      await FAQ.findByIdAndUpdate(faqId, { $inc: { notHelpful: 1 } });
    }

    res.json({ message: "Feedback recorded successfully" });
  } catch (error) {
    console.error("Error recording feedback:", error);
    res.status(500).json({ message: "Error recording feedback" });
  }
});

// ==================== KNOWLEDGE BASE ROUTES ====================
router.get("/knowledge-base", async (req, res) => {
  try {
    const articles = await KnowledgeBase.find({ isActive: true }).sort({ views: -1 });
    res.json({ articles });
  } catch (error) {
    console.error("Error fetching knowledge base:", error);
    // Return sample data if model doesn't exist yet
    res.json({ 
      articles: [
        { id: 1, title: "Understanding Fixed Deposits", excerpt: "Learn about fixed deposit interest rates, tenure options, and tax benefits...", readTime: 5, views: 1200 },
        { id: 2, title: "Loan Eligibility Calculator", excerpt: "Check your loan eligibility with our easy-to-use calculator tool...", readTime: 3, views: 890 },
        { id: 3, title: "KYC Document Guide", excerpt: "Complete guide to submitting KYC documents online...", readTime: 4, views: 2100 },
      ]
    });
  }
});

router.get("/knowledge-base/:id", async (req, res) => {
  try {
    const article = await KnowledgeBase.findById(req.params.id);
    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }
    // Increment view count
    article.views += 1;
    await article.save();
    res.json({ article });
  } catch (error) {
    res.status(500).json({ message: "Error fetching article" });
  }
});

// ==================== SEARCH ROUTE ====================
router.get("/search", async (req, res) => {
  try {
    const { q } = req.query;
    if (!q) {
      return res.json({ results: [] });
    }

    const faqResults = await FAQ.find({
      $or: [
        { question: { $regex: q, $options: "i" } },
        { answer: { $regex: q, $options: "i" } },
      ],
    });

    const kbResults = await KnowledgeBase.find({
      $or: [
        { title: { $regex: q, $options: "i" } },
        { content: { $regex: q, $options: "i" } },
      ],
    });

    const results = [...faqResults, ...kbResults];
    res.json({ results });
  } catch (error) {
    console.error("Error searching:", error);
    res.status(500).json({ message: "Error searching" });
  }
});

// ==================== TICKET ROUTES ====================
router.get("/tickets", authMiddleware, async (req, res) => {
  try {
    const tickets = await Ticket.find({ userId: req.userId }).sort({ createdAt: -1 });
    res.json({ tickets });
  } catch (error) {
    console.error("Error fetching tickets:", error);
    res.status(500).json({ message: "Error fetching tickets" });
  }
});

router.get("/tickets/:id", authMiddleware, async (req, res) => {
  try {
    const ticket = await Ticket.findOne({ ticketId: req.params.id, userId: req.userId });
    if (!ticket) {
      return res.status(404).json({ message: "Ticket not found" });
    }
    res.json({ ticket });
  } catch (error) {
    res.status(500).json({ message: "Error fetching ticket" });
  }
});

router.post("/tickets", authMiddleware, upload.array("attachments", 5), async (req, res) => {
  try {
    const { subject, category, priority, message } = req.body;

    if (!subject || !category || !message) {
      return res.status(400).json({ message: "Subject, category, and message are required" });
    }

    const attachments = req.files.map((file) => file.path);

    const ticket = new Ticket({
      userId: req.userId,
      ticketId: `TKT${Date.now()}${Math.floor(Math.random() * 1000)}`,
      subject,
      category,
      priority: priority || "medium",
      message,
      attachments,
      status: "pending",
      createdAt: new Date(),
    });

    await ticket.save();

    res.json({
      message: "Ticket created successfully",
      ticketId: ticket.ticketId,
      ticket,
    });
  } catch (error) {
    console.error("Error creating ticket:", error);
    res.status(500).json({ message: "Error creating ticket" });
  }
});

router.post("/tickets/:id/response", authMiddleware, upload.array("attachments", 5), async (req, res) => {
  try {
    const { message } = req.body;
    const attachments = req.files.map((file) => file.path);

    const ticket = await Ticket.findOne({ ticketId: req.params.id, userId: req.userId });
    if (!ticket) {
      return res.status(404).json({ message: "Ticket not found" });
    }

    ticket.responses.push({
      message,
      attachments,
      createdAt: new Date(),
    });

    ticket.updatedAt = new Date();
    if (ticket.status === "pending") {
      ticket.status = "in-progress";
    }
    await ticket.save();

    res.json({ message: "Response added successfully", ticket });
  } catch (error) {
    console.error("Error adding response:", error);
    res.status(500).json({ message: "Error adding response" });
  }
});

// ==================== STATS ROUTE ====================
router.get("/stats", authMiddleware, async (req, res) => {
  try {
    const totalTickets = await Ticket.countDocuments({ userId: req.userId });
    const openTickets = await Ticket.countDocuments({ 
      userId: req.userId, 
      status: { $in: ["pending", "in-progress"] } 
    });
    const resolvedTickets = await Ticket.countDocuments({ 
      userId: req.userId, 
      status: "resolved" 
    });

    res.json({
      stats: {
        totalTickets,
        openTickets,
        resolvedTickets,
        avgResponseTime: "2h"
      }
    });
  } catch (error) {
    console.error("Error fetching stats:", error);
    res.json({
      stats: {
        totalTickets: 0,
        openTickets: 0,
        resolvedTickets: 0,
        avgResponseTime: "N/A"
      }
    });
  }
});

// ==================== CHAT ROUTES ====================
router.post("/chat/init", async (req, res) => {
  try {
    const { userId } = req.body;
    const sessionId = `chat_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    const chatSession = new ChatSession({
      sessionId,
      userId: userId === "authenticated" ? req.userId : null,
      messages: [],
      createdAt: new Date(),
      lastActivity: new Date(),
    });

    await chatSession.save();

    res.json({ sessionId });
  } catch (error) {
    console.error("Error initializing chat:", error);
    res.status(500).json({ message: "Error initializing chat" });
  }
});

router.post("/chat/message", async (req, res) => {
  try {
    const { sessionId, message } = req.body;
    const msgLower = message.toLowerCase();

    // Intelligent response logic
    let reply = "";
    let suggestions = [];

    if (msgLower.includes("account opening") || msgLower.includes("open account")) {
      reply = "You can open an account by clicking on the 'Open Account' button on our website or by visiting our nearest branch. The online process takes about 5-10 minutes. Would you like me to guide you through the process?";
      suggestions = ["Documents required", "Minimum deposit amount", "Interest rates"];
    } else if (msgLower.includes("document") || msgLower.includes("kyc")) {
      reply = "For KYC verification, you'll need:\n• Aadhaar Card\n• PAN Card\n• Passport size photograph\n• Address proof (if different from Aadhaar)\n\nYou can upload these documents during the online application process.";
      suggestions = ["Upload documents", "Document size limits", "Verification time"];
    } else if (msgLower.includes("deposit") || msgLower.includes("fd") || msgLower.includes("fixed deposit")) {
      reply = "We offer Fixed Deposits with interest rates ranging from 7% to 9.5% per annum. The minimum deposit amount is ₹1,000 and tenures range from 12 to 60 months. Senior citizens get an additional 0.5% interest rate.";
      suggestions = ["Calculate FD returns", "Tax benefits", "Premature withdrawal"];
    } else if (msgLower.includes("loan") || msgLower.includes("borrow")) {
      reply = "We provide various loan products including:\n• Personal Loans (up to ₹10 lakhs)\n• Gold Loans (up to 75% of gold value)\n• Business Loans (up to ₹25 lakhs)\n• Home Loans (up to ₹50 lakhs)\n\nInterest rates start from 10.5% per annum.";
      suggestions = ["Check eligibility", "Loan calculator", "Required documents"];
    } else if (msgLower.includes("interest") || msgLower.includes("rate")) {
      reply = "Current interest rates:\n• Savings Account: 4% p.a.\n• Fixed Deposits: 7% - 9.5% p.a.\n• Recurring Deposits: 6.5% - 8% p.a.\n• Loans: 10.5% - 15% p.a.\n\nWould you like to know more about any specific product?";
      suggestions = ["FD rates details", "Senior citizen rates", "Loan interest rates"];
    } else if (msgLower.includes("balance") || msgLower.includes("statement")) {
      reply = "You can check your account balance and download statements by:\n1. Logging into your online account\n2. Visiting our mobile app\n3. Visiting your nearest branch\n4. Calling our customer care\n\nWould you like me to help you with something specific?";
      suggestions = ["Login help", "Mobile app download", "Branch locator"];
    } else if (msgLower.includes("contact") || msgLower.includes("support") || msgLower.includes("help")) {
      reply = "You can reach us through:\n• Phone: +91 73977 82590 (Mon-Sat, 10 AM - 5 PM)\n• Email: support@njfnidhi.in\n• Live Chat: Available now\n• Branch Visit: No. 362/B, Kamarajar St, Villupuram\n\nHow would you prefer to connect?";
      suggestions = ["Call me back", "Email support", "Visit branch"];
    } else if (msgLower.includes("thanks") || msgLower.includes("thank")) {
      reply = "You're welcome! Is there anything else I can help you with today?";
      suggestions = ["Another question", "Create support ticket", "End chat"];
    } else {
      reply = "Thank you for reaching out to Jaynirmala Mutual Benefit Nidhi Limited. I'm here to help you with:\n• Account opening and KYC\n• Deposit products and interest rates\n• Loan applications and eligibility\n• General inquiries and support\n\nCould you please provide more details about what you need assistance with?";
      suggestions = ["Open account", "Check deposit rates", "Apply for loan", "Talk to agent"];
    }

    // Save to database
    if (sessionId) {
      await ChatSession.findOneAndUpdate(
        { sessionId },
        {
          $push: {
            messages: {
              $each: [
                { role: "user", content: message, timestamp: new Date() },
                { role: "assistant", content: reply, suggestions, timestamp: new Date() }
              ]
            }
          },
          $set: { lastActivity: new Date() }
        }
      );
    }

    res.json({ reply, suggestions });
  } catch (error) {
    console.error("Error processing chat message:", error);
    res.status(500).json({ message: "Error processing message" });
  }
});

router.get("/chat/history/:sessionId", async (req, res) => {
  try {
    const { sessionId } = req.params;
    const chatSession = await ChatSession.findOne({ sessionId });
    res.json({ messages: chatSession?.messages || [] });
  } catch (error) {
    res.status(500).json({ message: "Error fetching chat history" });
  }
});

export default router;