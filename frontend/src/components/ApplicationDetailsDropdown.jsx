import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  IndianRupee,
  Shield,
  CheckCircle,
  AlertCircle,
  Users,
  FileText,
  Home,
  Building,
  CreditCard,
  Wallet,
  Banknote,
  Fingerprint,
  Smartphone,
  Gift,
  Clock,
  Printer,
  Eye,
  EyeOff,
  Copy,
  Check,
  ChevronRight,
  Briefcase,
  Download,
  ExternalLink
} from "lucide-react";

const API_URL = import.meta.env.VITE_API_URL;

const AccountDetails = () => {
  const navigate = useNavigate();
  const [account, setAccount] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showFullAadhaar, setShowFullAadhaar] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    fetchAccountDetails();
  }, []);

  const fetchAccountDetails = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("Please login to view account details");
        setLoading(false);
        return;
      }

      const response = await axios.get(`${API_BASE_URL}/api/accounts/my-account`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (response.data.success) {
        if (response.data.hasAccount) {
          setAccount(response.data.account);
        } else {
          setError("No account application found. Please open an account first.");
        }
      } else {
        setError(response.data.message || "Failed to fetch account details");
      }
    } catch (err) {
      console.error("Error fetching account:", err);
      setError(err.response?.data?.message || "Failed to load account details");
    } finally {
      setLoading(false);
    }
  };

  const getStatusConfig = (status) => {
    const configs = {
      pending: { color: "bg-yellow-100 text-yellow-800", icon: Clock, text: "Pending Review", bg: "yellow" },
      under_review: { color: "bg-blue-100 text-blue-800", icon: Shield, text: "Under Review", bg: "blue" },
      approved: { color: "bg-green-100 text-green-800", icon: CheckCircle, text: "Approved", bg: "green" },
      rejected: { color: "bg-red-100 text-red-800", icon: AlertCircle, text: "Rejected", bg: "red" },
      completed: { color: "bg-green-100 text-green-800", icon: CheckCircle, text: "Account Active", bg: "green" }
    };
    return configs[status] || configs.pending;
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

  const maskAadhaar = (aadhaar) => {
    if (!aadhaar) return "N/A";
    if (showFullAadhaar) return aadhaar;
    return "XXXX-XXXX-" + aadhaar.slice(-4);
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-[#FDB813] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading account details...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertCircle className="w-8 h-8 text-red-500" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">No Account Found</h2>
            <p className="text-gray-600 mb-6">{error}</p>
            <Link
              to="/open-account"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#FDB813] to-[#fec84d] text-[#0B2A4A] rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              Open Account Now
              <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (!account) return null;

  const { personalInfo, identityInfo, addressInfo, accountDetails, status, applicationId, submittedAt } = account;
  const statusConfig = getStatusConfig(status);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-6">
          <div className="flex justify-between items-center flex-wrap gap-4 mb-4">
            <div>
              <h1 className="text-2xl font-bold text-[#0B2A4A]">My Account Details</h1>
              <p className="text-gray-500 text-sm mt-1">View your account application status and information</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handlePrint}
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Printer size={18} />
                Print
              </button>
              <Link
                to="/open-account"
                className="flex items-center gap-2 px-4 py-2 bg-[#0B2A4A] text-white rounded-lg hover:bg-[#1a3a5a] transition-colors"
              >
                <ExternalLink size={18} />
                Edit Application
              </Link>
            </div>
          </div>

          {/* Application ID Card */}
          <div className="bg-gradient-to-r from-[#0B2A4A] to-[#1a3a5a] rounded-xl p-5 text-white mb-6">
            <div className="flex justify-between items-center flex-wrap gap-4">
              <div>
                <p className="text-sm opacity-80">Application Reference Number</p>
                <div className="flex items-center gap-2 mt-1">
                  <p className="text-xl font-mono font-bold tracking-wider">{applicationId}</p>
                  <button
                    onClick={() => handleCopy(applicationId)}
                    className="p-1.5 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                  >
                    {copied ? <Check size={16} /> : <Copy size={16} />}
                  </button>
                </div>
                <p className="text-xs opacity-70 mt-1">Submitted on {formatDate(submittedAt)}</p>
              </div>
              <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium ${statusConfig.color}`}>
                <statusConfig.icon size={14} />
                {statusConfig.text}
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 border-b border-gray-200">
          {["overview", "personal", "address", "account"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 font-medium transition-all ${
                activeTab === tab
                  ? "text-[#FDB813] border-b-2 border-[#FDB813]"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab === "overview" && "Overview"}
              {tab === "personal" && "Personal Info"}
              {tab === "address" && "Address"}
              {tab === "account" && "Account Details"}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Status Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#FDB813]/10 rounded-full flex items-center justify-center">
                  <Clock className="w-5 h-5 text-[#FDB813]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Application Status</p>
                  <p className="font-semibold text-gray-800">{statusConfig.text}</p>
                </div>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full transition-all duration-500 ${
                    status === "pending" ? "w-1/4 bg-yellow-500" :
                    status === "under_review" ? "w-1/2 bg-blue-500" :
                    status === "approved" ? "w-3/4 bg-green-500" :
                    status === "completed" ? "w-full bg-green-500" : "w-0 bg-red-500"
                  }`}
                />
              </div>
              <p className="text-xs text-gray-400 mt-3">
                {status === "pending" && "Your application is queued for review"}
                {status === "under_review" && "Our team is verifying your documents"}
                {status === "approved" && "Application approved, account activation in progress"}
                {status === "completed" && "Your account is active and ready to use"}
                {status === "rejected" && "Please contact support for more information"}
              </p>
            </div>

            {/* Quick Info Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Account Holder</p>
                  <p className="font-semibold text-gray-800">{personalInfo?.fullName || "N/A"}</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Mail size={14} className="text-gray-400" />
                  <span className="text-gray-600">{personalInfo?.email || "N/A"}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone size={14} className="text-gray-400" />
                  <span className="text-gray-600">{personalInfo?.mobile || "N/A"}</span>
                </div>
              </div>
            </div>

            {/* Document Status Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center">
                  <FileText className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Documents</p>
                  <p className="font-semibold text-gray-800">
                    {Object.values(account.documents || {}).filter(Boolean).length}/6 Uploaded
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-1">
                {account?.documents?.aadhaarFront && <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">✓ Aadhaar</span>}
                {account?.documents?.panCard && <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">✓ PAN</span>}
                {account?.documents?.photo && <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">✓ Photo</span>}
                {account?.documents?.signature && <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">✓ Signature</span>}
              </div>
            </div>
          </div>
        )}

        {/* Personal Info Tab */}
        {activeTab === "personal" && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
              <h2 className="font-semibold text-[#0B2A4A] flex items-center gap-2">
                <User size={18} className="text-[#FDB813]" />
                Personal Information
              </h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <InfoItem label="Full Name" value={personalInfo?.fullName} />
                <InfoItem label="Date of Birth" value={formatDate(personalInfo?.dateOfBirth)} />
                <InfoItem label="Gender" value={personalInfo?.gender} />
                <InfoItem label="Email Address" value={personalInfo?.email} icon={<Mail size={14} />} />
                <InfoItem label="Mobile Number" value={personalInfo?.mobile} icon={<Phone size={14} />} />
                <InfoItem label="Alternate Mobile" value={personalInfo?.alternateMobile || "Not provided"} />
                <InfoItem label="Occupation" value={personalInfo?.occupation} />
                <InfoItem label="Annual Income" value={personalInfo?.annualIncome} />
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100">
                <h3 className="font-medium text-gray-700 mb-3 flex items-center gap-2">
                  <Shield size={16} className="text-[#FDB813]" />
                  Identity Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs text-gray-500 uppercase tracking-wider">PAN Number</label>
                    <p className="font-mono font-medium mt-1">{identityInfo?.panNumber || "N/A"}</p>
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 uppercase tracking-wider flex items-center justify-between">
                      <span>Aadhaar Number</span>
                      <button
                        onClick={() => setShowFullAadhaar(!showFullAadhaar)}
                        className="text-xs text-[#FDB813] flex items-center gap-1"
                      >
                        {showFullAadhaar ? <EyeOff size={12} /> : <Eye size={12} />}
                        {showFullAadhaar ? "Hide" : "Show"}
                      </button>
                    </label>
                    <p className="font-mono font-medium mt-1">{maskAadhaar(identityInfo?.aadhaarNumber)}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Address Tab */}
        {activeTab === "address" && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
              <h2 className="font-semibold text-[#0B2A4A] flex items-center gap-2">
                <MapPin size={18} className="text-[#FDB813]" />
                Address Information
              </h2>
            </div>
            <div className="p-6">
              <div className="bg-gray-50 rounded-lg p-5 mb-4">
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="text-[#FDB813] mt-0.5" />
                  <div>
                    <p className="text-gray-800">
                      {addressInfo?.addressLine1}
                      {addressInfo?.addressLine2 && `, ${addressInfo.addressLine2}`}
                    </p>
                    <p className="text-gray-800 mt-1">
                      {addressInfo?.city}, {addressInfo?.state} - {addressInfo?.pincode}
                    </p>
                    {addressInfo?.landmark && (
                      <p className="text-gray-500 text-sm mt-2">Landmark: {addressInfo.landmark}</p>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div><span className="text-gray-500">City:</span> <span className="font-medium">{addressInfo?.city || "N/A"}</span></div>
                <div><span className="text-gray-500">State:</span> <span className="font-medium">{addressInfo?.state || "N/A"}</span></div>
                <div><span className="text-gray-500">Pincode:</span> <span className="font-medium">{addressInfo?.pincode || "N/A"}</span></div>
              </div>
            </div>
          </div>
        )}

        {/* Account Tab */}
        {activeTab === "account" && (
          <div className="space-y-6">
            {/* Account Details */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
                <h2 className="font-semibold text-[#0B2A4A] flex items-center gap-2">
                  <Wallet size={18} className="text-[#FDB813]" />
                  Account Details
                </h2>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <InfoItem 
                    label="Account Type" 
                    value={accountDetails?.accountType === "savings" ? "Savings Account" : 
                           accountDetails?.accountType === "current" ? "Current Account" : "Salary Account"} 
                  />
                  <InfoItem label="Initial Deposit" value={formatCurrency(accountDetails?.initialDeposit)} />
                  <InfoItem label="Nominee Name" value={accountDetails?.nomineeName} />
                  <InfoItem label="Nominee Relationship" value={accountDetails?.nomineeRelation} />
                  {accountDetails?.nomineeGuardian && (
                    <InfoItem label="Guardian Name" value={accountDetails.nomineeGuardian} />
                  )}
                  {accountDetails?.referralCode && (
                    <InfoItem label="Referral Code" value={accountDetails.referralCode} />
                  )}
                  {accountDetails?.sourceOfFunds && (
                    <InfoItem label="Source of Funds" value={accountDetails.sourceOfFunds} />
                  )}
                </div>
              </div>
            </div>

            {/* Documents Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
                <h2 className="font-semibold text-[#0B2A4A] flex items-center gap-2">
                  <FileText size={18} className="text-[#FDB813]" />
                  Uploaded Documents
                </h2>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  <DocItem status={!!account?.documents?.aadhaarFront} label="Aadhaar Card (Front)" />
                  <DocItem status={!!account?.documents?.aadhaarBack} label="Aadhaar Card (Back)" />
                  <DocItem status={!!account?.documents?.panCard} label="PAN Card" />
                  <DocItem status={!!account?.documents?.photo} label="Passport Size Photo" />
                  <DocItem status={!!account?.documents?.signature} label="Signature" />
                  <DocItem status={!!account?.documents?.addressProof} label="Address Proof" />
                </div>
              </div>
            </div>

            {/* Preferences */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
                <h2 className="font-semibold text-[#0B2A4A] flex items-center gap-2">
                  <Bell size={18} className="text-[#FDB813]" />
                  Communication Preferences
                </h2>
              </div>
              <div className="p-6">
                <div className="flex gap-6">
                  <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm ${
                    account?.preferences?.agreeToSms ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"
                  }`}>
                    {account?.preferences?.agreeToSms ? <CheckCircle size={14} /> : <XCircle size={14} />}
                    SMS Updates
                  </span>
                  <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm ${
                    account?.preferences?.agreeToEmail ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"
                  }`}>
                    {account?.preferences?.agreeToEmail ? <CheckCircle size={14} /> : <XCircle size={14} />}
                    Email Updates
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex justify-between gap-4 pt-8 mt-4 border-t border-gray-200">
          <Link
            to="/home"
            className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Back to Home
          </Link>
          {status === "rejected" && (
            <Link
              to="/open-account"
              className="px-6 py-2.5 bg-gradient-to-r from-[#FDB813] to-[#fec84d] text-[#0B2A4A] rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              Re-apply
            </Link>
          )}
        </div>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          .no-print {
            display: none !important;
          }
          body {
            background: white;
            padding: 0;
            margin: 0;
          }
          .shadow-sm, .shadow-xl {
            box-shadow: none !important;
          }
          .bg-gray-50 {
            background: white !important;
          }
        }
      `}</style>
    </div>
  );
};

// Helper Components
const InfoItem = ({ label, value, icon }) => (
  <div>
    <label className="text-xs text-gray-500 uppercase tracking-wider flex items-center gap-1">
      {icon}
      {label}
    </label>
    <p className="font-medium text-gray-800 mt-1 break-words">{value || "Not provided"}</p>
  </div>
);

const DocItem = ({ status, label }) => (
  <div className={`flex items-center gap-2 p-2 rounded-lg ${status ? "bg-green-50" : "bg-gray-50"}`}>
    {status ? (
      <CheckCircle size={16} className="text-green-500" />
    ) : (
      <AlertCircle size={16} className="text-gray-400" />
    )}
    <span className={`text-sm ${status ? "text-green-700" : "text-gray-500"}`}>{label}</span>
  </div>
);

// Missing icons
const Bell = ({ size, className }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
);

const XCircle = ({ size, className }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export default AccountDetails;