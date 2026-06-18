import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { 
  FileText, Clock, CheckCircle, XCircle, 
  Loader, IndianRupee, Calendar, Eye
} from "lucide-react";
import Navbar from "../components/Navbar";


// ✅ API_URL directly defined
const API_URL = import.meta.env.VITE_API_URL || '';

const MyApplications = () => {
  const navigate = useNavigate();
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }

      // ✅ FIXED: Using API_URL
      const response = await axios.get(`${API_URL}/applications/my-applications`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });

      if (response.data.success) {
        setApplications(response.data.applications);
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setError("Failed to load applications");
    } finally {
      setLoading(false);
    }
  };

  const getStatusBadge = (status) => {
    const statusConfig = {
      pending: { color: "bg-yellow-100 text-yellow-800", icon: Clock, text: "Pending" },
      approved: { color: "bg-green-100 text-green-800", icon: CheckCircle, text: "Approved" },
      rejected: { color: "bg-red-100 text-red-800", icon: XCircle, text: "Rejected" },
      processing: { color: "bg-blue-100 text-blue-800", icon: Loader, text: "Processing" }
    };
    const config = statusConfig[status] || statusConfig.pending;
    const Icon = config.icon;
    return (
      <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${config.color}`}>
        <Icon size={12} />
        {config.text}
      </span>
    );
  };

  const getLoanTypeLabel = (type) => {
    const types = {
      fd: "Loan Against FD",
      property: "Loan Against Property",
      policy: "Loan Against Policy",
      gold: "Gold Loan",
      personal: "Personal Loan",
      vehicle: "Vehicle Loan",
      education: "Education Loan",
      business: "Business Loan"
    };
    return types[type] || type;
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FDB813] mx-auto mb-4"></div>
            <p className="text-gray-600">Loading applications...</p>
          </div>
        </div>
       
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-700 text-sm">{error}</p>
            </div>
          )}

          {applications.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
              <FileText size={64} className="mx-auto text-gray-300 mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No Applications Yet</h3>
              <p className="text-gray-500 mb-6">You haven't submitted any applications yet.</p>
              <button
                onClick={() => navigate("/apply")}
                className="bg-[#FDB813] text-[#0B2A4A] px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                Apply Now
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {applications.map((app) => (
                <div key={app.id} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all">
                  <div className="flex flex-wrap justify-between items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="font-semibold text-[#0B2A4A] text-lg">{getLoanTypeLabel(app.loanType)}</h3>
                        {getStatusBadge(app.status)}
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                        <div>
                          <p className="text-gray-500 text-xs">Application ID</p>
                          <p className="font-mono text-gray-800">#{app.id.slice(-8)}</p>
                        </div>
                        <div>
                          <p className="text-gray-500 text-xs">Loan Amount</p>
                          <p className="font-semibold text-[#0B2A4A] flex items-center gap-1">
                            <IndianRupee size={14} />
                            {app.amount.toLocaleString()}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-500 text-xs">Tenure</p>
                          <p>{app.tenure} Years</p>
                        </div>
                        <div>
                          <p className="text-gray-500 text-xs">Applied On</p>
                          <p className="flex items-center gap-1">
                            <Calendar size={12} />
                            {new Date(app.createdAt).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => navigate(`/application/${app.id}`)}
                      className="flex items-center gap-2 px-4 py-2 border border-[#FDB813] text-[#0B2A4A] rounded-lg hover:bg-[#FDB813] transition-all text-sm"
                    >
                      <Eye size={16} />
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      
    </>
  );
};

export default MyApplications;