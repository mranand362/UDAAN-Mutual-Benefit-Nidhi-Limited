import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  HelpCircle,
  MessageCircle,
  Mail,
  Phone,
  CheckCircle,
  AlertCircle,
  ChevronDown,
  ChevronUp,
  Send,
  X,
  Search,
  ThumbsUp,
  ThumbsDown,
  MessageSquare,
  Headphones,
  FileText,
  ArrowRight,
  Clock,
  Filter,
  Download,
  Trash2,
  BookOpen,
  Eye,
  Sparkles,
  Ticket,
  User,
  Calendar,
  FolderOpen,
  RefreshCw,
  Loader2,
  Lock,
  CreditCard,
  Building,
  Shield,
  Bot,
  TrendingUp,
  Star,
  Award,
  Zap,
  Globe,
} from "lucide-react";
import Navbar from "../components/Navbar";

// ==================== SAMPLE DATA (Fallback when backend is not ready) ====================
const SAMPLE_FAQS = [
  { id: "1", question: "How do I open an account with UDAAN?", answer: "You can open an account by clicking on the 'Open Account' button on our website. The process takes 5-10 minutes. You'll need your Aadhaar card, PAN card, and a passport size photo.", category: "account", helpful: 1250, notHelpful: 32 },
  { id: "2", question: "What is the minimum deposit amount?", answer: "The minimum deposit amount for opening a savings account is ₹1,000. For fixed deposits, the minimum amount is ₹5,000.", category: "deposit", helpful: 890, notHelpful: 15 },
  { id: "3", question: "What are the current FD interest rates?", answer: "Fixed Deposit interest rates range from 7% to 9.5% per annum depending on the tenure. Senior citizens get an additional 0.5% interest rate.", category: "deposit", helpful: 2100, notHelpful: 45 },
  { id: "4", question: "How do I apply for a loan?", answer: "You can apply for a loan by visiting our nearest branch or through our online loan application form. We offer personal loans, gold loans, and business loans.", category: "loan", helpful: 567, notHelpful: 23 },
  { id: "5", question: "What documents are required for KYC?", answer: "For KYC verification, you'll need: 1) Aadhaar Card, 2) PAN Card, 3) Passport size photograph, and 4) Address proof (if different from Aadhaar).", category: "kyc", helpful: 3456, notHelpful: 89 },
  { id: "6", question: "What is the maximum loan amount I can get?", answer: "Personal loans: up to ₹10 lakhs, Gold loans: up to 75% of gold value, Business loans: up to ₹25 lakhs, Home loans: up to ₹50 lakhs.", category: "loan", helpful: 678, notHelpful: 34 },
  { id: "7", question: "How can I check my account balance?", answer: "You can check your account balance by: 1) Logging into your online account, 2) Using our mobile app, 3) Visiting your nearest branch, or 4) Calling our customer care.", category: "account", helpful: 2345, notHelpful: 67 },
  { id: "8", question: "Is my money safe with UDAAN?", answer: "Yes, UDAAN Mutual Benefit Nidhi Limited is a registered Nidhi company under the Companies Act 2013 and regulated by the Ministry of Corporate Affairs, Government of India.", category: "general", helpful: 987, notHelpful: 12 },
  { id: "9", question: "What are the operating hours?", answer: "Our operating hours are Monday to Saturday, 10:00 AM to 5:00 PM. We remain closed on Sundays and public holidays.", category: "general", helpful: 654, notHelpful: 8 },
  { id: "10", question: "How can I contact customer support?", answer: "You can contact us via: Phone: +91 73977 82590, Email: support@udaannidhi.in, Live Chat available on our website, or visit our branch.", category: "general", helpful: 876, notHelpful: 23 },
];

const SAMPLE_KNOWLEDGE_BASE = [
  { id: "kb1", title: "Complete Guide to Fixed Deposits", excerpt: "Learn everything about fixed deposits - interest rates, tenure options, tax benefits, and more.", readTime: 8, views: 4567, category: "deposit" },
  { id: "kb2", title: "How to Apply for a Gold Loan", excerpt: "Step-by-step guide to applying for a gold loan with minimal documentation.", readTime: 5, views: 2345, category: "loan" },
  { id: "kb3", title: "Understanding KYC Process", excerpt: "Complete guide to KYC documentation and verification process.", readTime: 6, views: 7890, category: "kyc" },
  { id: "kb4", title: "Loan Eligibility Calculator Guide", excerpt: "Learn how to use our loan eligibility calculator to check your loan amount.", readTime: 4, views: 1234, category: "loan" },
  { id: "kb5", title: "Senior Citizen Benefits", excerpt: "Special benefits and higher interest rates for senior citizens.", readTime: 3, views: 3456, category: "account" },
  { id: "kb6", title: "Online Banking Security Tips", excerpt: "Best practices to keep your online banking account secure.", readTime: 7, views: 5678, category: "security" },
  { id: "kb7", title: "Understanding Nidhi Companies", excerpt: "What are Nidhi companies and how they differ from traditional banks.", readTime: 10, views: 2341, category: "general" },
  { id: "kb8", title: "Tax Benefits on Deposits", excerpt: "Learn about tax deductions available on fixed deposits under Section 80C.", readTime: 6, views: 4321, category: "deposit" },
  { id: "kb9", title: "How to Calculate Loan EMI", excerpt: "Step-by-step guide to calculating your loan EMI using our calculator.", readTime: 5, views: 3452, category: "loan" },
];

