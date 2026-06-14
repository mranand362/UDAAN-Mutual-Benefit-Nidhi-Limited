import SupportTicket from "../models/SupportTicket.js";
import FAQ from "../models/FAQ.js";
import KnowledgeBase from "../models/KnowledgeBase.js";
import ChatMessage from "../models/ChatMessage.js";

// ==================== TICKET CONTROLLERS ====================

export const createTicket = async (req, res) => {
  try {
    const { subject, category, priority, message } = req.body;
    const userId = req.user.id;

    // Generate unique ticket ID
    const ticketId = `TKT${Date.now()}${Math.floor(Math.random() * 1000)}`;

    const ticket = new SupportTicket({
      ticketId,
      userId,
      subject,
      category,
      priority,
      message
    });

    await ticket.save();

    res.status(201).json({
      success: true,
      message: "Ticket created successfully",
      data: ticket
    });
  } catch (error) {
    console.error("Create ticket error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to create ticket",
      error: error.message
    });
  }
};

export const getUserTickets = async (req, res) => {
  try {
    const userId = req.user.id;
    const { status, priority, page = 1, limit = 10 } = req.query;

    const query = { userId };
    if (status && status !== "all") query.status = status;
    if (priority && priority !== "all") query.priority = priority;

    const skip = (parseInt(page) - 1) * parseInt(limit);

    const tickets = await SupportTicket.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit));

    const total = await SupportTicket.countDocuments(query);

    res.json({
      success: true,
      data: tickets,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / parseInt(limit))
      }
    });
  } catch (error) {
    console.error("Get tickets error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch tickets",
      error: error.message
    });
  }
};

export const getTicketById = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const ticket = await SupportTicket.findOne({ _id: id, userId });

    if (!ticket) {
      return res.status(404).json({
        success: false,
        message: "Ticket not found"
      });
    }

    res.json({
      success: true,
      data: ticket
    });
  } catch (error) {
    console.error("Get ticket error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch ticket",
      error: error.message
    });
  }
};

export const addTicketResponse = async (req, res) => {
  try {
    const { id } = req.params;
    const { message } = req.body;
    const userId = req.user.id;

    const ticket = await SupportTicket.findOne({ _id: id, userId });

    if (!ticket) {
      return res.status(404).json({
        success: false,
        message: "Ticket not found"
      });
    }

    if (ticket.status === "resolved" || ticket.status === "closed") {
      return res.status(400).json({
        success: false,
        message: "Cannot add response to resolved or closed ticket"
      });
    }

    ticket.responses.push({
      message,
      isAdmin: false,
      adminName: null
    });

    ticket.status = "in-progress";
    await ticket.save();

    res.json({
      success: true,
      message: "Response added successfully",
      data: ticket
    });
  } catch (error) {
    console.error("Add response error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to add response",
      error: error.message
    });
  }
};

export const closeTicket = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const ticket = await SupportTicket.findOne({ _id: id, userId });

    if (!ticket) {
      return res.status(404).json({
        success: false,
        message: "Ticket not found"
      });
    }

    ticket.status = "closed";
    ticket.closedAt = new Date();
    await ticket.save();

    res.json({
      success: true,
      message: "Ticket closed successfully",
      data: ticket
    });
  } catch (error) {
    console.error("Close ticket error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to close ticket",
      error: error.message
    });
  }
};

export const rateTicket = async (req, res) => {
  try {
    const { id } = req.params;
    const { rating, feedback } = req.body;
    const userId = req.user.id;

    const ticket = await SupportTicket.findOne({ _id: id, userId });

    if (!ticket) {
      return res.status(404).json({
        success: false,
        message: "Ticket not found"
      });
    }

    ticket.rating = rating;
    ticket.feedback = feedback;
    await ticket.save();

    res.json({
      success: true,
      message: "Thank you for your feedback!",
      data: ticket
    });
  } catch (error) {
    console.error("Rate ticket error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to submit rating",
      error: error.message
    });
  }
};

