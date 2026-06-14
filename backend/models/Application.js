import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    default: null,
  },
  type: {
    type: String,
    enum: ["loan", "deposit", "investment", "savings", "savings-account"],
    default: "loan",
  },
  depositType: {
    type: String,
    enum: ["fixed", "recurring", "daily", "taxsaver", "cumulative", "noncumulative", "savings"],
    default: "fixed",
  },
  accountType: {
    type: String,
    enum: ["basic", "premium", "senior", "family", "savings", "current", "salary"],
    default: "basic",
  },
  loanType: {
    type: String,
    enum: ["fd", "property", "policy", "gold", "personal", "vehicle", "education", "business"],
    default: "personal",
  },
  amount: {
    type: Number,
    default: 0,
  },
  tenure: {
    type: Number,
    default: 0,
  },
  status: {
    type: String,
    enum: ["pending", "approved", "rejected", "processing", "under_review", "completed"],
    default: "pending",
  },
  personalInfo: {
    fullName: String,
    email: String,
    phone: String,
    alternatePhone: String,
    dob: String,
    gender: String,
    address: String,
    city: String,
    state: String,
    pincode: String,
    panNumber: String,
    aadhaarNumber: String,
  },
  employmentInfo: {
    employmentType: String,
    monthlyIncome: Number,
    occupation: String,
    annualIncome: String,
  },
  depositInfo: {
    depositType: String,
    payoutOption: String,
    interestRate: Number,
    interestEarned: Number,
    maturityAmount: Number,
    initialDeposit: Number,
    sourceOfFunds: String,
  },
  nomineeInfo: {
    name: String,
    relation: String,
    age: String,
    guardianName: String,
  },
  referralCode: {
    type: String,
    default: "",
  },
  preferences: {
    agreeToSms: { type: Boolean, default: false },
    agreeToEmail: { type: Boolean, default: false },
    agreedToTerms: { type: Boolean, default: false },
  },
  documents: {
    aadhaarFront: String,
    aadhaarBack: String,
    panCard: String,
    photo: String,
    signature: String,
    addressProof: String,
  },
  submittedAt: {
    type: Date,
    default: Date.now,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Application", applicationSchema);