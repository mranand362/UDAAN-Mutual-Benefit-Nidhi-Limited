import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_URL;
import axios from "axios";
import { 
  FileText, Clock, CheckCircle, AlertCircle, Eye, 
  Wallet, User, MapPin, Calendar, IndianRupee, Shield 
} from "lucide-react";

const ApplicationSummary = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    fetchApplications();
    const interval = setInterval(fetchApplications, 30000);
    return () => clearInterval(interval);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const fetchApplications = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setLoading(false);
      return;
    }

    try {
    const response = await axios.get(`${API_URL}/applications/my-applications`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      if (response.data.success) {
        setApplications(response.data.applications || []);
      }
    } catch (error) {
      console.error("Error fetching applications:", error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case "pending": return <Clock size={14} className="text-yellow-500" />;
      case "approved": return <CheckCircle size={14} className="text-green-500" />;
      case "rejected": return <AlertCircle size={14} className="text-red-500" />;
      case "processing": return <Clock size={14} className="text-blue-500" />;
      default: return <FileText size={14} className="text-gray-500" />;
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case "pending": return "bg-yellow-100 text-yellow-700";
      case "approved": return "bg-green-100 text-green-700";
      case "rejected": return "bg-red-100 text-red-700";
      case "processing": return "bg-blue-100 text-blue-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  const getTypeIcon = (type) => {
    switch(type) {
      case "savings-account": return <Wallet size={14} className="text-green-600" />;
      case "deposit": return <IndianRupee size={14} className="text-blue-600" />;
      case "loan": return <Shield size={14} className="text-purple-600" />;
      default: return <FileText size={14} className="text-gray-600" />;
    }
  };

  const getTypeLabel = (type) => {
    switch(type) {
      case "savings-account": return "Savings Account";
      case "deposit": return "Deposit";
      case "loan": return "Loan";
      default: return type;
    }
  };

  const pendingCount = applications.filter(app => app.status === "pending").length;
  const approvedCount = applications.filter(app => app.status === "approved").length;

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Application Button */}
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors"
        title="My Applications"
      >
        <FileText size={20} className="text-gray-600" />
        {pendingCount > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center animate-pulse">
            {pendingCount > 9 ? "9+" : pendingCount}
          </span>
        )}
      </button>

      {/* Dropdown */}
      {showDropdown && (
        <div className="absolute right-0 mt-2 w-96 bg-white rounded-xl shadow-xl border border-gray-200 z-50 animate-fadeIn">
          {/* Header */}
          <div className="p-4 border-b border-gray-100 bg-gradient-to-r from-[#0B2A4A] to-[#1a3a5a] rounded-t-xl">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-white">My Applications</h3>
              <Link 
                to="/applications" 
                className="text-xs text-[#FDB813] hover:underline"
                onClick={() => setShowDropdown(false)}
              >
                View All
              </Link>
            </div>
            <div className="flex gap-4 mt-2 text-xs text-gray-300">
              <span>Total: {applications.length}</span>
              <span className="text-yellow-400">Pending: {pendingCount}</span>
              <span className="text-green-400">Approved: {approvedCount}</span>
            </div>
          </div>

          {/* Applications List */}
          <div className="max-h-96 overflow-y-auto">
            {loading ? (
              <div className="p-8 text-center text-gray-500 text-sm">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-[#FDB813] mx-auto mb-2"></div>
                Loading...
              </div>
            ) : applications.length === 0 ? (
              <div className="p-8 text-center">
                <FileText size={40} className="mx-auto text-gray-300 mb-3" />
                <p className="text-sm text-gray-500">No applications found</p>
                <Link 
                  to="/account" 
                  className="mt-3 inline-block text-sm text-[#FDB813] hover:underline font-medium"
                  onClick={() => setShowDropdown(false)}
                >
                  Open an Account →
                </Link>
              </div>
            ) : (
              applications.slice(0, 5).map((app) => (
                <Link
                  key={app._id || app.id}
                  to={`/application/${app._id || app.id}`}
                  className="block p-4 hover:bg-gray-50 border-b border-gray-100 transition-colors"
                  onClick={() => setShowDropdown(false)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      {/* Type and Status */}
                      <div className="flex items-center gap-2 mb-2">
                        {getTypeIcon(app.type)}
                        <span className="text-sm font-semibold text-gray-800">
                          {getTypeLabel(app.type)}
                        </span>
                        {app.amount > 0 && (
                          <span className="text-xs text-gray-500">
                            ₹{app.amount.toLocaleString()}
                          </span>
                        )}
                      </div>
                      
                      {/* Date */}
                      <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                        <span className="flex items-center gap-1">
                          <Calendar size={10} />
                          {new Date(app.createdAt).toLocaleDateString()}
                        </span>
                        {app.applicationId && (
                          <span className="font-mono text-[10px]">
                            ID: {app.applicationId?.slice(-8)}
                          </span>
                        )}
                      </div>
                      
                      {/* Personal Info Summary (for savings account) */}
                      {app.type === "savings-account" && app.personalInfo && (
                        <div className="text-xs text-gray-500 mt-1">
                          <span className="flex items-center gap-1">
                            <User size={10} /> {app.personalInfo.fullName || "N/A"}
                          </span>
                        </div>
                      )}
                    </div>
                    
                    {/* Status Badge */}
                    <div className="text-right">
                      <span className={`text-xs px-2 py-1 rounded-full flex items-center gap-1 ${getStatusColor(app.status)}`}>
                        {getStatusIcon(app.status)}
                        {app.status}
                      </span>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>

          {/* Footer */}
          {applications.length > 5 && (
            <div className="p-3 border-t border-gray-100 text-center bg-gray-50 rounded-b-xl">
              <Link 
                to="/applications" 
                className="text-xs text-[#FDB813] hover:underline font-medium"
                onClick={() => setShowDropdown(false)}
              >
                +{applications.length - 5} more applications
              </Link>
            </div>
          )}
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        .animate-pulse {
          animation: pulse 1s infinite;
        }
      `}</style>
    </div>
  );
};

export default ApplicationSummary;