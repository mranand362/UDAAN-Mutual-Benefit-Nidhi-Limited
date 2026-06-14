import React, { useState, useEffect, useRef } from "react";
import {
  MessageCircle,
  X,
  Send,
  Bot,
  Minimize2,
  Maximize2,
  ChevronDown,
  ChevronUp
} from "lucide-react";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const chatEndRef = useRef(null);

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
  }, [messages]);

  // Increment unread count when chat is closed/minimized and new message arrives
  useEffect(() => {
    if ((!isOpen || isMinimized) && messages.length > 0) {
      const lastMessage = messages[messages.length - 1];
      if (lastMessage?.role === "assistant") {
        setUnreadCount(prev => prev + 1);
      }
    }
  }, [messages, isOpen, isMinimized]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = {
      id: Date.now(),
      role: "user",
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const msgLower = input.toLowerCase();
      let reply = "";

      if (msgLower.includes("account") || msgLower.includes("open")) {
        reply = "You can open an account by clicking on the 'Open Account' button on our website. The process takes 5-10 minutes. You'll need your Aadhaar card, PAN card, and a passport size photo. Would you like me to guide you through the process?";
      } else if (msgLower.includes("deposit") || msgLower.includes("fd") || msgLower.includes("fixed deposit")) {
        reply = "We offer Fixed Deposits with interest rates ranging from 7% to 9.5% per annum. The minimum deposit amount is ₹1,000 and tenures range from 12 to 60 months. Senior citizens get an additional 0.5% interest rate. Would you like to calculate your returns?";
      } else if (msgLower.includes("loan")) {
        reply = "We provide various loan products including Personal Loans (up to ₹10 lakhs), Gold Loans (up to 75% of gold value), and Business Loans (up to ₹25 lakhs). Interest rates start from 10.5% per annum. What type of loan are you interested in?";
      } else if (msgLower.includes("document") || msgLower.includes("kyc")) {
        reply = "For KYC verification, you'll need:\n• Aadhaar Card\n• PAN Card\n• Passport size photograph\n• Address proof (if different from Aadhaar)\n\nYou can upload these documents during the online application process.";
      } else if (msgLower.includes("contact") || msgLower.includes("support")) {
        reply = "You can reach us through:\n• Phone: +91 73977 82590 (Mon-Sat, 10 AM - 5 PM)\n• Email: support@udaannidhi.in\n• Live Chat: Available now\n• Branch Visit: Our branch office";
      } else if (msgLower.includes("interest") || msgLower.includes("rate")) {
        reply = "Current interest rates:\n• Savings Account: 4% p.a.\n• Fixed Deposits: 7% - 9.5% p.a.\n• Recurring Deposits: 6.5% - 8% p.a.\n• Loans: 10.5% - 15% p.a.";
      } else if (msgLower.includes("balance")) {
        reply = "You can check your account balance by:\n1. Logging into your online account\n2. Using our mobile app\n3. Visiting your nearest branch\n4. Calling our customer care";
      } else if (msgLower.includes("hello") || msgLower.includes("hi")) {
        reply = "Hello! Welcome to UDAAN Mutual Benefit Nidhi Limited. How can I assist you today? I can help with account opening, deposits, loans, KYC, and more.";
      } else if (msgLower.includes("thanks") || msgLower.includes("thank")) {
        reply = "You're welcome! Is there anything else I can help you with today?";
      } else {
        reply = "Thank you for reaching out to UDAAN Mutual Benefit Nidhi Limited. I'm here to help you with account opening, deposits, loans, KYC, and general inquiries. Could you please provide more details about what you need assistance with?";
      }

      const assistantMessage = {
        id: Date.now() + 1,
        role: "assistant",
        content: reply,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
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
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={() => {
            setIsOpen(true);
            setUnreadCount(0);
          }}
          className="fixed bottom-16 right-6 z-50 w-10 h-10 bg-gradient-to-r from-[#FDB813] to-[#fec84d] text-[#0B2A4A] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
        >
          <div className="relative">
            <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
            {unreadCount > 0 && (
              <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center animate-bounce">
                {unreadCount}
              </div>
            )}
          </div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${isMinimized ? "w-80" : "w-96"}`}>
          <div className="bg-white rounded-xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden">
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-[#0B2A4A] to-[#1a3a5a] text-white p-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <MessageCircle size={20} />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <h3 className="font-semibold">UDAAN Support</h3>
                  <p className="text-xs opacity-80">Online • Usually replies in seconds</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-1 hover:bg-white/10 rounded transition-colors"
                  title={isMinimized ? "Maximize" : "Minimize"}
                >
                  {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
                </button>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setIsMinimized(false);
                  }}
                  className="p-1 hover:bg-white/10 rounded transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Chat Messages */}
                <div className="h-96 overflow-y-auto p-4 space-y-3 bg-gray-50">
                  {messages.length === 0 && (
                    <div className="text-center text-gray-500 mt-8">
                      <Bot className="w-12 h-12 mx-auto mb-3 text-gray-400" />
                      <p className="font-medium">Hi there! 👋</p>
                      <p className="text-sm">I'm your virtual assistant. How can I help you today?</p>
                      <div className="flex flex-wrap gap-2 justify-center mt-4">
                        <button
                          onClick={() => setInput("How do I open an account?")}
                          className="text-xs bg-white border border-gray-200 px-3 py-1 rounded-full hover:border-[#FDB813] transition-colors"
                        >
                          Open Account
                        </button>
                        <button
                          onClick={() => setInput("What are FD interest rates?")}
                          className="text-xs bg-white border border-gray-200 px-3 py-1 rounded-full hover:border-[#FDB813] transition-colors"
                        >
                          FD Rates
                        </button>
                        <button
                          onClick={() => setInput("How to apply for loan?")}
                          className="text-xs bg-white border border-gray-200 px-3 py-1 rounded-full hover:border-[#FDB813] transition-colors"
                        >
                          Loan Application
                        </button>
                        <button
                          onClick={() => setInput("KYC documents required")}
                          className="text-xs bg-white border border-gray-200 px-3 py-1 rounded-full hover:border-[#FDB813] transition-colors"
                        >
                          KYC Documents
                        </button>
                      </div>
                    </div>
                  )}

                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} animate-fade-in`}
                    >
                      <div className={`max-w-[80%] ${msg.role === "user" ? "order-2" : "order-1"}`}>
                        <div className={`p-3 rounded-lg ${msg.role === "user" ? "bg-[#FDB813] text-[#0B2A4A]" : "bg-gray-200 text-gray-700"}`}>
                          <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                        </div>
                        <div className={`flex items-center gap-1 mt-1 text-xs text-gray-400 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                          <span>{new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                        </div>
                      </div>
                    </div>
                  ))}

                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-gray-200 text-gray-600 p-3 rounded-lg">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                          <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div ref={chatEndRef} />
                </div>

                {/* Chat Input */}
                <div className="border-t border-gray-200 p-4 bg-white">
                  <div className="flex items-center gap-2">
                    <textarea
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Type your message..."
                      rows={1}
                      className="flex-1 px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#FDB813] focus:border-transparent outline-none text-sm resize-none"
                      style={{ minHeight: "40px", maxHeight: "100px" }}
                    />
                    <button
                      onClick={sendMessage}
                      disabled={!input.trim()}
                      className="p-2 bg-[#FDB813] text-[#0B2A4A] rounded-lg hover:bg-[#fec84d] transition-colors disabled:opacity-50"
                    >
                      <Send size={18} />
                    </button>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-xs text-gray-400">Powered by AI • Instant responses</p>
                    {messages.length > 0 && (
                      <button
                        onClick={clearChat}
                        className="text-xs text-gray-400 hover:text-red-500 transition-colors"
                      >
                        Clear Chat
                      </button>
                    )}
                  </div>
                </div>
              </>
            )}

            {/* Minimized View */}
            {isMinimized && (
              <div className="p-3 bg-gray-50 cursor-pointer" onClick={() => setIsMinimized(false)}>
                <p className="text-sm text-gray-600 truncate">
                  {messages.length > 0 ? messages[messages.length - 1]?.content : "Click to start chatting..."}
                </p>
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
        
        .animate-fade-in { animation: fade-in 0.2s ease-out; }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        
        .animate-bounce { animation: bounce 0.5s infinite; }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        .animate-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
      `}</style>
    </>
  );
};

export default ChatWidget;