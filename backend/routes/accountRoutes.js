import express from "express";
import mongoose from "mongoose";
import multer from "multer";
import path from "path";
import fs from "fs";
import jwt from "jsonwebtoken";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

// Ensure upload directory exists
const uploadDir = path.join(__dirname, '../uploads/documents');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
  console.log("Created upload directory:", uploadDir);
}

// Configure multer for file uploads - SIMPLIFIED
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + ext);
  }
});

// Temporarily allow all files for debugging
const upload = multer({ 
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 } // 10MB limit
});

const uploadFields = upload.fields([
  { name: 'aadhaarFront', maxCount: 1 },
  { name: 'aadhaarBack', maxCount: 1 },
  { name: 'panCard', maxCount: 1 },
  { name: 'photo', maxCount: 1 },
  { name: 'signature', maxCount: 1 },
  { name: 'addressProof', maxCount: 1 }
]);

// Account Schema
const accountSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  applicationId: {
    type: String,
    unique: true
  },
  personalInfo: {
    fullName: { type: String },
    dateOfBirth: { type: String },
    gender: { type: String },
    email: { type: String },
    mobile: { type: String },
    alternateMobile: { type: String },
    occupation: { type: String },
    annualIncome: { type: String }
  },
  identityInfo: {
    panNumber: { type: String },
    aadhaarNumber: { type: String }
  },
  addressInfo: {
    addressLine1: { type: String },
    addressLine2: { type: String },
    city: { type: String },
    state: { type: String },
    pincode: { type: String },
    landmark: { type: String }
  },
  accountDetails: {
    accountType: { type: String },
    initialDeposit: { type: Number },
    nomineeName: { type: String },
    nomineeRelation: { type: String },
    nomineeGuardian: { type: String },
    referralCode: { type: String },
    sourceOfFunds: { type: String },
    bankName: { type: String },
    accountNumber: { type: String },
    ifscCode: { type: String },
    accountHolderName: { type: String }
  },
  documents: {
    aadhaarFront: { type: String },
    aadhaarBack: { type: String },
    panCard: { type: String },
    photo: { type: String },
    signature: { type: String },
    addressProof: { type: String }
  },
  preferences: {
    agreeToSms: { type: Boolean, default: false },
    agreeToEmail: { type: Boolean, default: false },
    agreedToTerms: { type: Boolean, default: false }
  },
  status: {
    type: String,
    enum: ['pending', 'under_review', 'approved', 'rejected', 'completed'],
    default: 'pending'
  },
  submittedAt: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

// Remove unique index for userId temporarily to avoid duplicate issues
// accountSchema.index({ userId: 1 }, { unique: true });

const Account = mongoose.model('Account', accountSchema);

// Verify Token Middleware
const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ success: false, message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, "SECRETKEY");
    req.userId = decoded.userId;
    next();
  } catch (error) {
    console.error("Token verification error:", error);
    return res.status(401).json({ success: false, message: "Invalid token" });
  }
};

// POST /api/accounts/create
router.post("/create", verifyToken, uploadFields, async (req, res) => {
  try {
    console.log("Received account creation request for user:", req.userId);
    console.log("Form data:", req.body);
    console.log("Files:", req.files ? Object.keys(req.files) : "No files");
    
    const userId = req.userId;
    
    // Check if account already exists
    let account = await Account.findOne({ userId });
    
    // Prepare document paths
    const documents = {};
    if (req.files) {
      if (req.files.aadhaarFront) documents.aadhaarFront = req.files.aadhaarFront[0].path;
      if (req.files.aadhaarBack) documents.aadhaarBack = req.files.aadhaarBack[0].path;
      if (req.files.panCard) documents.panCard = req.files.panCard[0].path;
      if (req.files.photo) documents.photo = req.files.photo[0].path;
      if (req.files.signature) documents.signature = req.files.signature[0].path;
      if (req.files.addressProof) documents.addressProof = req.files.addressProof[0].path;
    }
    
    const accountData = {
      userId,
      personalInfo: {
        fullName: req.body.fullName || "",
        dateOfBirth: req.body.dateOfBirth || "",
        gender: req.body.gender || "",
        email: req.body.email || "",
        mobile: req.body.mobile || "",
        alternateMobile: req.body.alternateMobile || "",
        occupation: req.body.occupation || "",
        annualIncome: req.body.annualIncome || ""
      },
      identityInfo: {
        panNumber: req.body.panNumber || "",
        aadhaarNumber: req.body.aadhaarNumber || ""
      },
      addressInfo: {
        addressLine1: req.body.addressLine1 || "",
        addressLine2: req.body.addressLine2 || "",
        city: req.body.city || "",
        state: req.body.state || "",
        pincode: req.body.pincode || "",
        landmark: req.body.landmark || ""
      },
      accountDetails: {
        accountType: req.body.accountType || "savings",
        initialDeposit: parseFloat(req.body.initialDeposit) || 1000,
        nomineeName: req.body.nomineeName || "",
        nomineeRelation: req.body.nomineeRelation || "",
        nomineeGuardian: req.body.nomineeGuardian || "",
        referralCode: req.body.referralCode || "",
        sourceOfFunds: req.body.sourceOfFunds || ""
      },
      documents,
      preferences: {
        agreeToSms: req.body.agreeToSms === 'true' || req.body.agreeToSms === true,
        agreeToEmail: req.body.agreeToEmail === 'true' || req.body.agreeToEmail === true,
        agreedToTerms: req.body.agreedToTerms === 'true' || req.body.agreedToTerms === true
      },
      status: 'pending',
      applicationId: 'UDAAN' + Date.now() + Math.floor(Math.random() * 10000),
      submittedAt: new Date()
    };
    
    if (account) {
      // Update existing account
      account = await Account.findOneAndUpdate(
        { userId },
        { $set: accountData },
        { new: true }
      );
      console.log("Updated existing account:", account._id);
    } else {
      // Create new account
      account = new Account(accountData);
      await account.save();
      console.log("Created new account:", account._id);
    }
    
    res.json({
      success: true,
      message: 'Account application saved successfully',
      applicationId: account.applicationId,
      account
    });
    
  } catch (error) {
    console.error('Error saving account:', error);
    console.error('Error stack:', error.stack);
    res.status(500).json({
      success: false,
      message: 'Server error: ' + error.message,
      error: error.message
    });
  }
});

// GET /api/accounts/my-account
router.get("/my-account", verifyToken, async (req, res) => {
  try {
    console.log("Fetching account for user:", req.userId);
    const account = await Account.findOne({ userId: req.userId });
    
    if (!account) {
      return res.json({
        success: true,
        hasAccount: false,
        message: 'No account application found'
      });
    }
    
    res.json({
      success: true,
      hasAccount: true,
      account
    });
    
  } catch (error) {
    console.error('Error fetching account:', error);
    res.status(500).json({
      success: false,
      message: 'Server error: ' + error.message
    });
  }
});

// GET /api/accounts/application-status
router.get("/application-status", verifyToken, async (req, res) => {
  try {
    const account = await Account.findOne({ userId: req.userId });
    
    res.json({
      success: true,
      hasApplication: !!account,
      status: account?.status || null,
      applicationId: account?.applicationId || null,
      submittedAt: account?.submittedAt || null
    });
    
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

export default router;