import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, required: true },
  phone: { type: String, default: "" },
  address: { type: String, default: "" },
  city: { type: String, default: "" },
  state: { type: String, default: "" },
  pincode: { type: String, default: "" },
  occupation: { type: String, default: "" },
  panCard: { type: String, default: "" },
  aadharCard: { type: String, default: "" },
  profileImage: { type: String, default: "" },
  totalDeposits: { type: Number, default: 0 },
  activeLoans: { type: Number, default: 0 },
  totalInvestment: { type: Number, default: 0 },
  memberSince: { type: String, default: () => new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) },
  
  // Notification Preferences
  notificationPreferences: {
    emailNotifications: { type: Boolean, default: true },
    smsAlerts: { type: Boolean, default: true },
    transactionAlerts: { type: Boolean, default: true },
    promotionalEmails: { type: Boolean, default: false },
    loanReminders: { type: Boolean, default: true },
    depositMaturityAlerts: { type: Boolean, default: true }
  },
  
  // User Preferences
  preferences: {
    language: { type: String, default: "en" },
    sessionTimeout: { type: String, default: "30" },
    darkMode: { type: Boolean, default: false }
  },
  resetPasswordToken: {
  type: String,
  default: null
},
resetPasswordExpiry: {
  type: Date,
  default: null
},
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export default mongoose.model("User", userSchema);