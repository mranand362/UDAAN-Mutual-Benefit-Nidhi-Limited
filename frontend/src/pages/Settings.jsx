import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  User,
  Lock,
  Bell,
  Shield,
  Globe,
  Smartphone,
  Mail,
  Phone,
  Eye,
  EyeOff,
  CheckCircle,
  AlertCircle,
  Save,
  RefreshCw,
  LogOut,
  Trash2,
  Moon,
  Sun,
  CreditCard,
  FileText,
  Download,
  Printer,
  ChevronRight,
  AlertTriangle,
  X,
  Settings as SettingsIcon
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Settings = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deletePassword, setDeletePassword] = useState("");
  
  // Profile Settings
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  
  // Password Settings
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  // Notification Settings
  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    smsAlerts: true,
    transactionAlerts: true,
    promotionalEmails: false,
    loanReminders: true,
    depositMaturityAlerts: true,
  });
  
  // Preferences
  const [preferences, setPreferences] = useState({
    language: "en",
    sessionTimeout: "30",
    darkMode: false,
  });
  
  // Active Tab
  const [activeTab, setActiveTab] = useState("profile");

  // Load all settings
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }
    fetchSettings();
  }, [navigate]);

  const fetchSettings = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://https://udaan-mutual-benefit-nidhi-limited.onrender.com/api/auth/settings", {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      if (response.data.success) {
        setProfile(response.data.settings.profile);
        setNotifications(response.data.settings.notifications);
        setPreferences(response.data.settings.preferences);
      }
    } catch (error) {
      console.error("Error fetching settings:", error);
      setErrorMessage("Failed to load settings");
    }
  };

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const token = localStorage.getItem("token");
      const response = await axios.put(
        "http://https://udaan-mutual-benefit-nidhi-limited.onrender.com/api/auth/profile",
        {
          name: profile.name,
          phone: profile.phone,
          address: profile.address,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response.data.success) {
        localStorage.setItem("userName", profile.name);
        setSuccessMessage("Profile updated successfully!");
        setTimeout(() => setSuccessMessage(""), 3000);
      }
    } catch (error) {
      setErrorMessage("Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setErrorMessage("New passwords do not match");
      return;
    }
    
    if (passwordData.newPassword.length < 6) {
      setErrorMessage("Password must be at least 6 characters");
      return;
    }

    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const token = localStorage.getItem("token");
      const response = await axios.put(
        "http://https://udaan-mutual-benefit-nidhi-limited.onrender.com/api/auth/change-password",
        {
          currentPassword: passwordData.currentPassword,
          newPassword: passwordData.newPassword,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response.data.success) {
        setSuccessMessage("Password changed successfully!");
        setPasswordData({
          currentPassword: "",
          newPassword: "",
          confirmPassword: "",
        });
        setTimeout(() => setSuccessMessage(""), 3000);
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Failed to change password");
    } finally {
      setLoading(false);
    }
  };

  const handleNotificationUpdate = async () => {
    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const token = localStorage.getItem("token");
      const response = await axios.put(
        "http://https://udaan-mutual-benefit-nidhi-limited.onrender.com/api/auth/notifications",
        notifications,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      
      if (response.data.success) {
        setSuccessMessage("Notification preferences updated!");
        setTimeout(() => setSuccessMessage(""), 3000);
      }
    } catch (error) {
      setErrorMessage("Failed to update preferences");
    } finally {
      setLoading(false);
    }
  };

  const handlePreferencesUpdate = async () => {
    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const token = localStorage.getItem("token");
      const response = await axios.put(
        "http://https://udaan-mutual-benefit-nidhi-limited.onrender.com/api/auth/preferences",
        preferences,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      
      if (response.data.success) {
        setSuccessMessage("Preferences updated!");
        setTimeout(() => setSuccessMessage(""), 3000);
      }
    } catch (error) {
      setErrorMessage("Failed to update preferences");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteAccount = async () => {
    setLoading(true);
    setErrorMessage("");
    
    try {
      const token = localStorage.getItem("token");
      const response = await axios.delete(
        "http://https://udaan-mutual-benefit-nidhi-limited.onrender.com/api/auth/account",
        {
          data: { password: deletePassword },
          headers: { Authorization: `Bearer ${token}` }
        }
      );
      
      if (response.data.success) {
        localStorage.removeItem("token");
        localStorage.removeItem("userName");
        localStorage.removeItem("userEmail");
        localStorage.removeItem("profileImage");
        navigate("/login");
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Failed to delete account");
      setShowDeleteModal(false);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("profileImage");
    navigate("/login");
  };

  const tabs = [
    { id: "profile", label: "Profile", icon: User },
    { id: "password", label: "Security", icon: Lock },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "preferences", label: "Preferences", icon: Globe },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-[#0B2A4A] flex items-center gap-3">
              <SettingsIcon size={32} className="text-[#FDB813]" />
              Account Settings
            </h1>
            <p className="text-gray-600 mt-2">Manage your account preferences and security</p>
          </div>

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

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Sidebar */}
            <div className="lg:w-64">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden sticky top-24">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-3 px-5 py-3 transition-all ${
                        activeTab === tab.id
                          ? "bg-[#FDB813]/10 text-[#0B2A4A] border-r-4 border-[#FDB813]"
                          : "text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      <Icon size={18} />
                      <span className="text-sm font-medium">{tab.label}</span>
                    </button>
                  );
                })}
                <div className="border-t border-gray-200">
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-5 py-3 text-red-600 hover:bg-red-50 transition-all"
                  >
                    <LogOut size={18} />
                    <span className="text-sm font-medium">Logout</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              {/* Profile Settings */}
              {activeTab === "profile" && (
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h2 className="text-xl font-bold text-[#0B2A4A] mb-6 flex items-center gap-2">
                    <User size={20} className="text-[#FDB813]" />
                    Profile Information
                  </h2>
                  
                  <form onSubmit={handleProfileUpdate} className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                        <input
                          type="text"
                          value={profile.name}
                          onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                          className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FDB813] focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                        <input
                          type="email"
                          value={profile.email}
                          disabled
                          className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg bg-gray-50 text-gray-500"
                        />
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Email cannot be changed</p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                        <input
                          type="tel"
                          value={profile.phone}
                          onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                          className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FDB813] focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Address
                      </label>
                      <textarea
                        value={profile.address}
                        onChange={(e) => setProfile({ ...profile, address: e.target.value })}
                        rows="3"
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FDB813] focus:border-transparent"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="bg-[#FDB813] text-[#0B2A4A] px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center gap-2 disabled:opacity-50"
                    >
                      {loading ? (
                        <>
                          <RefreshCw size={16} className="animate-spin" />
                          Saving...
                        </>
                      ) : (
                        <>
                          <Save size={16} />
                          Save Changes
                        </>
                      )}
                    </button>
                  </form>
                </div>
              )}

              {/* Password Settings */}
              {activeTab === "password" && (
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl shadow-lg p-6">
                    <h2 className="text-xl font-bold text-[#0B2A4A] mb-6 flex items-center gap-2">
                      <Lock size={20} className="text-[#FDB813]" />
                      Change Password
                    </h2>
                    
                    <form onSubmit={handlePasswordChange} className="space-y-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Current Password
                        </label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                          <input
                            type={showCurrentPassword ? "text" : "password"}
                            value={passwordData.currentPassword}
                            onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
                            required
                            className="w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FDB813] focus:border-transparent"
                          />
                          <button
                            type="button"
                            onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                          >
                            {showCurrentPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                          </button>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          New Password
                        </label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                          <input
                            type={showNewPassword ? "text" : "password"}
                            value={passwordData.newPassword}
                            onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                            required
                            className="w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FDB813] focus:border-transparent"
                          />
                          <button
                            type="button"
                            onClick={() => setShowNewPassword(!showNewPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                          >
                            {showNewPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                          </button>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">Password must be at least 6 characters</p>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Confirm New Password
                        </label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                          <input
                            type={showConfirmPassword ? "text" : "password"}
                            value={passwordData.confirmPassword}
                            onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                            required
                            className="w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FDB813] focus:border-transparent"
                          />
                          <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                          >
                            {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                          </button>
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="bg-[#FDB813] text-[#0B2A4A] px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center gap-2 disabled:opacity-50"
                      >
                        {loading ? (
                          <>
                            <RefreshCw size={16} className="animate-spin" />
                            Updating...
                          </>
                        ) : (
                          <>
                            <Save size={16} />
                            Update Password
                          </>
                        )}
                      </button>
                    </form>
                  </div>
                </div>
              )}

              {/* Notification Settings */}
              {activeTab === "notifications" && (
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h2 className="text-xl font-bold text-[#0B2A4A] mb-6 flex items-center gap-2">
                    <Bell size={20} className="text-[#FDB813]" />
                    Notification Preferences
                  </h2>
                  
                  <div className="space-y-4">
                    {[
                      { key: "emailNotifications", label: "Email Notifications", desc: "Receive updates via email" },
                      { key: "smsAlerts", label: "SMS Alerts", desc: "Get instant SMS alerts for transactions" },
                      { key: "transactionAlerts", label: "Transaction Alerts", desc: "Notifications for all transactions" },
                      { key: "promotionalEmails", label: "Promotional Emails", desc: "Offers and updates from our team" },
                      { key: "loanReminders", label: "Loan Reminders", desc: "EMI due date reminders" },
                      { key: "depositMaturityAlerts", label: "Deposit Maturity Alerts", desc: "When your deposit matures" },
                    ].map((item) => (
                      <div key={item.key} className="flex items-center justify-between py-3 border-b border-gray-100">
                        <div>
                          <p className="font-medium text-gray-800">{item.label}</p>
                          <p className="text-xs text-gray-500">{item.desc}</p>
                        </div>
                        <button
                          onClick={() => setNotifications({ ...notifications, [item.key]: !notifications[item.key] })}
                          className={`relative w-10 h-5 rounded-full transition-colors ${
                            notifications[item.key] ? "bg-[#FDB813]" : "bg-gray-300"
                          }`}
                        >
                          <span
                            className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-transform ${
                              notifications[item.key] ? "left-5" : "left-0.5"
                            }`}
                          />
                        </button>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={handleNotificationUpdate}
                    disabled={loading}
                    className="mt-6 bg-[#FDB813] text-[#0B2A4A] px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center gap-2 disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <RefreshCw size={16} className="animate-spin" />
                        Saving...
                      </>
                    ) : (
                      <>
                        <Save size={16} />
                        Save Preferences
                      </>
                    )}
                  </button>
                </div>
              )}

              {/* Preferences */}
              {activeTab === "preferences" && (
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl shadow-lg p-6">
                    <h2 className="text-xl font-bold text-[#0B2A4A] mb-6 flex items-center gap-2">
                      <Globe size={20} className="text-[#FDB813]" />
                      Display Preferences
                    </h2>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between py-3 border-b border-gray-100">
                        <div>
                          <p className="font-medium text-gray-800">Dark Mode</p>
                          <p className="text-xs text-gray-500">Switch between light and dark theme</p>
                        </div>
                        <button
                          onClick={() => setPreferences({ ...preferences, darkMode: !preferences.darkMode })}
                          className={`relative w-10 h-5 rounded-full transition-colors ${
                            preferences.darkMode ? "bg-[#FDB813]" : "bg-gray-300"
                          }`}
                        >
                          <span
                            className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-transform ${
                              preferences.darkMode ? "left-5" : "left-0.5"
                            }`}
                          />
                        </button>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Session Timeout (minutes)
                        </label>
                        <select
                          value={preferences.sessionTimeout}
                          onChange={(e) => setPreferences({ ...preferences, sessionTimeout: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FDB813] focus:border-transparent"
                        >
                          <option value="15">15 minutes</option>
                          <option value="30">30 minutes</option>
                          <option value="60">1 hour</option>
                          <option value="120">2 hours</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Language
                        </label>
                        <select
                          value={preferences.language}
                          onChange={(e) => setPreferences({ ...preferences, language: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FDB813] focus:border-transparent"
                        >
                          <option value="en">English</option>
                          <option value="hi">हिन्दी (Hindi)</option>
                          <option value="ta">தமிழ் (Tamil)</option>
                          <option value="te">తెలుగు (Telugu)</option>
                        </select>
                      </div>
                    </div>

                    <button
                      onClick={handlePreferencesUpdate}
                      disabled={loading}
                      className="mt-6 bg-[#FDB813] text-[#0B2A4A] px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center gap-2 disabled:opacity-50"
                    >
                      {loading ? (
                        <>
                          <RefreshCw size={16} className="animate-spin" />
                          Saving...
                        </>
                      ) : (
                        <>
                          <Save size={16} />
                          Save Preferences
                        </>
                      )}
                    </button>
                  </div>

                  {/* Danger Zone */}
                  <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
                    <h3 className="font-semibold text-red-800 mb-2 flex items-center gap-2">
                      <AlertTriangle size={18} />
                      Danger Zone
                    </h3>
                    <p className="text-sm text-red-600 mb-4">
                      Once you delete your account, there is no going back. All your data will be permanently removed.
                    </p>
                    <button
                      onClick={() => setShowDeleteModal(true)}
                      className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                    >
                      <Trash2 size={16} />
                      Delete Account
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Delete Account Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-red-600">Delete Account</h3>
              <button onClick={() => setShowDeleteModal(false)} className="text-gray-400 hover:text-gray-600">
                <X size={24} />
              </button>
            </div>
            <p className="text-gray-600 mb-4">
              Are you sure you want to delete your account? This action cannot be undone.
            </p>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Enter your password to confirm
              </label>
              <input
                type="password"
                value={deletePassword}
                onChange={(e) => setDeletePassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteAccount}
                disabled={!deletePassword || loading}
                className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50"
              >
                {loading ? "Deleting..." : "Delete Account"}
              </button>
            </div>
          </div>
        </div>
      )}

     
    </>
  );
};

export default Settings;