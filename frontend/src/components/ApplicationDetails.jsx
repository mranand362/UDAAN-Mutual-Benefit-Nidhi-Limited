import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { 
  ArrowLeft, User, Mail, Phone, Calendar, MapPin, 
  FileText, IndianRupee, Clock, CheckCircle, XCircle,
  AlertCircle, Loader, Building2, Briefcase
} from "lucide-react";
import Navbar from "./Navbar";


const ApplicationDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [application, setApplication] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchApplicationDetails();
  }, [id]);

  const fetchApplicationDetails = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      
      if (!token) {
        navigate("/login");
        return;
      }

      const response = await axios.get(
        `/api/applications/application/${id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response.data.success) {
        setApplication(response.data.application);
      } else {
        setError("Application not found");
      }
    } catch (err) {
      console.error("Error fetching application:", err);
      setError(err.response?.data?.message || "Failed to fetch application details");
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'under_review': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'approved': return 'bg-green-100 text-green-800 border-green-200';
      case 'rejected': return 'bg-red-100 text-red-800 border-red-200';
      case 'completed': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'pending': return <Clock className="w-5 h-5" />;
      case 'under_review': return <Loader className="w-5 h-5 animate-spin" />;
      case 'approved': return <CheckCircle className="w-5 h-5" />;
      case 'rejected': return <XCircle className="w-5 h-5" />;
      case 'completed': return <CheckCircle className="w-5 h-5" />;
      default: return <AlertCircle className="w-5 h-5" />;
    }
  };

  const getStatusText = (status) => {
    switch(status) {
      case 'pending': return 'Pending Review';
      case 'under_review': return 'Under Review';
      case 'approved': return 'Approved';
      case 'rejected': return 'Rejected';
      case 'completed': return 'Completed';
      default: return status || 'Unknown';
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
  };

  const formatCurrency = (amount) => {
    if (!amount) return "₹0";
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0
    }).format(amount);
  };

  const InfoItem = ({ icon, label, value, className = "" }) => (
    <div className={`flex items-start gap-3 ${className}`}>
      <div className="text-gray-400 mt-0.5">{icon}</div>
      <div>
        <p className="text-xs text-gray-500 uppercase tracking-wider">{label}</p>
        <p className="font-medium text-gray-800 mt-0.5 break-words">{value || "N/A"}</p>
      </div>
    </div>
  );

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
          <div className="text-center">
            <Loader className="w-12 h-12 animate-spin text-[#FDB813] mx-auto mb-4" />
            <p className="text-gray-600">Loading application details...</p>
          </div>
        </div>
       
      </>
    );
  }

  if (error || !application) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-slate-50 to-slate-100">
          <div className="text-center">
            <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Application Not Found</h2>
            <p className="text-gray-600 mb-6">{error || "The application you're looking for doesn't exist."}</p>
            <button
              onClick={() => navigate("/applications")}
              className="bg-[#FDB813] text-[#0B2A4A] px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center gap-2 mx-auto"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Applications
            </button>
          </div>
        </div>
        
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8 px-4">
        <div className="container mx-auto max-w-3xl">
          
          {/* Back Button */}
          <button
            onClick={() => navigate("/applications")}
            className="flex items-center gap-2 text-gray-600 hover:text-[#0B2A4A] transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Applications
          </button>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            
            {/* Header */}
            <div className="bg-gradient-to-r from-[#0B2A4A] to-[#1a3a5a] px-6 py-4">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h1 className="text-xl font-bold text-white flex items-center gap-2">
                    <FileText className="w-5 h-5 text-[#FDB813]" />
                    Application Details
                  </h1>
                  <p className="text-gray-300 text-xs mt-1">
                    ID: #{application._id?.slice(-8) || 'N/A'}
                  </p>
                </div>
                <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border ${getStatusColor(application.status)}`}>
                  {getStatusIcon(application.status)}
                  <span className="font-medium text-sm capitalize">{getStatusText(application.status)}</span>
                </div>
              </div>
            </div>

            {/* Form Details */}
            <div className="p-6 space-y-5">
              
              {/* Personal Information */}
              <div>
                <h3 className="text-md font-semibold text-[#0B2A4A] flex items-center gap-2 mb-3 pb-2 border-b border-gray-100">
                  <User className="w-4 h-4 text-[#FDB813]" />
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <InfoItem icon={<User size={14} />} label="Full Name" value={application.personalInfo?.fullName} />
                  <InfoItem icon={<Mail size={14} />} label="Email" value={application.personalInfo?.email} />
                  <InfoItem icon={<Phone size={14} />} label="Phone" value={application.personalInfo?.phone} />
                  <InfoItem icon={<Calendar size={14} />} label="Date of Birth" value={application.personalInfo?.dob} />
                  <InfoItem icon={<MapPin size={14} />} label="Address" value={application.personalInfo?.address} className="md:col-span-2" />
                  <InfoItem icon={<FileText size={14} />} label="PAN Number" value={application.personalInfo?.panNumber} />
                  <InfoItem icon={<FileText size={14} />} label="Aadhaar Number" value={application.personalInfo?.aadhaarNumber} />
                  <InfoItem icon={<Building2 size={14} />} label="City" value={application.personalInfo?.city} />
                  <InfoItem icon={<MapPin size={14} />} label="State" value={application.personalInfo?.state} />
                  <InfoItem icon={<MapPin size={14} />} label="Pincode" value={application.personalInfo?.pincode} />
                </div>
              </div>

              {/* Application Details */}
              <div>
                <h3 className="text-md font-semibold text-[#0B2A4A] flex items-center gap-2 mb-3 pb-2 border-b border-gray-100">
                  <FileText className="w-4 h-4 text-[#FDB813]" />
                  Application Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <InfoItem icon={<FileText size={14} />} label="Application Type" value={application.type} />
                  <InfoItem icon={<Calendar size={14} />} label="Submitted Date" value={formatDate(application.submittedAt)} />
                  <InfoItem icon={<IndianRupee size={14} />} label="Amount" value={formatCurrency(application.amount)} />
                  <InfoItem icon={<Clock size={14} />} label="Tenure" value={`${application.tenure || 0} months`} />
                  {application.accountType && (
                    <InfoItem icon={<Building2 size={14} />} label="Account Type" value={application.accountType} />
                  )}
                  {application.depositType && (
                    <InfoItem icon={<Building2 size={14} />} label="Deposit Type" value={application.depositType} />
                  )}
                  {application.loanType && (
                    <InfoItem icon={<Briefcase size={14} />} label="Loan Type" value={application.loanType} />
                  )}
                </div>
              </div>

              {/* Employment Info */}
              {application.employmentInfo && (
                <div>
                  <h3 className="text-md font-semibold text-[#0B2A4A] flex items-center gap-2 mb-3 pb-2 border-b border-gray-100">
                    <Briefcase className="w-4 h-4 text-[#FDB813]" />
                    Employment Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <InfoItem icon={<Briefcase size={14} />} label="Occupation" value={application.employmentInfo?.occupation} />
                    <InfoItem icon={<IndianRupee size={14} />} label="Annual Income" value={application.employmentInfo?.annualIncome ? `₹${parseInt(application.employmentInfo.annualIncome).toLocaleString()}` : "N/A"} />
                    <InfoItem icon={<Briefcase size={14} />} label="Employment Type" value={application.employmentInfo?.employmentType} />
                    <InfoItem icon={<IndianRupee size={14} />} label="Monthly Income" value={application.employmentInfo?.monthlyIncome ? `₹${parseInt(application.employmentInfo.monthlyIncome).toLocaleString()}` : "N/A"} />
                  </div>
                </div>
              )}

              {/* Nominee Info */}
              {application.nomineeInfo && (
                <div>
                  <h3 className="text-md font-semibold text-[#0B2A4A] flex items-center gap-2 mb-3 pb-2 border-b border-gray-100">
                    <User className="w-4 h-4 text-[#FDB813]" />
                    Nominee Details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <InfoItem icon={<User size={14} />} label="Nominee Name" value={application.nomineeInfo?.name} />
                    <InfoItem icon={<User size={14} />} label="Relation" value={application.nomineeInfo?.relation} />
                    <InfoItem icon={<Calendar size={14} />} label="Nominee Age" value={application.nomineeInfo?.age} />
                    <InfoItem icon={<User size={14} />} label="Guardian Name" value={application.nomineeInfo?.guardianName || "N/A"} />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={() => navigate("/applications")}
              className="flex items-center gap-2 px-5 py-2.5 bg-[#0B2A4A] text-white rounded-lg hover:bg-[#1a3a5a] transition-all text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Applications
            </button>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default ApplicationDetails;