// ==================== FAQ CONTROLLERS ====================

export const getFAQs = async (req, res) => {
  try {
    const { category, search } = req.query;
    
    let query = { isActive: true };
    if (category && category !== "all") query.category = category;
    
    let faqs = await FAQ.find(query).sort({ order: 1, createdAt: 1 });
    
    if (search && search.length > 2) {
      faqs = faqs.filter(faq =>
        faq.question.toLowerCase().includes(search.toLowerCase()) ||
        faq.answer.toLowerCase().includes(search.toLowerCase())
      );
    }
    
    res.json({
      success: true,
      data: faqs
    });
  } catch (error) {
    console.error("Get FAQs error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch FAQs",
      error: error.message
    });
  }
};

export const getFAQById = async (req, res) => {
  try {
    const { id } = req.params;
    const faq = await FAQ.findById(id);
    
    if (!faq) {
      return res.status(404).json({
        success: false,
        message: "FAQ not found"
      });
    }
    
    res.json({
      success: true,
      data: faq
    });
  } catch (error) {
    console.error("Get FAQ error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch FAQ",
      error: error.message
    });
  }
};

export const submitFAQFeedback = async (req, res) => {
  try {
    const { id } = req.params;
    const { helpful } = req.body;
    
    const faq = await FAQ.findById(id);
    
    if (!faq) {
      return res.status(404).json({
        success: false,
        message: "FAQ not found"
      });
    }
    
    if (helpful) {
      faq.helpful += 1;
    } else {
      faq.notHelpful += 1;
    }
    
    await faq.save();
    
    res.json({
      success: true,
      message: "Thank you for your feedback!"
    });
  } catch (error) {
    console.error("FAQ feedback error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to submit feedback",
      error: error.message
    });
  }
};

// ==================== KNOWLEDGE BASE CONTROLLERS ====================

export const getKnowledgeBase = async (req, res) => {
  try {
    const { category, search, featured } = req.query;
    
    let query = { isPublished: true };
    if (category && category !== "all") query.category = category;
    if (featured === "true") query.featured = true;
    
    let articles = await KnowledgeBase.find(query).sort({ featured: -1, createdAt: -1 });
    
    if (search && search.length > 2) {
      articles = articles.filter(article =>
        article.title.toLowerCase().includes(search.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(search.toLowerCase()) ||
        article.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()))
      );
    }
    
    res.json({
      success: true,
      data: articles
    });
  } catch (error) {
    console.error("Get knowledge base error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch knowledge base",
      error: error.message
    });
  }
};

export const getKnowledgeBaseById = async (req, res) => {
  try {
    const { id } = req.params;
    const article = await KnowledgeBase.findById(id);
    
    if (!article || !article.isPublished) {
      return res.status(404).json({
        success: false,
        message: "Article not found"
      });
    }
    
    // Increment views
    article.views += 1;
    await article.save();
    
    res.json({
      success: true,
      data: article
    });
  } catch (error) {
    console.error("Get article error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch article",
      error: error.message
    });
  }
};

export const submitArticleFeedback = async (req, res) => {
  try {
    const { id } = req.params;
    const { helpful } = req.body;
    
    const article = await KnowledgeBase.findById(id);
    
    if (!article) {
      return res.status(404).json({
        success: false,
        message: "Article not found"
      });
    }
    
    if (helpful) {
      article.helpful += 1;
    } else {
      article.notHelpful += 1;
    }
    
    await article.save();
    
    res.json({
      success: true,
      message: "Thank you for your feedback!"
    });
  } catch (error) {
    console.error("Article feedback error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to submit feedback",
      error: error.message
    });
  }
};

// ==================== CHAT CONTROLLERS ====================

