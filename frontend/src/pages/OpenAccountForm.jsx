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
  ArrowRight,
  AlertCircle,
  Users,
  CloudUpload,
  Landmark,
  Menu,
  X,
  Eye,
  EyeOff,
  FileText,
  Home,
  Building,
  CreditCard,
  Upload,
  Download,
  Printer,
  ChevronRight,
  ChevronLeft,
  Wallet,
  Banknote,
  Fingerprint,
  Aperture,
  Smartphone,
  Gift,
  Star,
  Clock,
  MessageCircle,
  HelpCircle
} from "lucide-react";


// ==================== CONFIGURATION ====================
const API_BASE_URL = "https://udaan-mutual-benefit-nidhi-limited.onrender.com";

// ==================== STEPPER COMPONENT ====================
const Stepper = ({ currentStep, steps }) => {
  return (
    <div className="mb-10">
      <div className="flex justify-between items-center relative">
        {/* Progress Line */}
        <div className="absolute left-0 right-0 top-5 h-0.5 bg-gray-200 -z-10">
          <div 
            className="h-full bg-gradient-to-r from-[#FDB813] to-[#fec84d] transition-all duration-500"
            style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
          ></div>
        </div>
        
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isActive = currentStep === stepNumber;
          const isCompleted = currentStep > stepNumber;
          
          return (
            <div key={step.number} className="flex flex-col items-center relative z-10">
              <div
                className={`
                  w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300
                  ${isActive ? "bg-gradient-to-r from-[#FDB813] to-[#fec84d] text-[#0B2A4A] ring-4 ring-[#FDB813]/30 shadow-lg" : 
                    isCompleted ? "bg-green-500 text-white" : "bg-gray-200 text-gray-500"}
                `}
              >
                {isCompleted ? <CheckCircle size={20} /> : <step.icon size={18} />}
              </div>
              <span className={`text-xs mt-2 text-center hidden md:block ${isActive ? "text-[#FDB813] font-semibold" : "text-gray-500"}`}>
                {step.title}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// ==================== DOCUMENT UPLOAD COMPONENT ====================
const DocumentUpload = ({ label, name, onFileSelect, required, accept = "image/*,.pdf" }) => {
  const [fileName, setFileName] = useState("");
  const [preview, setPreview] = useState(null);
  const fileInputRef = React.useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      onFileSelect(name, file);
      
      // Create preview for images
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview(reader.result);
        };
        reader.readAsDataURL(file);
      } else {
        setPreview(null);
      }
    }
  };

  return (
    <div className="border-2 border-dashed border-gray-200 rounded-lg p-4 hover:border-[#FDB813] transition-colors">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
        >
          <Upload size={16} />
          Choose File
        </button>
        <span className="text-sm text-gray-500 truncate flex-1">
          {fileName || "No file chosen"}
        </span>
      </div>
      {preview && (
        <div className="mt-3">
          <img src={preview} alt="Preview" className="h-20 w-auto rounded-lg border" />
        </div>
      )}
      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        onChange={handleFileChange}
        className="hidden"
      />
      <p className="text-xs text-gray-400 mt-2">Supported formats: JPG, PNG, PDF (Max 5MB)</p>
    </div>
  );
};

// ==================== FORM INPUT COMPONENT ====================
const FormInput = ({ label, name, type = "text", value, onChange, error, required, placeholder, icon: Icon }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <div className="relative">
      {Icon && (
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Icon className="h-5 w-5 text-gray-400" />
        </div>
      )}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`
          w-full ${Icon ? "pl-10" : "pl-4"} pr-4 py-2.5 border rounded-lg 
          focus:ring-2 focus:ring-[#FDB813] focus:border-transparent outline-none transition-all
          ${error ? "border-red-500 bg-red-50" : "border-gray-300"}
        `}
      />
    </div>
    {error && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} /> {error}</p>}
  </div>
);

