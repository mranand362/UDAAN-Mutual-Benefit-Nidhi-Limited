import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json"
  }
});

// Add token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// ==================== FAQ SERVICES ====================
export const getFAQs = async (category = "all", search = "") => {
  const params = new URLSearchParams();
  if (category !== "all") params.append("category", category);
  if (search) params.append("search", search);
  
  const response = await api.get(`/support/faqs?${params}`);
  return response.data;
};

export const getFAQById = async (id) => {
  const response = await api.get(`/support/faqs/${id}`);
  return response.data;
};

export const submitFAQFeedback = async (id, helpful) => {
  const response = await api.post(`/support/faqs/${id}/feedback`, { helpful });
  return response.data;
};

// ==================== KNOWLEDGE BASE SERVICES ====================
export const getKnowledgeBase = async (category = "all", search = "", featured = false) => {
  const params = new URLSearchParams();
  if (category !== "all") params.append("category", category);
  if (search) params.append("search", search);
  if (featured) params.append("featured", "true");
  
  const response = await api.get(`/support/knowledge-base?${params}`);
  return response.data;
};

export const getKnowledgeBaseById = async (id) => {
  const response = await api.get(`/support/knowledge-base/${id}`);
  return response.data;
};

export const submitArticleFeedback = async (id, helpful) => {
  const response = await api.post(`/support/knowledge-base/${id}/feedback`, { helpful });
  return response.data;
};

// ==================== TICKET SERVICES ====================
export const createTicket = async (ticketData) => {
  const response = await api.post("/support/tickets", ticketData);
  return response.data;
};

export const getUserTickets = async (status = "all", priority = "all", page = 1) => {
  const params = new URLSearchParams();
  if (status !== "all") params.append("status", status);
  if (priority !== "all") params.append("priority", priority);
  params.append("page", page);
  
  const response = await api.get(`/support/tickets?${params}`);
  return response.data;
};

export const getTicketById = async (id) => {
  const response = await api.get(`/support/tickets/${id}`);
  return response.data;
};

export const addTicketResponse = async (id, message) => {
  const response = await api.post(`/support/tickets/${id}/responses`, { message });
  return response.data;
};

export const closeTicket = async (id) => {
  const response = await api.put(`/support/tickets/${id}/close`);
  return response.data;
};

export const rateTicket = async (id, rating, feedback) => {
  const response = await api.post(`/support/tickets/${id}/rate`, { rating, feedback });
  return response.data;
};

// ==================== CHAT SERVICES ====================
export const getChatHistory = async (sessionId) => {
  const response = await api.get(`/support/chat/history/${sessionId}`);
  return response.data;
};

export const saveChatMessage = async (sessionId, role, content, metadata = {}) => {
  const response = await api.post("/support/chat/messages", {
    sessionId,
    role,
    content,
    metadata
  });
  return response.data;
};

// ==================== SEARCH SERVICES ====================
export const searchAll = async (query) => {
  const response = await api.get(`/support/search?q=${encodeURIComponent(query)}`);
  return response.data;
};