// ==================== COMPONENTS ====================

const LoadingSpinner = () => (
  <div className="flex items-center justify-center p-8">
    <div className="relative">
      <div className="w-12 h-12 border-4 border-[#FDB813]/20 rounded-full"></div>
      <div className="absolute top-0 left-0 w-12 h-12 border-4 border-[#FDB813] rounded-full animate-spin border-t-transparent"></div>
    </div>
  </div>
);

const Toast = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);
  
  const icons = {
    success: <CheckCircle className="w-5 h-5 text-green-500" />,
    error: <AlertCircle className="w-5 h-5 text-red-500" />,
    info: <AlertCircle className="w-5 h-5 text-blue-500" />,
    warning: <AlertCircle className="w-5 h-5 text-yellow-500" />
  };
  
  const bgColors = {
    success: "bg-green-50 border-green-200",
    error: "bg-red-50 border-red-200",
    info: "bg-blue-50 border-blue-200",
    warning: "bg-yellow-50 border-yellow-200"
  };
  
  const textColors = {
    success: "text-green-800",
    error: "text-red-800",
    info: "text-blue-800",
    warning: "text-yellow-800"
  };
  
  return (
    <div className={`fixed top-4 right-4 z-50 flex items-center gap-3 px-4 py-3 rounded-lg border shadow-lg animate-slide-in ${bgColors[type]} ${textColors[type]}`}>
      {icons[type]}
      <span className="text-sm font-medium">{message}</span>
      <button onClick={onClose} className="ml-2 hover:opacity-70">
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

const FAQCard = ({ faq, isOpen, onToggle, onFeedback }) => {
  const [feedbackGiven, setFeedbackGiven] = useState(false);
  const [localHelpful, setLocalHelpful] = useState(faq.helpful || 0);
  const [localNotHelpful, setLocalNotHelpful] = useState(faq.notHelpful || 0);
  
  const handleFeedback = (helpful) => {
    if (feedbackGiven) return;
    
    if (helpful) {
      setLocalHelpful(prev => prev + 1);
    } else {
      setLocalNotHelpful(prev => prev + 1);
    }
    setFeedbackGiven(true);
    onFeedback(faq.id, helpful);
    
    setTimeout(() => setFeedbackGiven(false), 3000);
  };
  
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center py-4 px-3 hover:bg-gray-50 transition-colors text-left"
      >
        <div className="flex items-start gap-3 flex-1">
          <div className="mt-1 flex-shrink-0">
            {isOpen ? (
              <ChevronUp className="w-5 h-5 text-[#FDB813]" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-400" />
            )}
          </div>
          <div>
            <h4 className="font-medium text-gray-800">{faq.question}</h4>
            {faq.category && (
              <span className="inline-block mt-1 px-2 py-0.5 bg-gray-100 text-gray-500 text-xs rounded-full capitalize">
                {faq.category}
              </span>
            )}
          </div>
        </div>
      </button>
      
      {isOpen && (
        <div className="pb-4 pl-11 pr-3">
          <div className="text-gray-600 leading-relaxed mb-4">
            <p>{faq.answer}</p>
          </div>
          <div className="flex items-center gap-4 pt-2 text-sm">
            <span className="text-gray-500">Was this helpful?</span>
            <button
              onClick={() => handleFeedback(true)}
              disabled={feedbackGiven}
              className="flex items-center gap-1 text-green-600 hover:text-green-700 transition-colors disabled:opacity-50"
            >
              <ThumbsUp className="w-4 h-4" /> Yes ({localHelpful})
            </button>
            <button
              onClick={() => handleFeedback(false)}
              disabled={feedbackGiven}
              className="flex items-center gap-1 text-red-600 hover:text-red-700 transition-colors disabled:opacity-50"
            >
              <ThumbsDown className="w-4 h-4" /> No ({localNotHelpful})
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const KnowledgeBaseCard = ({ article, onClick }) => (
  <div 
    onClick={() => onClick && onClick(article)}
    className="bg-white rounded-xl p-5 border border-gray-100 hover:shadow-lg transition-all duration-300 cursor-pointer group"
  >
    <div className="flex items-start gap-3">
      <div className="w-10 h-10 bg-[#FDB813]/10 rounded-lg flex items-center justify-center group-hover:bg-[#FDB813]/20 transition-colors flex-shrink-0">
        <BookOpen className="w-5 h-5 text-[#FDB813]" />
      </div>
      <div className="flex-1">
        <h4 className="font-semibold text-gray-800 group-hover:text-[#0B2A4A] transition-colors mb-1 line-clamp-1">
          {article.title}
        </h4>
        <p className="text-sm text-gray-500 line-clamp-2">{article.excerpt}</p>
        <div className="flex items-center gap-3 mt-2 text-xs text-gray-400">
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" /> {article.readTime} min read
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Eye className="w-3 h-3" /> {article.views.toLocaleString()} views
          </span>
        </div>
      </div>
      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#FDB813] transition-colors flex-shrink-0 mt-2" />
    </div>
  </div>
);

const TicketCard = ({ ticket, onView }) => {
  const getPriorityConfig = (priority) => {
    const configs = {
      high: { color: "text-red-700 bg-red-100", icon: <AlertCircle className="w-3 h-3" />, label: "High" },
      medium: { color: "text-yellow-700 bg-yellow-100", icon: <Clock className="w-3 h-3" />, label: "Medium" },
      low: { color: "text-green-700 bg-green-100", icon: <CheckCircle className="w-3 h-3" />, label: "Low" }
    };
    return configs[priority] || configs.medium;
  };
  
  const getStatusConfig = (status) => {
    const configs = {
      resolved: { color: "text-green-700 bg-green-100", icon: <CheckCircle className="w-3 h-3" />, label: "Resolved" },
      "in-progress": { color: "text-blue-700 bg-blue-100", icon: <RefreshCw className="w-3 h-3" />, label: "In Progress" },
      pending: { color: "text-yellow-700 bg-yellow-100", icon: <Clock className="w-3 h-3" />, label: "Pending" },
      closed: { color: "text-gray-700 bg-gray-100", icon: <X className="w-3 h-3" />, label: "Closed" }
    };
    return configs[status] || configs.pending;
  };
  
  const priorityConfig = getPriorityConfig(ticket.priority);
  const statusConfig = getStatusConfig(ticket.status);
  
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-5 border border-gray-100">
      <div className="flex justify-between items-start mb-3">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-[#0B2A4A] mb-2">{ticket.subject}</h3>
          <div className="flex flex-wrap gap-2 mb-3">
            <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${priorityConfig.color}`}>
              {priorityConfig.icon} {priorityConfig.label} Priority
            </span>
            <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${statusConfig.color}`}>
              {statusConfig.icon} {statusConfig.label}
            </span>
            <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs flex items-center gap-1 capitalize">
              <FolderOpen className="w-3 h-3" /> {ticket.category}
            </span>
          </div>
          <p className="text-gray-600 text-sm line-clamp-2">{ticket.message}</p>
        </div>
        <button
          onClick={() => onView(ticket)}
          className="p-2 text-gray-400 hover:text-[#FDB813] transition-colors flex-shrink-0"
          title="View Details"
        >
          <Eye className="w-4 h-4" />
        </button>
      </div>
      
      <div className="flex justify-between items-center text-sm text-gray-500 pt-3 border-t border-gray-100">
        <span className="flex items-center gap-1">
          <Calendar className="w-3 h-3" />
          {new Date(ticket.createdAt).toLocaleDateString()}
        </span>
        <span className="flex items-center gap-1">
          <MessageSquare className="w-3 h-3" />
          {ticket.responses?.length || 0} responses
        </span>
      </div>
    </div>
  );
};

// ==================== MAIN COMPONENT ====================
const HelpSupport = () => {
  const [activeTab, setActiveTab] = useState("faq");
  const [tickets, setTickets] = useState([]);
  const [faqs, setFaqs] = useState(SAMPLE_FAQS);
  const [knowledgeBase, setKnowledgeBase] = useState(SAMPLE_KNOWLEDGE_BASE);
  const [selectedFaqId, setSelectedFaqId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searching, setSearching] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [showTicketModal, setShowTicketModal] = useState(false);
  const [ticketResponse, setTicketResponse] = useState("");
  const [ticketForm, setTicketForm] = useState({
    subject: "",
    category: "",
    priority: "medium",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState(null);
  const [filterPriority, setFilterPriority] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const searchInputRef = React.useRef(null);
  
  // Check login status
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);
  
  // Load saved tickets from localStorage
  useEffect(() => {
    const savedTickets = localStorage.getItem("support_tickets");
    if (savedTickets) {
      setTickets(JSON.parse(savedTickets));
    }
  }, []);
  
  // Save tickets to localStorage
  useEffect(() => {
    if (tickets.length > 0) {
      localStorage.setItem("support_tickets", JSON.stringify(tickets));
    }
  }, [tickets]);
  
  // Search handler
  useEffect(() => {
    if (searchQuery.length > 2) {
      handleSearch();
    } else if (searchQuery.length === 0) {
      setSearchResults([]);
    }
  }, [searchQuery]);
  
  const handleSearch = () => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }
    
    setSearching(true);
    setTimeout(() => {
      const results = faqs.filter(faq =>
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(results);
      setSearching(false);
    }, 300);
  };
  
  const handleTicketSubmit = (e) => {
    e.preventDefault();
    
    if (!ticketForm.subject || !ticketForm.category || !ticketForm.message) {
      showToast("Please fill in all required fields", "error");
      return;
    }
    
    setSubmitting(true);
    
    const newTicket = {
      id: Date.now().toString(),
      ticketId: `TKT${Date.now()}${Math.floor(Math.random() * 1000)}`,
      subject: ticketForm.subject,
      category: ticketForm.category,
      priority: ticketForm.priority,
      message: ticketForm.message,
      status: "pending",
      responses: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    
    const updatedTickets = [newTicket, ...tickets];
    setTickets(updatedTickets);
    localStorage.setItem("support_tickets", JSON.stringify(updatedTickets));
    
    showToast(`Ticket created successfully! ID: ${newTicket.ticketId}`, "success");
    setTicketForm({ subject: "", category: "", priority: "medium", message: "" });
    setActiveTab("tickets");
    setSubmitting(false);
  };
  
  const handleTicketResponse = () => {
    if (!ticketResponse.trim() || !selectedTicket) return;
    
    const updatedTickets = tickets.map(ticket => {
      if (ticket.id === selectedTicket.id) {
        return {
          ...ticket,
          responses: [...(ticket.responses || []), {
            message: ticketResponse,
            createdAt: new Date().toISOString()
          }],
          updatedAt: new Date().toISOString(),
          status: "in-progress"
        };
      }
      return ticket;
    });
    
    setTickets(updatedTickets);
    localStorage.setItem("support_tickets", JSON.stringify(updatedTickets));
    setTicketResponse("");
    showToast("Response added successfully", "success");
    
    const updatedTicket = updatedTickets.find(t => t.id === selectedTicket.id);
    setSelectedTicket(updatedTicket);
  };
  
  const handleFaqFeedback = (faqId, helpful) => {
    setFaqs(prev => prev.map(faq => {
      if (faq.id === faqId) {
        return {
          ...faq,
          helpful: (faq.helpful || 0) + (helpful ? 1 : 0),
          notHelpful: (faq.notHelpful || 0) + (helpful ? 0 : 1)
        };
      }
      return faq;
    }));
    
    showToast("Thank you for your feedback!", "success");
  };
  
  const showToast = (message, type = "info") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 5000);
  };
  
  const getFilteredTickets = () => {
    let filtered = [...tickets];
    if (filterPriority !== "all") {
      filtered = filtered.filter(t => t.priority === filterPriority);
    }
    if (filterStatus !== "all") {
      filtered = filtered.filter(t => t.status === filterStatus);
    }
    return filtered;
  };
  
  const filteredTickets = getFilteredTickets();
  
  const categories = [
    { id: "account", name: "Account", icon: User, color: "blue" },
    { id: "deposit", name: "Deposits", icon: CreditCard, color: "green" },
    { id: "loan", name: "Loans", icon: Building, color: "purple" },
    { id: "kyc", name: "KYC", icon: Shield, color: "orange" },
    { id: "general", name: "General", icon: HelpCircle, color: "gray" },
  ];
  
  const stats = [
    { label: "FAQs Available", value: faqs.length, icon: HelpCircle, color: "blue" },
    { label: "Knowledge Articles", value: knowledgeBase.length, icon: BookOpen, color: "green" },
    { label: "Tickets Resolved", value: tickets.filter(t => t.status === "resolved").length, icon: CheckCircle, color: "purple" },
    { label: "Active Tickets", value: tickets.filter(t => t.status !== "resolved" && t.status !== "closed").length, icon: Ticket, color: "orange" },
  ];
  
  return (
    <>
      <Navbar />
      
      {/* Toast Notifications */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#0B2A4A] via-[#0f3a5a] to-[#1a4a6a] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
         
          <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 py-16 lg:py-20 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm mb-6 shadow-lg">
              <div className="relative">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 w-2 h-2 bg-green-400 rounded-full animate-ping opacity-75"></div>
              </div>
              <span className="font-medium">24/7 Customer Support</span>
              <span className="w-1 h-1 bg-white/30 rounded-full"></span>
              <span className="text-[#FDB813]">✨ AI-Powered Assistance</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 leading-tight">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                How Can We Help
              </span>
              <br />
              <span className="text-[#FDB813] relative inline-block">
                You Today?
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#FDB813]/30" viewBox="0 0 200 10" preserveAspectRatio="none">
                  <path d="M0 5 Q25 0 50 5 T100 5 T150 5 T200 5" stroke="currentColor" fill="none" strokeWidth="2"/>
                </svg>
              </span>
            </h1>
            
            <p className="text-base sm:text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
              Get instant answers from our knowledge base, browse FAQs, or connect with our support team. 
              We're here to ensure your success.
            </p>
            
            <div className="max-w-2xl mx-auto">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FDB813] to-[#fec84d] rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
                <div className="relative bg-white rounded-2xl shadow-2xl">
                  <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-[#0B2A4A]/40" size={22} />
                  <input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Search for answers, guides, or topics..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-14 pr-36 py-5 text-gray-800 rounded-2xl focus:outline-none text-base lg:text-lg"
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
                    {searching ? (
                      <Loader2 className="w-5 h-5 text-[#FDB813] animate-spin" />
                    ) : (
                      <button
                        onClick={handleSearch}
                        className="px-5 py-2 bg-gradient-to-r from-[#FDB813] to-[#fec84d] text-[#0B2A4A] rounded-xl font-semibold text-sm hover:shadow-lg transition-all duration-300 flex items-center gap-2"
                      >
                        <Search size={16} />
                        Search
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-12 lg:h-16" viewBox="0 0 1200 120" preserveAspectRatio="none" fill="#f3f4f6">
            <path d="M0,64 C240,96 360,32 600,32 C840,32 960,96 1200,64 L1200,120 L0,120 Z" className="opacity-30"></path>
            <path d="M0,32 C240,0 360,64 600,64 C840,64 960,0 1200,32 L1200,120 L0,120 Z" className="opacity-60"></path>
            <path d="M0,0 C240,32 360,96 600,96 C840,96 960,32 1200,0 L1200,120 L0,120 Z"></path>
          </svg>
        </div>
      </div>
      
      <div className="bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 py-8 lg:py-12">
          
          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              const colorClasses = {
                blue: "bg-blue-50 text-blue-600",
                green: "bg-green-50 text-green-600",
                purple: "bg-purple-50 text-purple-600",
                orange: "bg-orange-50 text-orange-600",
              };
              return (
                <div key={idx} className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 ${colorClasses[stat.color]} rounded-lg flex items-center justify-center`}>
                      <Icon size={20} />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                      <p className="text-xs text-gray-500">{stat.label}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Quick Actions */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            <a
              href="tel:+917397782590"
              className="flex flex-col items-center gap-2 p-3 bg-white rounded-xl hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-[#FDB813]/10 rounded-full flex items-center justify-center group-hover:bg-[#FDB813]/20 transition-colors">
                <Phone className="w-6 h-6 text-[#FDB813]" />
              </div>
              <span className="text-xs font-medium text-gray-600">Call Us</span>
            </a>
            
            <a
              href="mailto:support@udaannidhi.in"
              className="flex flex-col items-center gap-2 p-3 bg-white rounded-xl hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-[#FDB813]/10 rounded-full flex items-center justify-center group-hover:bg-[#FDB813]/20 transition-colors">
                <Mail className="w-6 h-6 text-[#FDB813]" />
              </div>
              <span className="text-xs font-medium text-gray-600">Email Us</span>
            </a>
            
            <button
              onClick={() => setActiveTab("knowledge")}
              className="flex flex-col items-center gap-2 p-3 bg-white rounded-xl hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-[#FDB813]/10 rounded-full flex items-center justify-center group-hover:bg-[#FDB813]/20 transition-colors">
                <BookOpen className="w-6 h-6 text-[#FDB813]" />
              </div>
              <span className="text-xs font-medium text-gray-600">Guides</span>
            </button>
            
            <button
              onClick={() => setActiveTab("new-ticket")}
              className="flex flex-col items-center gap-2 p-3 bg-white rounded-xl hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-[#FDB813]/10 rounded-full flex items-center justify-center group-hover:bg-[#FDB813]/20 transition-colors">
                <Ticket className="w-6 h-6 text-[#FDB813]" />
              </div>
              <span className="text-xs font-medium text-gray-600">New Ticket</span>
            </button>
          </div>
          
          {/* Search Results */}
          {searchResults.length > 0 && searchQuery.length > 2 && (
            <div className="mb-8 bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="bg-[#0B2A4A] px-6 py-3">
                <h3 className="text-white font-semibold flex items-center gap-2">
                  <Search className="w-4 h-4" />
                  Search Results ({searchResults.length})
                </h3>
              </div>
              <div className="divide-y divide-gray-100 max-h-96 overflow-y-auto">
                {searchResults.map(result => (
                  <div key={result.id} className="p-4 hover:bg-gray-50 transition-colors">
                    <h4 className="font-medium text-[#0B2A4A] mb-2">{result.question}</h4>
                    <p className="text-gray-600 text-sm">{result.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Main Tabs */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="border-b border-gray-200 overflow-x-auto">
              <div className="flex gap-1 px-4 min-w-max">
                <button
                  onClick={() => setActiveTab("faq")}
                  className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-all whitespace-nowrap ${
                    activeTab === "faq"
                      ? "text-[#FDB813] border-b-2 border-[#FDB813]"
                      : "text-gray-600 hover:text-[#0B2A4A]"
                  }`}
                >
                  <HelpCircle size={18} />
                  FAQs                </button>
                <button
                  onClick={() => setActiveTab("tickets")}
                  className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-all whitespace-nowrap ${
                    activeTab === "tickets"
                      ? "text-[#FDB813] border-b-2 border-[#FDB813]"
                      : "text-gray-600 hover:text-[#0B2A4A]"
                  }`}
                >
                  <Ticket size={18} />
                  My Tickets
                  {tickets.length > 0 && (
                    <span className="ml-1 px-1.5 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">
                      {tickets.length}
                    </span>
                  )}
                </button>
                <button
                  onClick={() => setActiveTab("new-ticket")}
                  className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-all whitespace-nowrap ${
                    activeTab === "new-ticket"
                      ? "text-[#FDB813] border-b-2 border-[#FDB813]"
                      : "text-gray-600 hover:text-[#0B2A4A]"
                  }`}
                >
                  <MessageSquare size={18} />
                  New Ticket
                </button>
                <button
                  onClick={() => setActiveTab("knowledge")}
                  className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-all whitespace-nowrap ${
                    activeTab === "knowledge"
                      ? "text-[#FDB813] border-b-2 border-[#FDB813]"
                      : "text-gray-600 hover:text-[#0B2A4A]"
                  }`}
                >
                  <BookOpen size={18} />
                  Knowledge Base
                </button>
              </div>
            </div>
            
            <div className="p-6">
              {/* FAQ Tab */}
              {activeTab === "faq" && (
                <div>
                  <div className="mb-6">
                    <h2 className="text-xl font-semibold text-[#0B2A4A] mb-2">Frequently Asked Questions</h2>
                    <p className="text-gray-500 text-sm">Find quick answers to common questions about our services</p>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {categories.map(category => {
                      const categoryFaqs = faqs.filter(f => f.category === category.id);
                      if (categoryFaqs.length === 0) return null;
                      
                      return (
                        <div key={category.id} className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm">
                          <div className="bg-gradient-to-r from-[#0B2A4A] to-[#1a3a5a] px-5 py-3">
                            <div className="flex items-center gap-2">
                              <category.icon className="w-4 h-4 text-[#FDB813]" />
                              <h3 className="text-white font-semibold capitalize">{category.name} FAQs</h3>
                            </div>
                          </div>
                          <div className="divide-y divide-gray-100 max-h-[400px] overflow-y-auto">
                            {categoryFaqs.map(faq => (
                              <FAQCard
                                key={faq.id}
                                faq={faq}
                                isOpen={selectedFaqId === faq.id}
                                onToggle={() => setSelectedFaqId(selectedFaqId === faq.id ? null : faq.id)}
                                onFeedback={handleFaqFeedback}
                              />
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
              
              {/* Tickets Tab */}
              {activeTab === "tickets" && (
                <div>
                  <div className="flex justify-between items-center flex-wrap gap-4 mb-6">
                    <div>
                      <h2 className="text-xl font-semibold text-[#0B2A4A] mb-1">Support Tickets</h2>
                      <p className="text-gray-500 text-sm">Track and manage your support requests</p>
                    </div>
                    {tickets.length > 0 && (
                      <button
                        onClick={() => {
                          localStorage.removeItem("support_tickets");
                          setTickets([]);
                          showToast("All tickets cleared", "info");
                        }}
                        className="flex items-center gap-2 px-3 py-1.5 text-sm text-red-600 border border-red-200 rounded-lg hover:bg-red-50 transition-colors"
                      >
                        <Trash2 size={16} />
                        Clear All
                      </button>
                    )}
                  </div>
                  
                  {tickets.length > 0 && (
                    <div className="flex flex-wrap gap-3 mb-6">
                      <select
                        value={filterPriority}
                        onChange={(e) => setFilterPriority(e.target.value)}
                        className="px-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FDB813] focus:border-transparent outline-none"
                      >
                        <option value="all">All Priorities</option>
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                      </select>
                      <select
                        value={filterStatus}
                        onChange={(e) => setFilterStatus(e.target.value)}
                        className="px-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FDB813] focus:border-transparent outline-none"
                      >
                        <option value="all">All Status</option>
                        <option value="pending">Pending</option>
                        <option value="in-progress">In Progress</option>
                        <option value="resolved">Resolved</option>
                        <option value="closed">Closed</option>
                      </select>
                      {(filterPriority !== "all" || filterStatus !== "all") && (
                        <button
                          onClick={() => {
                            setFilterPriority("all");
                            setFilterStatus("all");
                          }}
                          className="px-3 py-1.5 text-sm text-gray-500 hover:text-[#0B2A4A] transition-colors"
                        >
                          Clear Filters
                        </button>
                      )}
                    </div>
                  )}
                  
                  {!isLoggedIn ? (
                    <div className="text-center py-12 bg-gray-50 rounded-xl">
                      <Lock className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                      <h3 className="text-xl font-semibold text-gray-600 mb-2">Login Required</h3>
                      <p className="text-gray-500 mb-4">Please login to view and manage your support tickets</p>
                      <Link
                        to="/login"
                        className="inline-flex items-center gap-2 px-6 py-2 bg-[#FDB813] text-[#0B2A4A] rounded-lg font-semibold hover:bg-[#fec84d] transition-colors"
                      >
                        Login Now
                      </Link>
                    </div>
                  ) : tickets.length === 0 ? (
                    <div className="text-center py-12 bg-gray-50 rounded-xl">
                      <FileText className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                      <h3 className="text-xl font-semibold text-gray-600 mb-2">No Support Tickets</h3>
                      <p className="text-gray-500 mb-4">You haven't created any support tickets yet</p>
                      <button
                        onClick={() => setActiveTab("new-ticket")}
                        className="inline-flex items-center gap-2 px-6 py-2 bg-[#FDB813] text-[#0B2A4A] rounded-lg font-semibold hover:bg-[#fec84d] transition-colors"
                      >
                        <MessageSquare size={18} />
                        Create New Ticket
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {filteredTickets.map(ticket => (
                        <TicketCard
                          key={ticket.id}
                          ticket={ticket}
                          onView={(t) => {
                            setSelectedTicket(t);
                            setShowTicketModal(true);
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              )}
              
              {/* New Ticket Tab */}
              {activeTab === "new-ticket" && (
                <div className="max-w-3xl mx-auto">
                  <div className="mb-6">
                    <h2 className="text-xl font-semibold text-[#0B2A4A] mb-1">Create Support Ticket</h2>
                    <p className="text-gray-500 text-sm">Submit a request and our team will get back to you within 24 hours</p>
                  </div>
                  
                  {!isLoggedIn ? (
                    <div className="text-center py-12 bg-gray-50 rounded-xl">
                      <Lock className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                      <h3 className="text-xl font-semibold text-gray-600 mb-2">Login Required</h3>
                      <p className="text-gray-500 mb-4">Please login to create a support ticket</p>
                      <Link
                        to="/login"
                        className="inline-flex items-center gap-2 px-6 py-2 bg-[#FDB813] text-[#0B2A4A] rounded-lg font-semibold hover:bg-[#fec84d] transition-colors"
                      >
                        Login Now
                      </Link>
                    </div>
                  ) : (
                    <form onSubmit={handleTicketSubmit} className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Subject <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={ticketForm.subject}
                          onChange={(e) => setTicketForm(prev => ({ ...prev, subject: e.target.value }))}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FDB813] focus:border-transparent outline-none"
                          placeholder="Brief description of your issue"
                          required
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Category <span className="text-red-500">*</span>
                          </label>
                          <select
                            value={ticketForm.category}
                            onChange={(e) => setTicketForm(prev => ({ ...prev, category: e.target.value }))}
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FDB813] focus:border-transparent outline-none"
                            required
                          >
                            <option value="">Select Category</option>
                            <option value="account">Account Related</option>
                            <option value="deposit">Deposit Related</option>
                            <option value="loan">Loan Related</option>
                            <option value="technical">Technical Issue</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
                          <select
                            value={ticketForm.priority}
                            onChange={(e) => setTicketForm(prev => ({ ...prev, priority: e.target.value }))}
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FDB813] focus:border-transparent outline-none"
                          >
                            <option value="low">Low - General inquiry</option>
                            <option value="medium">Medium - Need assistance</option>
                            <option value="high">High - Urgent issue</option>
                          </select>
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          value={ticketForm.message}
                          onChange={(e) => setTicketForm(prev => ({ ...prev, message: e.target.value }))}
                          rows={6}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FDB813] focus:border-transparent outline-none"
                          placeholder="Please describe your issue in detail. Include any relevant information that might help us assist you better."
                          required
                        />
                      </div>
                      
                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full py-3 bg-gradient-to-r from-[#FDB813] to-[#fec84d] text-[#0B2A4A] rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                      >
                        {submitting ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          <>
                            <Send size={18} />
                            Submit Ticket
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              )}
              
              {/* Knowledge Base Tab */}
              {activeTab === "knowledge" && (
                <div>
                  <div className="mb-6">
                    <h2 className="text-xl font-semibold text-[#0B2A4A] mb-1">Knowledge Base</h2>
                    <p className="text-gray-500 text-sm">Guides, tutorials, and resources to help you</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {knowledgeBase.map(article => (
                      <KnowledgeBaseCard
                        key={article.id}
                        article={article}
                        onClick={() => {
                          showToast(`Opening: ${article.title}`, "info");
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Ticket Detail Modal */}
      {showTicketModal && selectedTicket && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold text-[#0B2A4A]">{selectedTicket.subject}</h3>
                <p className="text-sm text-gray-500">Ticket ID: {selectedTicket.ticketId}</p>
              </div>
              <button
                onClick={() => {
                  setShowTicketModal(false);
                  setSelectedTicket(null);
                  setTicketResponse("");
                }}
                className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-5 space-y-5">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <User className="w-4 h-4 text-gray-400" />
                  <span className="text-sm font-medium text-gray-700">Your Message</span>
                </div>
                <p className="text-gray-600">{selectedTicket.message}</p>
                <div className="mt-2 text-xs text-gray-400">
                  {new Date(selectedTicket.createdAt).toLocaleString()}
                </div>
              </div>
              
              {selectedTicket.responses?.map((response, idx) => (
                <div key={idx} className="bg-[#FDB813]/5 rounded-lg p-4 border-l-4 border-[#FDB813]">
                  <div className="flex items-center gap-2 mb-2">
                    <Headphones className="w-4 h-4 text-[#FDB813]" />
                    <span className="text-sm font-medium text-[#0B2A4A]">Support Team</span>
                  </div>
                  <p className="text-gray-600">{response.message}</p>
                  <div className="mt-2 text-xs text-gray-400">
                    {new Date(response.createdAt).toLocaleString()}
                  </div>
                </div>
              ))}
              
              {selectedTicket.status !== "resolved" && selectedTicket.status !== "closed" && (
                <div className="border-t border-gray-200 pt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Add Response</label>
                  <textarea
                    value={ticketResponse}
                    onChange={(e) => setTicketResponse(e.target.value)}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FDB813] focus:border-transparent outline-none"
                    placeholder="Type your response here..."
                  />
                  <button
                    onClick={handleTicketResponse}
                    disabled={!ticketResponse.trim()}
                    className="mt-3 px-4 py-2 bg-[#FDB813] text-[#0B2A4A] rounded-lg font-semibold hover:bg-[#fec84d] transition-colors disabled:opacity-50 flex items-center gap-2"
                  >
                    <Send size={16} />
                    Send Response
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        @keyframes slide-in {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-600 { animation-delay: 0.6s; }
        .animation-delay-800 { animation-delay: 0.8s; }
        .animate-slide-in { animation: slide-in 0.3s ease-out; }
        .animate-fade-in-up { animation: fade-in-up 0.6s ease-out forwards; opacity: 0; }
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </>
  );
};

export default HelpSupport;