const FormSelect = ({ label, name, value, onChange, error, required, options, icon: Icon }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <div className="relative">
      {Icon && (
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Icon className="h-5 w-5 text-gray-400" />
        </div>
      )}
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={`
          w-full ${Icon ? "pl-10" : "pl-4"} pr-4 py-2.5 border rounded-lg 
          focus:ring-2 focus:ring-[#FDB813] focus:border-transparent outline-none appearance-none
          ${error ? "border-red-500 bg-red-50" : "border-gray-300"}
        `}
      >
        <option value="">Select {label}</option>
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
        <ChevronRight size={16} className="text-gray-400 rotate-90" />
      </div>
    </div>
    {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
  </div>
);

// ==================== MAIN COMPONENT ====================
const OpenAccountForm = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [applicationId, setApplicationId] = useState(null);
  
  // Form Data State
  const [formData, setFormData] = useState({
    // Personal Information
    fullName: "",
    dateOfBirth: "",
    gender: "",
    email: "",
    mobile: "",
    alternateMobile: "",
    occupation: "",
    annualIncome: "",
    panNumber: "",
    aadhaarNumber: "",
    
    // Address Information
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    pincode: "",
    landmark: "",
    
    // Account Details
    accountType: "savings",
    initialDeposit: "1000",
    nomineeName: "",
    nomineeRelation: "",
    nomineeGuardian: "",
    
    // Bank Details
    bankName: "",
    accountNumber: "",
    ifscCode: "",
    accountHolderName: "",
    
    // Referral
    referralCode: "",
    sourceOfFunds: "",
    
    // Terms
    agreedToTerms: false,
    agreeToSms: false,
    agreeToEmail: false,
  });
  
  const [errors, setErrors] = useState({});
  
  // File uploads state
  const [documents, setDocuments] = useState({
    aadhaarFront: null,
    aadhaarBack: null,
    panCard: null,
    photo: null,
    signature: null,
    addressProof: null,
  });
  
  // Steps configuration
  const steps = [
    { number: 1, title: "Personal Info", icon: User },
    { number: 2, title: "Identity", icon: Shield },
    { number: 3, title: "Address", icon: MapPin },
    { number: 4, title: "Account", icon: Wallet },
    { number: 5, title: "Documents", icon: CloudUpload },
    { number: 6, title: "Review", icon: CheckCircle },
  ];
  
  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };
  
  // Handle document upload
  const handleDocumentUpload = (name, file) => {
    setDocuments(prev => ({ ...prev, [name]: file }));
  };
  
  // Validate current step
  const validateStep = (step) => {
    const newErrors = {};
    
    if (step === 1) {
      if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
      if (!formData.dateOfBirth) newErrors.dateOfBirth = "Date of birth is required";
      if (!formData.gender) newErrors.gender = "Please select gender";
      if (!formData.email) newErrors.email = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
      if (!formData.mobile) newErrors.mobile = "Mobile number is required";
      else if (!/^\d{10}$/.test(formData.mobile)) newErrors.mobile = "Mobile number must be 10 digits";
      if (!formData.occupation) newErrors.occupation = "Occupation is required";
    }
    
    if (step === 2) {
      if (!formData.panNumber) newErrors.panNumber = "PAN number is required";
      else if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(formData.panNumber)) newErrors.panNumber = "Invalid PAN format";
      if (!formData.aadhaarNumber) newErrors.aadhaarNumber = "Aadhaar number is required";
      else if (!/^\d{12}$/.test(formData.aadhaarNumber)) newErrors.aadhaarNumber = "Aadhaar must be 12 digits";
      if (!formData.annualIncome) newErrors.annualIncome = "Annual income is required";
    }
    
    if (step === 3) {
      if (!formData.addressLine1) newErrors.addressLine1 = "Address is required";
      if (!formData.city) newErrors.city = "City is required";
      if (!formData.state) newErrors.state = "State is required";
      if (!formData.pincode) newErrors.pincode = "Pincode is required";
      else if (!/^\d{6}$/.test(formData.pincode)) newErrors.pincode = "Pincode must be 6 digits";
    }
    
    if (step === 4) {
      if (!formData.accountType) newErrors.accountType = "Account type is required";
      if (!formData.initialDeposit) newErrors.initialDeposit = "Initial deposit amount is required";
      else if (parseFloat(formData.initialDeposit) < 1000) newErrors.initialDeposit = "Minimum deposit is ₹1,000";
      if (!formData.nomineeName) newErrors.nomineeName = "Nominee name is required";
      if (!formData.nomineeRelation) newErrors.nomineeRelation = "Nominee relation is required";
    }
    
    if (step === 5) {
      if (!documents.aadhaarFront) newErrors.aadhaarFront = "Aadhaar front copy is required";
      if (!documents.aadhaarBack) newErrors.aadhaarBack = "Aadhaar back copy is required";
      if (!documents.panCard) newErrors.panCard = "PAN card copy is required";
      if (!documents.photo) newErrors.photo = "Passport size photo is required";
      if (!documents.signature) newErrors.signature = "Signature is required";
    }
    
    if (step === 6) {
      if (!formData.agreedToTerms) newErrors.agreedToTerms = "Please accept the terms and conditions";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // Navigation functions
  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, steps.length));
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  
  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
