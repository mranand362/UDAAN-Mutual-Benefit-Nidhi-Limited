import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Edit2,
  Save,
  X,
  Shield,
  History,
  FileText,
  Bell,
  Lock,
  LogOut,
  CheckCircle,
  AlertCircle,
  Camera,
  Briefcase,
  PiggyBank,
  HandCoins,
  ChevronRight,
  Trash2,
  Calendar,
  Award,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MyProfile = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const fileInputRef = useRef(null);
  
  // User Profile State
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    occupation: "",
    panCard: "",
    aadharCard: "",
    profileImage: "",
  });

  // Account Statistics (will come from API)
  const [stats, setStats] = useState({
    totalDeposits: 0,
    activeLoans: 0,
    totalInvestment: 0,
    memberSince: "",
  });

  // Recent Transactions (will come from API)
  const [recentTransactions, setRecentTransactions] = useState([]);

  // Check authentication and load user data
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }
    fetchUserProfile();
    fetchUserStats();
    fetchTransactions();
  }, [navigate]);

  const fetchUserProfile = async () => {
    try {
      const token = localStorage.getItem("token");
      
      // Try to get from API first
      try {
        const response = await axios.get("https://udaan-mutual-benefit-nidhi-limited.onrender.com/api/auth/profile", {
          headers: { Authorization: `Bearer ${token}` }
        });
        
        if (response.data.success && response.data.user) {
          setProfile({
            name: response.data.user.name || "",
            email: response.data.user.email || "",
            phone: response.data.user.phone || "",
            address: response.data.user.address || "",
            city: response.data.user.city || "",
            state: response.data.user.state || "",
            pincode: response.data.user.pincode || "",
            occupation: response.data.user.occupation || "",
            panCard: response.data.user.panCard || "",
            aadharCard: response.data.user.aadharCard || "",
            profileImage: response.data.user.profileImage || "",
          });
          
          // Update localStorage
          localStorage.setItem("userName", response.data.user.name);
          localStorage.setItem("userEmail", response.data.user.email);
          if (response.data.user.profileImage) {
            localStorage.setItem("profileImage", response.data.user.profileImage);
          }
        }
      } catch (apiError) {
        // Fallback to localStorage
        const storedName = localStorage.getItem("userName");
        const storedEmail = localStorage.getItem("userEmail");
        const storedImage = localStorage.getItem("profileImage");
        
        setProfile({
          name: storedName || "",
          email: storedEmail || "",
          phone: "",
          address: "",
          city: "",
          state: "",
          pincode: "",
          occupation: "",
          panCard: "",
          aadharCard: "",
          profileImage: storedImage || "",
        });
      }
    } catch (error) {
      console.error("Error fetching profile:", error);
      setErrorMessage("Failed to load profile data");
    } finally {
      setLoading(false);
    }
  };

  const fetchUserStats = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("https://udaan-mutual-benefit-nidhi-limited.onrender.com/api/auth/stats", {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      if (response.data.success) {
        setStats({
          totalDeposits: response.data.totalDeposits || 0,
          activeLoans: response.data.activeLoans || 0,
          totalInvestment: response.data.totalInvestment || 0,
          memberSince: response.data.memberSince || "",
        });
      }
    } catch (error) {
      // Stats API may not exist yet, use default values
      console.log("Stats API not available yet");
    }
  };

  const fetchTransactions = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("https://udaan-mutual-benefit-nidhi-limited.onrender.com/api/auth/transactions", {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      if (response.data.success && response.data.transactions) {
        setRecentTransactions(response.data.transactions);
      }
    } catch (error) {
      // Transactions API may not exist yet
      console.log("Transactions API not available yet");
    }
  };

  // Handle profile image upload
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setErrorMessage("Please upload an image file");
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      setErrorMessage("Image size should be less than 2MB");
      return;
    }

    setUploadingImage(true);
    setErrorMessage("");

    try {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64Image = reader.result;
        
        // Save to localStorage immediately for UI update
        localStorage.setItem("profileImage", base64Image);
        setProfile(prev => ({ ...prev, profileImage: base64Image }));
        
        // Also save to backend API
        const token = localStorage.getItem("token");
        try {
          await axios.put(
            "https://udaan-mutual-benefit-nidhi-limited.onrender.com/api/auth/profile",
            { profileImage: base64Image },
            { headers: { Authorization: `Bearer ${token}` } }
          );
          setSuccessMessage("Profile picture updated successfully!");
        } catch (apiError) {
          console.log("API save failed, but saved locally:", apiError);
          setSuccessMessage("Profile picture saved locally!");
        }
        
        setTimeout(() => setSuccessMessage(""), 3000);
      };
      reader.readAsDataURL(file);
    } catch (err) {
      console.error("Error uploading image:", err);
      setErrorMessage("Failed to upload image");
    } finally {
      setUploadingImage(false);
    }
  };

  // Remove profile image
  const handleRemoveImage = async () => {
    try {
      localStorage.removeItem("profileImage");
      setProfile(prev => ({ ...prev, profileImage: "" }));
      
      const token = localStorage.getItem("token");
      try {
        await axios.put(
          "https://udaan-mutual-benefit-nidhi-limited.onrender.com/api/auth/profile",
          { profileImage: "" },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setSuccessMessage("Profile picture removed");
      } catch (apiError) {
        setSuccessMessage("Profile picture removed locally");
      }
      
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (err) {
      console.error("Error removing image:", err);
      setErrorMessage("Failed to remove image");
    }
  };

  const handleUpdateProfile = async (e) => {
    if (e) e.preventDefault();
    setSaving(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const token = localStorage.getItem("token");
      
      // Update localStorage
      localStorage.setItem("userName", profile.name);
      
      // Update via API
      const response = await axios.put(
        "https://udaan-mutual-benefit-nidhi-limited.onrender.com/api/auth/profile",
        {
          name: profile.name,
          phone: profile.phone,
          address: profile.address,
          city: profile.city,
          state: profile.state,
          pincode: profile.pincode,
          occupation: profile.occupation,
          panCard: profile.panCard,
          aadharCard: profile.aadharCard,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      
      if (response.data.success) {
        setSuccessMessage("Profile updated successfully!");
      }
      
      setIsEditing(false);
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (error) {
      console.error("Error updating profile:", error);
      setErrorMessage(error.response?.data?.message || "Failed to update profile");
    } finally {
      setSaving(false);
    }
  };

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("rememberedEmail");
    localStorage.removeItem("profileImage");
    navigate("/login");
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#FDB813] mx-auto mb-4"></div>
            <p className="text-gray-600">Loading your profile...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8 px-4">
        <div className="container mx-auto max-w-6xl">
       
          {/* Success/Error Messages */}
          {successMessage && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2">
              <CheckCircle className="text-green-500" size={20} />
              <p className="text-green-700">{successMessage}</p>
            </div>
          )}
          
          {errorMessage && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2">
              <AlertCircle className="text-red-500" size={20} />
              <p className="text-red-700">{errorMessage}</p>
            </div>
          )}

          <div className="grid md:grid-cols-3 gap-6">
            {/* Left Column - Stats Cards */}
            <div className="space-y-6">
              {/* Profile Summary Card with Image Upload */}
              <div className="bg-white rounded-2xl shadow-lg p-6 text-center border border-gray-100">
                <div className="relative inline-block group">
                  {/* Profile Image */}
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 ring-4 ring-[#FDB813]/20">
                    {profile.profileImage ? (
                      <img 
                        src={profile.profileImage} 
                        alt={profile.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-r from-[#0B2A4A] to-[#1a3a5a] flex items-center justify-center">
                        <span className="text-3xl font-bold text-white">
                          {profile.name?.charAt(0)?.toUpperCase() || "?"}
                        </span>
                      </div>
                    )}
                  </div>
                  
                  {/* Image Upload Button */}
                  <div className="absolute -bottom-2 -right-2 flex gap-1">
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      disabled={uploadingImage}
                      className="bg-[#FDB813] p-2 rounded-full hover:scale-110 transition-transform shadow-lg disabled:opacity-50"
                      title="Change profile picture"
                    >
                      {uploadingImage ? (
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-[#0B2A4A]"></div>
                      ) : (
                        <Camera size={16} className="text-[#0B2A4A]" />
                      )}
                    </button>
                    
                    {profile.profileImage && (
                      <button
                        onClick={handleRemoveImage}
                        className="bg-red-500 p-2 rounded-full hover:scale-110 transition-transform shadow-lg"
                        title="Remove profile picture"
                      >
                        <Trash2 size={16} className="text-white" />
                      </button>
                    )}
                  </div>
                  
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageUpload}
                    accept="image/*"
                    className="hidden"
                  />
                </div>
                
                <h2 className="text-xl font-bold text-[#0B2A4A]">{profile.name || "User"}</h2>
                <p className="text-gray-500 text-sm">{profile.email || "No email"}</p>
                {stats.memberSince && (
                  <p className="text-xs text-gray-400 mt-1">Member since {stats.memberSince}</p>
                )}
                
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex justify-center gap-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-[#0B2A4A]">
                        ₹{stats.totalDeposits.toLocaleString() || 0}
                      </p>
                      <p className="text-xs text-gray-500">Total Deposits</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-[#0B2A4A]">{stats.activeLoans || 0}</p>
                      <p className="text-xs text-gray-500">Active Loans</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <h3 className="font-semibold text-[#0B2A4A] mb-4 flex items-center gap-2">
                  <Shield size={18} />
                  Quick Actions
                </h3>
                <div className="space-y-3">
                  <button 
                    onClick={() => navigate("/apply-now")}
                    className="w-full flex items-center justify-between p-3 bg-[#FDB813]/10 rounded-lg hover:bg-[#FDB813]/20 transition-colors"
                  >
                    <span className="text-sm font-medium text-[#0B2A4A]">Make a Deposit</span>
                    <PiggyBank size={18} className="text-[#FDB813]" />
                  </button>
                  <button 
                    onClick={() => navigate("/apply/gold-loan")}
                    className="w-full flex items-center justify-between p-3 bg-[#FDB813]/10 rounded-lg hover:bg-[#FDB813]/20 transition-colors"
                  >
                    <span className="text-sm font-medium text-[#0B2A4A]">Apply for Loan</span>
                    <HandCoins size={18} className="text-[#FDB813]" />
                  </button>
                  <button className="w-full flex items-center justify-between p-3 bg-[#FDB813]/10 rounded-lg hover:bg-[#FDB813]/20 transition-colors">
                    <span className="text-sm font-medium text-[#0B2A4A]">Download Statement</span>
                    <FileText size={18} className="text-[#FDB813]" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column - Profile Form & Transactions */}
            <div className="md:col-span-2 space-y-6">
              {/* Profile Information Card */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-[#0B2A4A] to-[#1a3a5a] px-6 py-4 flex justify-between items-center">
                  <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                    <User size={20} />
                    Personal Information
                  </h2>
                  {!isEditing ? (
                    <button
                      onClick={() => setIsEditing(true)}
                      className="flex items-center gap-2 px-4 py-2 bg-[#FDB813] text-[#0B2A4A] rounded-lg hover:shadow-lg transition-all"
                    >
                      <Edit2 size={16} />
                      Edit Profile
                    </button>
                  ) : (
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          setIsEditing(false);
                          fetchUserProfile();
                        }}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-all"
                      >
                        <X size={16} />
                        Cancel
                      </button>
                      <button
                        onClick={handleUpdateProfile}
                        disabled={saving}
                        className="flex items-center gap-2 px-4 py-2 bg-[#FDB813] text-[#0B2A4A] rounded-lg hover:shadow-lg transition-all disabled:opacity-50"
                      >
                        {saving ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-[#0B2A4A]"></div>
                            Saving...
                          </>
                        ) : (
                          <>
                            <Save size={16} />
                            Save Changes
                          </>
                        )}
                      </button>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                        <input
                          type="text"
                          name="name"
                          value={profile.name}
                          onChange={handleChange}
                          disabled={!isEditing}
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FDB813] focus:border-transparent disabled:bg-gray-50"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                        <input
                          type="email"
                          name="email"
                          value={profile.email}
                          disabled={true}
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-500"
                        />
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Email cannot be changed</p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                        <input
                          type="tel"
                          name="phone"
                          value={profile.phone}
                          onChange={handleChange}
                          disabled={!isEditing}
                          placeholder="Add your phone number"
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FDB813] focus:border-transparent disabled:bg-gray-50"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Occupation</label>
                      <div className="relative">
                        <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                        <input
                          type="text"
                          name="occupation"
                          value={profile.occupation}
                          onChange={handleChange}
                          disabled={!isEditing}
                          placeholder="e.g., Business, Service, Professional"
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FDB813] focus:border-transparent disabled:bg-gray-50"
                        />
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 text-gray-400" size={18} />
                        <textarea
                          name="address"
                          value={profile.address}
                          onChange={handleChange}
                          disabled={!isEditing}
                          rows="2"
                          placeholder="Add your address"
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FDB813] focus:border-transparent disabled:bg-gray-50"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                      <input
                        type="text"
                        name="city"
                        value={profile.city}
                        onChange={handleChange}
                        disabled={!isEditing}
                        placeholder="Your city"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FDB813] focus:border-transparent disabled:bg-gray-50"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                      <input
                        type="text"
                        name="state"
                        value={profile.state}
                        onChange={handleChange}
                        disabled={!isEditing}
                        placeholder="Your state"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FDB813] focus:border-transparent disabled:bg-gray-50"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Pincode</label>
                      <input
                        type="text"
                        name="pincode"
                        value={profile.pincode}
                        onChange={handleChange}
                        disabled={!isEditing}
                        placeholder="Postal code"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FDB813] focus:border-transparent disabled:bg-gray-50"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">PAN Card</label>
                      <input
                        type="text"
                        name="panCard"
                        value={profile.panCard}
                        onChange={handleChange}
                        disabled={!isEditing}
                        placeholder="ABCDE1234F"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FDB813] focus:border-transparent disabled:bg-gray-50"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Aadhar Card</label>
                      <input
                        type="text"
                        name="aadharCard"
                        value={profile.aadharCard}
                        onChange={handleChange}
                        disabled={!isEditing}
                        placeholder="XXXX-XXXX-XXXX"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FDB813] focus:border-transparent disabled:bg-gray-50"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Transactions Card */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-[#0B2A4A] to-[#1a3a5a] px-6 py-4">
                  <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                    <History size={20} />
                    Recent Transactions
                  </h2>
                </div>
                <div className="overflow-x-auto">
                  {recentTransactions.length > 0 ? (
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {recentTransactions.map((transaction) => (
                          <tr key={transaction.id} className="hover:bg-gray-50 transition-colors">
                            <td className="px-6 py-4 text-sm text-gray-600">{transaction.date}</td>
                            <td className="px-6 py-4 text-sm font-medium text-gray-800">
                              <span className="capitalize">{transaction.type}</span>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-600">
                              <span className={transaction.type === 'deposit' || transaction.type === 'interest' ? 'text-green-600' : 'text-red-600'}>
                                {transaction.type === 'deposit' || transaction.type === 'interest' ? '+' : '-'} 
                                ₹{transaction.amount?.toLocaleString() || 0}
                              </span>
                            </td>
                            <td className="px-6 py-4">
                              <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                transaction.status === "completed" || transaction.status === "Completed" || transaction.status === "Credited" || transaction.status === "Paid"
                                  ? "bg-green-100 text-green-800"
                                  : transaction.status === "pending" ? "bg-yellow-100 text-yellow-800"
                                  : "bg-red-100 text-red-800"
                              }`}>
                                {transaction.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      <History size={48} className="mx-auto mb-3 text-gray-300" />
                      <p>No transactions found</p>
                      <p className="text-sm mt-1">Your transaction history will appear here</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Security Settings Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <h3 className="font-semibold text-[#0B2A4A] mb-4 flex items-center gap-2">
                  <Lock size={18} />
                  Security Settings
                </h3>
                <div className="space-y-4">
                  <button className="w-full flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:border-[#FDB813] transition-colors">
                    <div className="flex items-center gap-3">
                      <Lock size={18} className="text-[#FDB813]" />
                      <span className="text-sm font-medium text-gray-700">Change Password</span>
                    </div>
                    <ChevronRight size={16} className="text-gray-400" />
                  </button>
                  <button className="w-full flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:border-[#FDB813] transition-colors">
                    <div className="flex items-center gap-3">
                      <Bell size={18} className="text-[#FDB813]" />
                      <span className="text-sm font-medium text-gray-700">Notification Preferences</span>
                    </div>
                    <ChevronRight size={16} className="text-gray-400" />
                  </button>
                  <button 
                    onClick={handleLogout}
                    className="w-full flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:border-red-300 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <LogOut size={18} className="text-red-500" />
                      <span className="text-sm font-medium text-red-600">Logout</span>
                    </div>
                    <ChevronRight size={16} className="text-gray-400" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default MyProfile;