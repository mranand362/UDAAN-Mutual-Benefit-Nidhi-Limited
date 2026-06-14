import React, { useState, useEffect, useRef } from "react";
import {
  MessageCircle,
  X,
  Send,
  Bot,
  Minimize2,
  Maximize2,
  ChevronDown,
  ChevronUp,
  Phone,
  Mail,
  MapPin,
  Clock,
  HelpCircle,
  FileText,
  User,
  CreditCard,
  Shield,
  Sparkles,
  Zap,
} from "lucide-react";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const chatEndRef = useRef(null);
  const inputRef = useRef(null);

  // Check if mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Load saved messages from localStorage
  useEffect(() => {
    const savedMessages = localStorage.getItem("chat_messages");
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  }, []);

  // Save messages to localStorage
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem("chat_messages", JSON.stringify(messages));
    }
  }, [messages]);

  // Auto-scroll to bottom
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

  // Increment unread count when chat is closed/minimized
  useEffect(() => {
    if ((!isOpen || isMinimized) && messages.length > 0) {
      const lastMessage = messages[messages.length - 1];
      if (lastMessage?.role === "assistant") {
        setUnreadCount(prev => prev + 1);
      }
    }
  }, [messages, isOpen, isMinimized]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen, isMinimized]);

  const sendMessage = async (text = input) => {
    if (!text.trim()) return;

    const userMessage = {
      id: Date.now(),
      role: "user",
      content: text,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setShowQuickReplies(false);
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const msgLower = text.toLowerCase();
      let reply = "";

      const greetings = ["hello", "hi", "hey", "greetings", "good morning", "good afternoon", "good evening"];
      if (greetings.some(g => msgLower.includes(g))) {
        reply = "👋 Hello! Welcome to UDAAN Mutual Benefit Nidhi Limited. I'm your virtual assistant. How can I help you today? I can assist with account opening, deposits, loans, KYC, and more!";
      } 
      else if (msgLower.includes("account") || msgLower.includes("open") || msgLower.includes("register")) {
        reply = "📝 **Opening an account with UDAAN is easy!**\n\n✅ **Online Process:**\n• Visit our website\n• Click 'Register'\n• Fill in your details\n• Upload KYC documents\n• Complete video KYC\n\n✅ **Offline Process:**\n• Visit any branch\n• Bring your documents\n• Fill application form\n• Complete biometric verification\n\nWould you like me to guide you step by step?";
      } 
      else if (msgLower.includes("deposit") || msgLower.includes("fd") || msgLower.includes("fixed deposit") || msgLower.includes("rd") || msgLower.includes("recurring")) {
        reply = "💰 **Deposit Schemes at UDAAN**\n\n📌 **Fixed Deposit (FD)**\n• Interest: 7% - 9.5% p.a.\n• Tenure: 12-60 months\n• Min: ₹5,000\n\n📌 **Recurring Deposit (RD)**\n• Interest: 6.5% - 8% p.a.\n• Tenure: 12-36 months\n• Min: ₹500/month\n\n📌 **Savings Account**\n• Interest: 4% p.a.\n• Zero balance option\n• Free ATM card\n\n✨ Senior citizens get +0.5% extra! Want to calculate your returns?";
      } 
      else if (msgLower.includes("loan")) {
        reply = "🏦 **Loan Products at UDAAN**\n\n✓ **Personal Loan** - Up to ₹10 lakhs\n✓ **Gold Loan** - Up to 75% of gold value\n✓ **Business Loan** - Up to ₹25 lakhs\n✓ **Vehicle Loan** - For 2/4 wheelers\n\n📊 **Interest Rates:** Starting from 10.5% p.a.\n⏱️ **Approval Time:** 24-48 hours\n📄 **Minimal Documentation**\n\nWhich loan type interests you?";
      } 
      else if (msgLower.includes("document") || msgLower.includes("kyc") || msgLower.includes("required")) {
        reply = "📋 **KYC Documents Required**\n\n**Mandatory Documents:**\n✅ Aadhaar Card\n✅ PAN Card\n✅ Passport size photo (2 copies)\n\n**Additional if address different:**\n🏠 Voter ID\n🏠 Passport\n🏠 Utility Bill (last 3 months)\n🏠 Bank Statement\n\n📱 You can upload these documents online or bring them to any branch!";
      } 
      else if (msgLower.includes("contact") || msgLower.includes("support") || msgLower.includes("help")) {
        reply = "📞 **Get in Touch with UDAAN**\n\n📱 **Phone:** +91 73977 82590 (24/7 Support)\n✉️ **Email:** support@udaannidhi.in\n💬 **Live Chat:** Available now\n🏢 **Branch:** Villupuram, Tamil Nadu\n\n⏰ **Business Hours:** Mon-Sat, 10 AM - 5 PM\n\nHow would you like to connect?";
      } 
      else if (msgLower.includes("interest") || msgLower.includes("rate") || msgLower.includes("return")) {
        reply = "📈 **Current Interest Rates**\n\n💳 **Savings Account:** 4% p.a.\n🏦 **Fixed Deposit:** 7% - 9.5% p.a.\n🔄 **Recurring Deposit:** 6.5% - 8% p.a.\n💰 **Loan:** 10.5% - 15% p.a.\n\n👴 **Senior Citizen Bonus:** +0.5%\n\n*Rates subject to change as per RBI guidelines*";
      } 
      else if (msgLower.includes("balance") || msgLower.includes("check")) {
        reply = "🔍 **Check Your Account Balance**\n\nYou can check your balance through:\n\n1️⃣ **Online Banking** - Login to your account\n2️⃣ **Mobile App** - Download from Play Store\n3️⃣ **Branch Visit** - Any UDAAN branch\n4️⃣ **Customer Care** - Call +91 73977 82590\n5️⃣ **SMS Banking** - Send BAL to XXXXX\n\nDo you need help with online banking setup?";
      } 
      else if (msgLower.includes("thanks") || msgLower.includes("thank")) {
        reply = "🙏 You're most welcome! I'm glad I could help. Is there anything else you'd like to know about UDAAN's services?";
      } 
      else if (msgLower.includes("bye") || msgLower.includes("goodbye")) {
        reply = "👋 Thank you for chatting with UDAAN! Have a great day! Feel free to come back anytime you need assistance. 🌟";
      } 
      else {
        reply = "🤖 Thank you for reaching out to UDAAN Mutual Benefit Nidhi Limited.\n\nI can help you with:\n• 📝 Account Opening\n• 💰 Deposits & Savings\n• 🏦 Loans & Credit\n• 📋 KYC Documentation\n• 📞 Contact Information\n• 📊 Interest Rates\n\nPlease let me know what you need assistance with, and I'll be happy to help!";
      }

      const assistantMessage = {
        id: Date.now() + 1,
        role: "assistant",
        content: reply,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
      
      // Show quick replies after assistant message
      setShowQuickReplies(true);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const clearChat = () => {
    setMessages([]);
    localStorage.removeItem("chat_messages");
    setUnreadCount(0);
    setShowQuickReplies(true);
  };

  const quickQuestions = [
    { text: "Open Account", icon: User, query: "How do I open an account?" },
    { text: "FD Rates", icon: CreditCard, query: "What are FD interest rates?" },
    { text: "Loan Info", icon: Shield, query: "How to apply for loan?" },
    { text: "KYC Docs", icon: FileText, query: "KYC documents required" },
    { text: "Contact", icon: Phone, query: "Contact customer support" },
    { text: "Branch", icon: MapPin, query: "Nearest branch location" },
  ];

  return (
    <>
      {/* Floating Chat Button - Mobile Optimized */}
      {!isOpen && (
        <button
          onClick={() => {
            setIsOpen(true);
            setUnreadCount(0);
          }}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-[#FDB813] to-[#fec84d] text-[#0B2A4A] rounded-full shadow-2xl hover:shadow-xl transition-all duration-300 flex items-center justify-center group active:scale-95"
        >
          <div className="relative">
            <MessageCircle size={24} className="sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
            {unreadCount > 0 && (
              <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center animate-bounce">
                {unreadCount > 9 ? "9+" : unreadCount}
              </div>
            )}
          </div>
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
        </button>
      )}

      {/* Chat Window - Full screen on mobile */}
      {isOpen && (
        <div 
          className={`fixed z-50 transition-all duration-300 ${
            isMobile 
              ? `inset-0 rounded-none ${isMinimized ? 'bottom-20 left-4 right-4 top-auto h-auto' : 'bottom-0 left-0 right-0 top-0'}`
              : `bottom-6 right-6 ${isMinimized ? "w-80" : "w-[420px]"} rounded-xl`
          }`}
        >
          <div className={`bg-white shadow-2xl flex flex-col overflow-hidden ${
            isMobile ? 'h-full rounded-none' : 'rounded-xl'
          }`}>
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-[#0B2A4A] to-[#1a3a5a] text-white p-4 flex justify-between items-center">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-[#FDB813]/20 rounded-full flex items-center justify-center">
                    <Bot className="w-5 h-5 text-[#FDB813]" />
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-[#0B2A4A]"></div>
                </div>
                <div>
                  <h3 className="font-bold text-base sm:text-lg">UDAAN Support</h3>
                  <div className="flex items-center gap-1 text-xs text-green-400">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <span>Online • 24/7</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  aria-label={isMinimized ? "Maximize" : "Minimize"}
                >
                  {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
                </button>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setIsMinimized(false);
                  }}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  aria-label="Close chat"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Chat Messages */}
                <div className={`flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50 ${isMobile ? 'h-[calc(100vh-200px)]' : 'h-96'}`}>
                  {messages.length === 0 && (
                    <div className="text-center text-gray-500 mt-8">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-[#FDB813]/20 to-[#fec84d]/20 rounded-full flex items-center justify-center">
                        <Bot className="w-8 h-8 text-[#FDB813]" />
                      </div>
                      <p className="font-semibold text-gray-700 text-lg">Hi there! 👋</p>
                      <p className="text-sm text-gray-500 mt-1">I'm UDAAN's virtual assistant.</p>
                      <p className="text-sm text-gray-500">How can I help you today?</p>
                      
                      {/* Quick Questions - Mobile Optimized */}
                      <div className="grid grid-cols-2 gap-2 mt-6">
                        {quickQuestions.map((q, idx) => {
                          const Icon = q.icon;
                          return (
                            <button
                              key={idx}
                              onClick={() => sendMessage(q.query)}
                              className="flex items-center gap-2 text-xs bg-white border border-gray-200 px-3 py-2 rounded-xl hover:border-[#FDB813] hover:bg-[#FDB813]/5 transition-all duration-200"
                            >
                              <Icon size={14} className="text-[#FDB813]" />
                              <span className="font-medium">{q.text}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} animate-fade-in`}
                    >
                      <div className={`max-w-[85%] ${msg.role === "user" ? "order-2" : "order-1"}`}>
                        <div className={`p-3 rounded-2xl ${
                          msg.role === "user" 
                            ? "bg-gradient-to-r from-[#FDB813] to-[#fec84d] text-[#0B2A4A] rounded-br-sm" 
                            : "bg-white text-gray-700 shadow-sm rounded-bl-sm"
                        }`}>
                          <p className="text-sm whitespace-pre-wrap leading-relaxed">{msg.content}</p>
                        </div>
                        <div className={`flex items-center gap-1 mt-1 text-xs text-gray-400 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                          <span>{new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                        </div>
                      </div>
                    </div>
                  ))}

                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-white text-gray-600 p-3 rounded-2xl rounded-bl-sm shadow-sm">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div ref={chatEndRef} />
                </div>

                {/* Quick Replies - Mobile Optimized */}
                {showQuickReplies && messages.length > 0 && (
                  <div className="border-t border-gray-100 bg-white p-3 overflow-x-auto whitespace-nowrap scrollbar-hide">
                    <div className="flex gap-2">
                      {quickQuestions.slice(0, 4).map((q, idx) => (
                        <button
                          key={idx}
                          onClick={() => sendMessage(q.query)}
                          className="inline-flex items-center gap-1.5 text-xs bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full hover:bg-[#FDB813] hover:text-[#0B2A4A] transition-all duration-200"
                        >
                          <q.icon size={12} />
                          {q.text}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Chat Input - Mobile Optimized */}
                <div className="border-t border-gray-200 p-3 bg-white">
                  <div className="flex items-end gap-2">
                    <div className="flex-1 relative">
                      <textarea
                        ref={inputRef}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Type your message..."
                        rows={1}
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#FDB813] focus:border-transparent outline-none text-sm resize-none bg-gray-50"
                        style={{ minHeight: "44px", maxHeight: "100px" }}
                      />
                    </div>
                    <button
                      onClick={() => sendMessage()}
                      disabled={!input.trim()}
                      className="p-2.5 bg-gradient-to-r from-[#FDB813] to-[#fec84d] text-[#0B2A4A] rounded-xl hover:shadow-lg transition-all disabled:opacity-50 disabled:hover:shadow-none active:scale-95"
                    >
                      <Send size={18} />
                    </button>
                  </div>
                  <div className="flex justify-between items-center mt-2 px-1">
                    <div className="flex items-center gap-2">
                      <Sparkles size={10} className="text-[#FDB813]" />
                      <p className="text-[10px] text-gray-400">AI-powered assistant • Instant replies</p>
                    </div>
                    {messages.length > 0 && (
                      <button
                        onClick={clearChat}
                        className="text-[10px] text-gray-400 hover:text-red-500 transition-colors"
                      >
                        Clear chat
                      </button>
                    )}
                  </div>
                </div>
              </>
            )}

            {/* Minimized View */}
            {isMinimized && (
              <div 
                className="p-4 bg-gray-50 cursor-pointer flex items-center justify-between hover:bg-gray-100 transition-colors"
                onClick={() => setIsMinimized(false)}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#FDB813]/20 rounded-full flex items-center justify-center">
                    <MessageCircle size={14} className="text-[#FDB813]" />
                  </div>
                  <p className="text-sm text-gray-600 truncate max-w-[200px]">
                    {messages.length > 0 ? messages[messages.length - 1]?.content.substring(0, 50) + "..." : "Click to start chatting..."}
                  </p>
                </div>
                <ChevronUp size={16} className="text-gray-400" />
              </div>
            )}
          </div>
        </div>
      )}

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in { animation: fade-in 0.3s ease-out; }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        
        .animate-bounce { animation: bounce 0.5s infinite; }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }
        
        .animate-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
};

export default ChatWidget;