const handleSubmit = async (e) => {
  e.preventDefault();
  if (!validateStep(currentStep)) return;
  
  setIsSubmitting(true);
  
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      setErrors({ submit: "Please login to submit application" });
      setIsSubmitting(false);
      return;
    }
    
    const submitFormData = new FormData();
    
    // Append all form data
    Object.keys(formData).forEach(key => {
      if (formData[key] !== null && formData[key] !== undefined) {
        submitFormData.append(key, formData[key]);
      }
    });
    
    // Append documents
    Object.keys(documents).forEach(key => {
      if (documents[key]) {
        submitFormData.append(key, documents[key]);
      }
    });
    
    console.log("Submitting to:", `${API_BASE_URL}/api/accounts/create`);
    console.log("With token:", token);
    
    const response = await axios.post(`${API_BASE_URL}/api/accounts/create`, submitFormData, {
      headers: { 
        "Content-Type": "multipart/form-data",
        "Authorization": `Bearer ${token}`
      }
    });
    
    console.log("Response:", response.data);
    
    if (response.data.success) {
      setApplicationId(response.data.applicationId);
      setSubmitSuccess(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setErrors({ submit: response.data.message || "Failed to submit application" });
    }
    
  } catch (error) {
    console.error("Submission error:", error);
    console.error("Error response:", error.response);
    console.error("Error message:", error.message);
    
    let errorMessage = "Failed to submit application. Please try again.";
    if (error.response?.data?.message) {
      errorMessage = error.response.data.message;
    } else if (error.response?.data?.error) {
      errorMessage = error.response.data.error;
    }
    
    setErrors({ submit: errorMessage });
  } finally {
    setIsSubmitting(false);
  }
};
  // Success screen
  if (submitSuccess) {
    return (
      <>
       
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
          <div className="container mx-auto max-w-2xl">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-12 h-12 text-green-500" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">Application Submitted Successfully!</h2>
                <p className="text-green-100">Thank you for choosing UDAAN</p>
              </div>
              
              <div className="p-8">
                <div className="bg-gray-50 rounded-lg p-5 mb-6">
                  <p className="text-sm text-gray-500 mb-2">Application Reference Number:</p>
                  <p className="text-2xl font-mono font-bold text-[#0B2A4A] tracking-wider">{applicationId || "JN" + Date.now() + Math.floor(Math.random() * 10000)}</p>
                  <p className="text-xs text-gray-400 mt-2">Please save this reference number for future correspondence.</p>
                </div>
                
                <div className="space-y-4 mb-6">
                  <h3 className="font-semibold text-gray-700">What happens next?</h3>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#FDB813]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-[#FDB813]">1</span>
                    </div>
                    <p className="text-sm text-gray-600">Our representative will contact you within 24-48 hours for verification.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#FDB813]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-[#FDB813]">2</span>
                    </div>
                    <p className="text-sm text-gray-600">Please keep your original documents ready for verification.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#FDB813]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-[#FDB813]">3</span>
                    </div>
                    <p className="text-sm text-gray-600">Once verified, your account will be activated within 3-5 business days.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 justify-center">
                  <Link to="/" className="px-6 py-2.5 bg-[#0B2A4A] text-white rounded-lg hover:bg-[#1a3a5a] transition-colors">
                    Back to Home
                  </Link>
                  <button 
                    onClick={() => window.print()} 
                    className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2"
                  >
                    <Printer size={18} />
                    Print Application
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  return (
    <>
    
    
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#0B2A4A] to-[#1a3a5a] rounded-2xl mb-4 shadow-lg">
              <Users className="w-8 h-8 text-[#FDB813]" />
            </div>
            <h1 className="text-3xl font-bold text-[#0B2A4A]">Open a Savings Account</h1>
            <p className="text-gray-600 mt-2">Join the UDAAN family and start your journey towards financial growth</p>
            <p className="text-sm text-gray-400 mt-1">All fields marked with <span className="text-red-500">*</span> are mandatory</p>
          </div>
          
          {/* Stepper */}
          <Stepper currentStep={currentStep} steps={steps} />
          
          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-6 md:p-8">
              {/* Step 1: Personal Information */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div className="flex items-center gap-2 pb-3 border-b border-gray-100">
                    <User size={20} className="text-[#FDB813]" />
                    <h2 className="text-xl font-semibold text-[#0B2A4A]">Personal Information</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <FormInput
                      label="Full Name"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      error={errors.fullName}
                      required
                      placeholder="As per Aadhaar card"
                      icon={User}
                    />
                    
                    <FormInput
                      label="Date of Birth"
                      name="dateOfBirth"
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      error={errors.dateOfBirth}
                      required
                      icon={Calendar}
                    />
                    
                    <FormSelect
                      label="Gender"
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      error={errors.gender}
                      required
                      options={[
                        { value: "Male", label: "Male" },
                        { value: "Female", label: "Female" },
                        { value: "Other", label: "Other" }
                      ]}
                      icon={User}
                    />
                    
                    <FormInput
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      error={errors.email}
                      required
                      placeholder="you@example.com"
                      icon={Mail}
                    />
                    
                    <FormInput
                      label="Mobile Number"
                      name="mobile"
                      type="tel"
                      value={formData.mobile}
                      onChange={handleChange}
                      error={errors.mobile}
                      required
                      placeholder="10-digit mobile number"
                      icon={Phone}
                    />
                    
                    <FormInput
                      label="Alternate Mobile (Optional)"
                      name="alternateMobile"
                      type="tel"
                      value={formData.alternateMobile}
                      onChange={handleChange}
                      placeholder="10-digit mobile number"
                      icon={Smartphone}
                    />
                    
                    <FormSelect
                      label="Occupation"
                      name="occupation"
                      value={formData.occupation}
                      onChange={handleChange}
                      error={errors.occupation}
                      required
                      options={[
                        { value: "Salaried", label: "Salaried Employee" },
                        { value: "Self Employed", label: "Self Employed" },
                        { value: "Business", label: "Business Owner" },
                        { value: "Student", label: "Student" },
                        { value: "Homemaker", label: "Homemaker" },
                        { value: "Retired", label: "Retired" }
                      ]}
                      icon={Briefcase}
                    />
                    
                    <FormSelect
                      label="Annual Income"
                      name="annualIncome"
                      value={formData.annualIncome}
                      onChange={handleChange}
                      error={errors.annualIncome}
                      required
                      options={[
                        { value: "Below 1 Lakh", label: "Below ₹1,00,000" },
                        { value: "1-3 Lakhs", label: "₹1,00,000 - ₹3,00,000" },
                        { value: "3-5 Lakhs", label: "₹3,00,000 - ₹5,00,000" },
                        { value: "5-10 Lakhs", label: "₹5,00,000 - ₹10,00,000" },
                        { value: "Above 10 Lakhs", label: "Above ₹10,00,000" }
                      ]}
                      icon={IndianRupee}
                    />
                  </div>
                </div>
              )}
              
              {/* Step 2: Identity Documents */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div className="flex items-center gap-2 pb-3 border-b border-gray-100">
                    <Shield size={20} className="text-[#FDB813]" />
                    <h2 className="text-xl font-semibold text-[#0B2A4A]">Identity Information</h2>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-4 mb-4 border border-blue-100">
                    <p className="text-sm text-blue-700 flex items-start gap-2">
                      <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
                      <span>Please ensure your PAN and Aadhaar details match exactly with your documents for successful verification.</span>
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <FormInput
                      label="PAN Number"
                      name="panNumber"
                      value={formData.panNumber}
                      onChange={handleChange}
                      error={errors.panNumber}
                      required
                      placeholder="ABCDE1234F"
                      icon={CreditCard}
                    />
                    
                    <FormInput
                      label="Aadhaar Number"
                      name="aadhaarNumber"
                      value={formData.aadhaarNumber}
                      onChange={handleChange}
                      error={errors.aadhaarNumber}
                      required
                      placeholder="12-digit Aadhaar number"
                      icon={Fingerprint}
                    />
                  </div>
                </div>
              )}
              
              {/* Step 3: Address Information */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div className="flex items-center gap-2 pb-3 border-b border-gray-100">
                    <MapPin size={20} className="text-[#FDB813]" />
                    <h2 className="text-xl font-semibold text-[#0B2A4A]">Address Information</h2>
                  </div>
                  
                  <div className="space-y-4">
                    <FormInput
                      label="Address Line 1"
                      name="addressLine1"
                      value={formData.addressLine1}
                      onChange={handleChange}
                      error={errors.addressLine1}
                      required
                      placeholder="House number, building, street"
                      icon={Home}
                    />
                    
                    <FormInput
                      label="Address Line 2 (Optional)"
                      name="addressLine2"
                      value={formData.addressLine2}
                      onChange={handleChange}
                      placeholder="Area, colony, landmark"
                      icon={MapPin}
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <FormInput
                        label="City"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        error={errors.city}
                        required
                        icon={Building}
                      />
                      
                      <FormInput
                        label="State"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        error={errors.state}
                        required
                        icon={MapPin}
                      />
                      
                      <FormInput
                        label="Pincode"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleChange}
                        error={errors.pincode}
                        required
                        placeholder="6 digits"
                        icon={Mail}
                      />
                    </div>
                    
                    <FormInput
                      label="Landmark (Optional)"
                      name="landmark"
                      value={formData.landmark}
                      onChange={handleChange}
                      placeholder="Near any known landmark"
                      icon={MapPin}
                    />
                  </div>
                </div>
              )}
              
              {/* Step 4: Account Details */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div className="flex items-center gap-2 pb-3 border-b border-gray-100">
                    <Wallet size={20} className="text-[#FDB813]" />
                    <h2 className="text-xl font-semibold text-[#0B2A4A]">Account Details</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <FormSelect
                      label="Account Type"
                      name="accountType"
                      value={formData.accountType}
                      onChange={handleChange}
                      error={errors.accountType}
                      required
                      options={[
                        { value: "savings", label: "Savings Account" },
                        { value: "current", label: "Current Account" },
                        { value: "salary", label: "Salary Account" }
                      ]}
                      icon={Wallet}
                    />
                    
                    <FormInput
                      label="Initial Deposit Amount (₹)"
                      name="initialDeposit"
                      type="number"
                      value={formData.initialDeposit}
                      onChange={handleChange}
                      error={errors.initialDeposit}
                      required
                      placeholder="Minimum ₹1,000"
                      icon={IndianRupee}
                    />
                    
                    <FormInput
                      label="Nominee Name"
                      name="nomineeName"
                      value={formData.nomineeName}
                      onChange={handleChange}
                      error={errors.nomineeName}
                      required
                      placeholder="Full name of nominee"
                      icon={Users}
                    />
                    
                    <FormSelect
                      label="Nominee Relationship"
                      name="nomineeRelation"
                      value={formData.nomineeRelation}
                      onChange={handleChange}
                      error={errors.nomineeRelation}
                      required
                      options={[
                        { value: "Spouse", label: "Spouse" },
                        { value: "Son", label: "Son" },
                        { value: "Daughter", label: "Daughter" },
                        { value: "Father", label: "Father" },
                        { value: "Mother", label: "Mother" },
                        { value: "Brother", label: "Brother" },
                        { value: "Sister", label: "Sister" }
                      ]}
                      icon={Users}
                    />
                    
                    <FormInput
                      label="Guardian Name (if nominee is minor)"
                      name="nomineeGuardian"
                      value={formData.nomineeGuardian}
                      onChange={handleChange}
                      placeholder="Guardian's full name"
                      icon={User}
                    />
                    
                    <FormInput
                      label="Referral Code (Optional)"
                      name="referralCode"
                      value={formData.referralCode}
                      onChange={handleChange}
                      placeholder="Enter referral code if any"
                      icon={Gift}
                    />
                    
                    <FormSelect
                      label="Source of Funds"
                      name="sourceOfFunds"
                      value={formData.sourceOfFunds}
                      onChange={handleChange}
                      options={[
                        { value: "Salary", label: "Salary Income" },
                        { value: "Business", label: "Business Income" },
                        { value: "Investment", label: "Investment Returns" },
                        { value: "Savings", label: "Personal Savings" },
                        { value: "Gift", label: "Gift from Family" },
                        { value: "Other", label: "Other Sources" }
                      ]}
                      icon={Banknote}
                    />
                  </div>
                </div>
              )}
              
              {/* Step 5: Document Upload */}
              {currentStep === 5 && (
                <div className="space-y-6">
                  <div className="flex items-center gap-2 pb-3 border-b border-gray-100">
                    <CloudUpload size={20} className="text-[#FDB813]" />
                    <h2 className="text-xl font-semibold text-[#0B2A4A]">Upload Documents</h2>
                  </div>
                  
                  <div className="bg-yellow-50 rounded-lg p-4 mb-4 border border-yellow-100">
                    <p className="text-sm text-yellow-700 flex items-start gap-2">
                      <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
                      <span>Please upload clear, readable copies of your documents. Supported formats: JPG, PNG, PDF (Max 5MB each).</span>
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <DocumentUpload
                      label="Aadhaar Card (Front)"
                      name="aadhaarFront"
                      onFileSelect={handleDocumentUpload}
                      required
                    />
                    
                    <DocumentUpload
                      label="Aadhaar Card (Back)"
                      name="aadhaarBack"
                      onFileSelect={handleDocumentUpload}
                      required
                    />
                    
                    <DocumentUpload
                      label="PAN Card"
                      name="panCard"
                      onFileSelect={handleDocumentUpload}
                      required
                    />
                    
                    <DocumentUpload
                      label="Passport Size Photo"
                      name="photo"
                      onFileSelect={handleDocumentUpload}
                      required
                      accept="image/*"
                    />
                    
                    <DocumentUpload
                      label="Signature"
                      name="signature"
                      onFileSelect={handleDocumentUpload}
                      required
                      accept="image/*"
                    />
                    
                    <DocumentUpload
                      label="Address Proof (if different from Aadhaar)"
                      name="addressProof"
                      onFileSelect={handleDocumentUpload}
                      accept="image/*,.pdf"
                    />
                  </div>
                </div>
              )}
              
              {/* Step 6: Review & Submit */}
              {currentStep === 6 && (
                <div className="space-y-6">
                  <div className="flex items-center gap-2 pb-3 border-b border-gray-100">
                    <CheckCircle size={20} className="text-[#FDB813]" />
                    <h2 className="text-xl font-semibold text-[#0B2A4A]">Review & Submit</h2>
                  </div>
                  
                  {/* Review Sections */}
                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="font-semibold text-[#0B2A4A] mb-3 flex items-center gap-2">
                        <User size={16} /> Personal Information
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                        <div><span className="text-gray-500">Full Name:</span> <span className="font-medium">{formData.fullName || "—"}</span></div>
                        <div><span className="text-gray-500">Date of Birth:</span> <span className="font-medium">{formData.dateOfBirth || "—"}</span></div>
                        <div><span className="text-gray-500">Gender:</span> <span className="font-medium">{formData.gender || "—"}</span></div>
                        <div><span className="text-gray-500">Email:</span> <span className="font-medium">{formData.email || "—"}</span></div>
                        <div><span className="text-gray-500">Mobile:</span> <span className="font-medium">{formData.mobile || "—"}</span></div>
                        <div><span className="text-gray-500">Occupation:</span> <span className="font-medium">{formData.occupation || "—"}</span></div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="font-semibold text-[#0B2A4A] mb-3 flex items-center gap-2">
                        <Shield size={16} /> Identity Information
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                        <div><span className="text-gray-500">PAN Number:</span> <span className="font-medium">{formData.panNumber || "—"}</span></div>
                        <div><span className="text-gray-500">Aadhaar Number:</span> <span className="font-medium">{formData.aadhaarNumber || "—"}</span></div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="font-semibold text-[#0B2A4A] mb-3 flex items-center gap-2">
                        <MapPin size={16} /> Address Information
                      </h3>
                      <div className="text-sm space-y-1">
                        <p><span className="text-gray-500">Address:</span> <span className="font-medium">{formData.addressLine1}{formData.addressLine2 && `, ${formData.addressLine2}`}</span></p>
                        <p><span className="text-gray-500">City:</span> <span className="font-medium">{formData.city || "—"}</span></p>
                        <p><span className="text-gray-500">State:</span> <span className="font-medium">{formData.state || "—"}</span></p>
                        <p><span className="text-gray-500">Pincode:</span> <span className="font-medium">{formData.pincode || "—"}</span></p>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="font-semibold text-[#0B2A4A] mb-3 flex items-center gap-2">
                        <Wallet size={16} /> Account Details
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                        <div><span className="text-gray-500">Account Type:</span> <span className="font-medium capitalize">{formData.accountType || "—"}</span></div>
                        <div><span className="text-gray-500">Initial Deposit:</span> <span className="font-medium">₹{formData.initialDeposit || "0"}</span></div>
                        <div><span className="text-gray-500">Nominee:</span> <span className="font-medium">{formData.nomineeName || "—"}</span></div>
                        <div><span className="text-gray-500">Relationship:</span> <span className="font-medium">{formData.nomineeRelation || "—"}</span></div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="font-semibold text-[#0B2A4A] mb-3 flex items-center gap-2">
                        <CloudUpload size={16} /> Documents Uploaded
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {documents.aadhaarFront && <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">✓ Aadhaar Front</span>}
                        {documents.aadhaarBack && <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">✓ Aadhaar Back</span>}
                        {documents.panCard && <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">✓ PAN Card</span>}
                        {documents.photo && <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">✓ Photo</span>}
                        {documents.signature && <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">✓ Signature</span>}
                      </div>
                    </div>
                  </div>
                  
                  {/* Terms and Conditions */}
                  <div className="border-l-4 border-[#FDB813] bg-[#FDB813]/5 p-4 rounded-r-lg">
                    <p className="text-sm text-gray-700 mb-3">
                      By submitting this application, I/We confirm that all the information provided is true and correct to the best of my knowledge. 
                      I/We agree to abide by the terms and conditions of UDAAN Mutual Benefit Nidhi Limited.
                    </p>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="agreedToTerms"
                        checked={formData.agreedToTerms}
                        onChange={handleChange}
                        className="w-4 h-4 text-[#FDB813] rounded focus:ring-[#FDB813]"
                      />
                      <span className="text-sm font-medium text-gray-700">
                        I accept the <Link to="/terms" className="text-[#FDB813] hover:underline">Terms & Conditions</Link> and <Link to="/privacy" className="text-[#FDB813] hover:underline">Privacy Policy</Link>
                      </span>
                    </label>
                    {errors.agreedToTerms && <p className="text-red-500 text-xs mt-1">{errors.agreedToTerms}</p>}
                  </div>
                  
                  <div className="flex gap-3">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="agreeToSms"
                        checked={formData.agreeToSms}
                        onChange={handleChange}
                        className="w-4 h-4 text-[#FDB813] rounded"
                      />
                      <span className="text-sm text-gray-600">Receive updates via SMS</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="agreeToEmail"
                        checked={formData.agreeToEmail}
                        onChange={handleChange}
                        className="w-4 h-4 text-[#FDB813] rounded"
                      />
                      <span className="text-sm text-gray-600">Receive updates via Email</span>
                    </label>
                  </div>
                </div>
              )}
              
              {/* Error Message */}
              {errors.submit && (
                <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm flex items-center gap-2">
                  <AlertCircle size={16} />
                  {errors.submit}
                </div>
              )}
              
              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2"
                  >
                    <ChevronLeft size={18} />
                    Previous
                  </button>
                )}
                
                {currentStep < steps.length ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="px-6 py-2.5 bg-[#0B2A4A] text-white rounded-lg hover:bg-[#1a3a5a] transition-colors ml-auto flex items-center gap-2"
                  >
                    Next
                    <ArrowRight size={18} />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-2.5 bg-gradient-to-r from-[#FDB813] to-[#fec84d] text-[#0B2A4A] rounded-lg font-semibold hover:shadow-lg transition-all ml-auto flex items-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Application
                        <CheckCircle size={18} />
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          </form>
          
          {/* Help Section */}
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-400">
              Need help? <a href="/help-support" className="text-[#FDB813] hover:underline">Contact Support</a> or call us at <a href="tel:+917397782590" className="text-[#FDB813]">+91 73977 82590</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

// Add missing imports
const Briefcase = ({ size, className }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
  </svg>
);

const Loader2 = ({ size, className }) => (
  <svg className={`${className} animate-spin`} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
  </svg>
);

export default OpenAccountForm;