export const getChatHistory = async (req, res) => {
  try {
    const { sessionId } = req.params;
    const userId = req.user?.id;
    
    const query = { sessionId };
    if (userId) query.userId = userId;
    
    const messages = await ChatMessage.find(query)
      .sort({ createdAt: 1 })
      .limit(100);
    
    res.json({
      success: true,
      data: messages
    });
  } catch (error) {
    console.error("Get chat history error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch chat history",
      error: error.message
    });
  }
};

export const saveChatMessage = async (req, res) => {
  try {
    const { sessionId, role, content, metadata } = req.body;
    const userId = req.user?.id;
    
    const message = new ChatMessage({
      sessionId,
      userId: userId || null,
      role,
      content,
      metadata
    });
    
    await message.save();
    
    res.status(201).json({
      success: true,
      data: message
    });
  } catch (error) {
    console.error("Save chat message error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to save message",
      error: error.message
    });
  }
};

// ==================== SEARCH CONTROLLER ====================

export const searchAll = async (req, res) => {
  try {
    const { q } = req.query;
    
    if (!q || q.length < 2) {
      return res.json({
        success: true,
        data: {
          faqs: [],
          knowledgeBase: []
        }
      });
    }
    
    const [faqs, knowledgeBase] = await Promise.all([
      FAQ.find({
        isActive: true,
        $or: [
          { question: { $regex: q, $options: "i" } },
          { answer: { $regex: q, $options: "i" } }
        ]
      }).limit(5),
      KnowledgeBase.find({
        isPublished: true,
        $or: [
          { title: { $regex: q, $options: "i" } },
          { excerpt: { $regex: q, $options: "i" } },
          { content: { $regex: q, $options: "i" } }
        ]
      }).limit(5)
    ]);
    
    res.json({
      success: true,
      data: {
        faqs,
        knowledgeBase
      }
    });
  } catch (error) {
    console.error("Search error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to search",
      error: error.message
    });
  }
};

// ==================== ADMIN CONTROLLERS ====================

export const adminGetAllTickets = async (req, res) => {
  try {
    const { status, priority, page = 1, limit = 20 } = req.query;
    
    const query = {};
    if (status && status !== "all") query.status = status;
    if (priority && priority !== "all") query.priority = priority;
    
    const skip = (parseInt(page) - 1) * parseInt(limit);
    
    const tickets = await SupportTicket.find(query)
      .populate("userId", "name email phone")
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit));
    
    const total = await SupportTicket.countDocuments(query);
    
    res.json({
      success: true,
      data: tickets,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / parseInt(limit))
      }
    });
  } catch (error) {
    console.error("Admin get tickets error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch tickets",
      error: error.message
    });
  }
};

export const adminAddResponse = async (req, res) => {
  try {
    const { id } = req.params;
    const { message } = req.body;
    const adminId = req.user.id;
    const adminName = req.user.name || "Support Team";
    
    const ticket = await SupportTicket.findById(id);
    
    if (!ticket) {
      return res.status(404).json({
        success: false,
        message: "Ticket not found"
      });
    }
    
    ticket.responses.push({
      message,
      isAdmin: true,
      adminName
    });
    
    ticket.status = ticket.status === "pending" ? "in-progress" : ticket.status;
    await ticket.save();
    
    // TODO: Send notification to user (email/SMS)
    
    res.json({
      success: true,
      message: "Response added successfully",
      data: ticket
    });
  } catch (error) {
    console.error("Admin add response error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to add response",
      error: error.message
    });
  }
};

export const adminResolveTicket = async (req, res) => {
  try {
    const { id } = req.params;
    
    const ticket = await SupportTicket.findById(id);
    
    if (!ticket) {
      return res.status(404).json({
        success: false,
        message: "Ticket not found"
      });
    }
    
    ticket.status = "resolved";
    ticket.resolvedAt = new Date();
    await ticket.save();
    
    res.json({
      success: true,
      message: "Ticket marked as resolved",
      data: ticket
    });
  } catch (error) {
    console.error("Admin resolve ticket error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to resolve ticket",
      error: error.message
    });
  }
};