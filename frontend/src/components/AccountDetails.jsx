import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const API_BASE_URL = import.meta.env.VITE_API_URL;
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
  Clock,
  FileText,
  Home,
  Building,
  CreditCard,
  Download,
  Printer,
  ChevronRight,
  Wallet,
  Banknote,
  Fingerprint,
  Smartphone,
  Gift,
  Briefcase,
  Eye,
  EyeOff,
  Copy,
  Check
} from 'lucide-react';
import Navbar from './Navbar'; // IMPORT NAVBAR

const API_URL = import.meta.env.VITE_API_URL;

const AccountDetails = () => {
  const [account, setAccount] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showFullAadhaar, setShowFullAadhaar] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    fetchAccountDetails();
  }, []);

  const fetchAccountDetails = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('Please login to view account details');
        setLoading(false);
        return;
      }

      const response = await axios.get('/api/accounts/my-account', {
  headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
});

      if (response.data.success) {
        if (response.data.hasAccount) {
          setAccount(response.data.account);
        } else {
          setError('No account application found. Please open an account first.');
        }
      } else {
        setError(response.data.message || 'Failed to fetch account details');
      }
    } catch (err) {
      console.error('Error fetching account:', err);
      setError(err.response?.data?.message || 'Failed to load account details');
    } finally {
      setLoading(false);
    }
  };

  const getStatusBadge = (status) => {
    const statusConfig = {
      pending: { color: 'bg-yellow-100 text-yellow-800', icon: Clock, text: 'Pending Review' },
      under_review: { color: 'bg-blue-100 text-blue-800', icon: Shield, text: 'Under Review' },
      approved: { color: 'bg-green-100 text-green-800', icon: CheckCircle, text: 'Approved' },
      rejected: { color: 'bg-red-100 text-red-800', icon: AlertCircle, text: 'Rejected' },
      completed: { color: 'bg-green-100 text-green-800', icon: CheckCircle, text: 'Completed' }
    };
    const config = statusConfig[status] || statusConfig.pending;
    const Icon = config.icon;
    return (
      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium ${config.color}`}>
        <Icon size={14} />
        {config.text}
      </span>
    );
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const maskAadhaar = (aadhaar) => {
    if (!aadhaar) return 'N/A';
    if (showFullAadhaar) return aadhaar;
    return 'XXXX-XXXX-' + aadhaar.slice(-4);
  };

  const maskPan = (pan) => {
    if (!pan) return 'N/A';
    return pan;
  };

  const handleCopyApplicationId = () => {
    if (account?.applicationId) {
      navigator.clipboard.writeText(account.applicationId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-[#FDB813] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Loading account details...</p>
          </div>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gray-50 py-12 px-4">
          <div className="container mx-auto max-w-2xl">
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="w-8 h-8 text-red-500" />
              </div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">No Account Found</h2>
              <p className="text-gray-600 mb-6">{error}</p>
              <Link
                to="/account"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#FDB813] to-[#fec84d] text-[#0B2A4A] rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                Open Account Now
                <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (!account) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <p className="text-gray-500">No account data available</p>
        </div>
      </>
    );
  }

  const { personalInfo, identityInfo, addressInfo, accountDetails, status, applicationId, submittedAt } = account;

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-8 px-4">
        <div className="container mx-auto max-w-5xl">
          {/* Header */}
          <div className="mb-6">
            <div className="flex justify-between items-center flex-wrap gap-4 mb-4">
              <div>
                
                <p className="text-gray-500 text-sm mt-1">View your submitted account application status and information</p>
              </div>
              <button
                onClick={handlePrint}
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Printer size={18} />
                Print
              </button>
            </div>

            {/* Application ID Card */}
            <div className="bg-gradient-to-r from-[#0B2A4A] to-[#1a3a5a] rounded-xl p-4 text-white mb-6">
              <div className="flex justify-between items-center flex-wrap gap-3">
                <div>
                  <p className="text-sm opacity-80">Application Reference Number</p>
                  <div className="flex items-center gap-2 mt-1">
                    <p className="text-xl font-mono font-bold tracking-wider">{applicationId}</p>
                    <button
                      onClick={handleCopyApplicationId}
                      className="p-1.5 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                    >
                      {copied ? <Check size={16} /> : <Copy size={16} />}
                    </button>
                  </div>
                  <p className="text-xs opacity-70 mt-1">Submitted on {formatDate(submittedAt)}</p>
                </div>
                <div>{getStatusBadge(status)}</div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-5">
            {/* Personal Information */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
                <h2 className="font-semibold text-[#0B2A4A] flex items-center gap-2">
                  <User size={18} className="text-[#FDB813]" />
                  Personal Information
                </h2>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <InfoItem label="Full Name" value={personalInfo?.fullName} />
                  <InfoItem label="Date of Birth" value={formatDate(personalInfo?.dateOfBirth)} />
                  <InfoItem label="Gender" value={personalInfo?.gender} />
                  <InfoItem label="Email Address" value={personalInfo?.email} icon={<Mail size={14} />} />
                  <InfoItem label="Mobile Number" value={personalInfo?.mobile} icon={<Phone size={14} />} />
                  <InfoItem label="Alternate Mobile" value={personalInfo?.alternateMobile || 'Not provided'} />
                  <InfoItem label="Occupation" value={personalInfo?.occupation} />
                  <InfoItem label="Annual Income" value={personalInfo?.annualIncome} />
                </div>
              </div>
            </div>

            {/* Identity Information */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
                <h2 className="font-semibold text-[#0B2A4A] flex items-center gap-2">
                  <Shield size={18} className="text-[#FDB813]" />
                  Identity Information
                </h2>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-gray-500 uppercase tracking-wider">PAN Number</label>
                    <p className="font-mono font-medium mt-1">{maskPan(identityInfo?.panNumber)}</p>
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 uppercase tracking-wider flex items-center justify-between">
                      <span>Aadhaar Number</span>
                      <button
                        onClick={() => setShowFullAadhaar(!showFullAadhaar)}
                        className="text-xs text-[#FDB813] flex items-center gap-1"
                      >
                        {showFullAadhaar ? <EyeOff size={12} /> : <Eye size={12} />}
                        {showFullAadhaar ? 'Hide' : 'Show'}
                      </button>
                    </label>
                    <p className="font-mono font-medium mt-1">{maskAadhaar(identityInfo?.aadhaarNumber)}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Address Information */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
                <h2 className="font-semibold text-[#0B2A4A] flex items-center gap-2">
                  <MapPin size={18} className="text-[#FDB813]" />
                  Address Information
                </h2>
              </div>
              <div className="p-6">
                <div className="space-y-2">
                  <p className="text-gray-800">
                    {addressInfo?.addressLine1}
                    {addressInfo?.addressLine2 && `, ${addressInfo.addressLine2}`}
                  </p>
                  <p className="text-gray-800">
                    {addressInfo?.city}, {addressInfo?.state} - {addressInfo?.pincode}
                  </p>
                  {addressInfo?.landmark && (
                    <p className="text-gray-500 text-sm">Landmark: {addressInfo.landmark}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Account Details */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
                <h2 className="font-semibold text-[#0B2A4A] flex items-center gap-2">
                  <Wallet size={18} className="text-[#FDB813]" />
                  Account Details
                </h2>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <InfoItem label="Account Type" value={accountDetails?.accountType === 'savings' ? 'Savings Account' : accountDetails?.accountType === 'current' ? 'Current Account' : 'Salary Account'} />
                  <InfoItem label="Initial Deposit" value={`₹${parseInt(accountDetails?.initialDeposit).toLocaleString('en-IN')}`} />
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

            {/* Documents Uploaded */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
                <h2 className="font-semibold text-[#0B2A4A] flex items-center gap-2">
                  <FileText size={18} className="text-[#FDB813]" />
                  Documents Uploaded
                </h2>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2">
                  {account?.documents?.aadhaarFront && <DocBadge name="Aadhaar Card (Front)" />}
                  {account?.documents?.aadhaarBack && <DocBadge name="Aadhaar Card (Back)" />}
                  {account?.documents?.panCard && <DocBadge name="PAN Card" />}
                  {account?.documents?.photo && <DocBadge name="Passport Size Photo" />}
                  {account?.documents?.signature && <DocBadge name="Signature" />}
                  {account?.documents?.addressProof && <DocBadge name="Address Proof" />}
                </div>
              </div>
            </div>

            {/* Status Timeline */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
                <h2 className="font-semibold text-[#0B2A4A] flex items-center gap-2">
                  <Clock size={18} className="text-[#FDB813]" />
                  Application Status Timeline
                </h2>
              </div>
              <div className="p-6">
                <StatusTimeline status={status} submittedAt={submittedAt} />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between gap-4 pt-4">
              <Link
                to="/home"
                className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Back to Home
              </Link>
              {status === 'rejected' && (
                <Link
                  to="/open-account"
                  className="px-6 py-2.5 bg-gradient-to-r from-[#FDB813] to-[#fec84d] text-[#0B2A4A] rounded-lg font-semibold hover:shadow-lg transition-all"
                >
                  Re-apply
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          nav, .no-print {
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
    </>
  );
};

// Helper Components
const InfoItem = ({ label, value, icon }) => (
  <div>
    <label className="text-xs text-gray-500 uppercase tracking-wider flex items-center gap-1">
      {icon}
      {label}
    </label>
    <p className="font-medium text-gray-800 mt-1 break-words">{value || 'Not provided'}</p>
  </div>
);

const DocBadge = ({ name }) => (
  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-50 text-green-700 rounded-lg text-sm">
    <CheckCircle size={14} />
    {name}
  </span>
);

const StatusTimeline = ({ status, submittedAt }) => {
  const steps = [
    { key: 'pending', label: 'Application Submitted', description: 'Your application has been received' },
    { key: 'under_review', label: 'Under Review', description: 'Our team is verifying your documents' },
    { key: 'approved', label: 'Approved', description: 'Application approved, account creation in progress' },
    { key: 'completed', label: 'Account Activated', description: 'Your account is ready to use' }
  ];

  const currentIndex = steps.findIndex(s => s.key === status);
  const isRejected = status === 'rejected';

  if (isRejected) {
    return (
      <div className="text-center py-6">
        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
          <AlertCircle className="w-6 h-6 text-red-500" />
        </div>
        <h3 className="font-semibold text-red-600 mb-1">Application Rejected</h3>
        <p className="text-sm text-gray-500">Please contact support for more information</p>
      </div>
    );
  }

  return (
    <div className="relative">
      {steps.map((step, idx) => {
        const isCompleted = idx <= currentIndex;
        const isCurrent = idx === currentIndex;
        
        return (
          <div key={step.key} className="flex items-start gap-3 mb-6 last:mb-0">
            <div className="relative">
              <div className={`
                w-8 h-8 rounded-full flex items-center justify-center z-10 relative
                ${isCompleted ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-400'}
                ${isCurrent ? 'ring-4 ring-green-200' : ''}
              `}>
                {isCompleted ? <CheckCircle size={16} /> : idx + 1}
              </div>
              {idx < steps.length - 1 && (
                <div className={`
                  absolute top-8 left-4 w-0.5 h-12
                  ${isCompleted && !isRejected ? 'bg-green-500' : 'bg-gray-200'}
                `} />
              )}
            </div>
            <div className="flex-1 pb-4">
              <p className={`font-medium ${isCurrent ? 'text-green-600' : isCompleted ? 'text-gray-800' : 'text-gray-400'}`}>
                {step.label}
              </p>
              <p className="text-sm text-gray-500">{step.description}</p>
              {isCurrent && status === 'pending' && (
                <p className="text-xs text-yellow-600 mt-1">Expected processing time: 2-3 business days</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AccountDetails;