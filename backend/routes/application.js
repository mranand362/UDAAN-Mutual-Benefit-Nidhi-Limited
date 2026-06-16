import express from "express";
import jwt from "jsonwebtoken";
import multer from "multer";
import path from "path";
import fs from "fs";
import Application from "../models/Application.js";

const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let uploadDir = "uploads/applications";
    
    if (file.fieldname === "photo" || file.fieldname === "signature") {
      uploadDir = `${uploadDir}/images`;
    } else if (file.fieldname === "aadhaarFront" || file.fieldname === "aadhaarBack" || file.fieldname === "panCard") {
      uploadDir = `${uploadDir}/documents`;
    } else {
      uploadDir = `${uploadDir}/others`;
    }
    
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|pdf/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);
    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error("Only images and PDF files are allowed"));
    }
  },
});

// Middleware to verify token (optional for open account)
const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    req.userId = null; // Allow guest applications
    return next();
  }

  try {
    const decoded = jwt.verify(token, "SECRETKEY");
    req.userId = decoded.userId;
    next();
  } catch (error) {
    req.userId = null;
    next();
  }
};

// ==================== OPEN ACCOUNT ENDPOINT ====================
router.post("/open-account", verifyToken, upload.fields([
  { name: "aadhaarFront", maxCount: 1 },
  { name: "aadhaarBack", maxCount: 1 },
  { name: "panCard", maxCount: 1 },
  { name: "photo", maxCount: 1 },
  { name: "signature", maxCount: 1 },
  { name: "addressProof", maxCount: 1 },
]), async (req, res) => {
  try {
    const {
      fullName,
      dateOfBirth,
      gender,
      email,
      mobile,
      alternateMobile,
      occupation,
      annualIncome,
      panNumber,
      aadhaarNumber,
      addressLine1,
      addressLine2,
      city,
      state,
      pincode,
      landmark,
      accountType,
      initialDeposit,
      nomineeName,
      nomineeRelation,
      nomineeGuardian,
      referralCode,
      sourceOfFunds,
      agreedToTerms,
      agreeToSms,
      agreeToEmail,
    } = req.body;

    // Validate required fields
    if (!fullName || !dateOfBirth || !gender || !email || !mobile || !panNumber || !aadhaarNumber) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Get file paths
    const files = {
      aadhaarFront: req.files["aadhaarFront"]?.[0]?.path || null,
      aadhaarBack: req.files["aadhaarBack"]?.[0]?.path || null,
      panCard: req.files["panCard"]?.[0]?.path || null,
      photo: req.files["photo"]?.[0]?.path || null,
      signature: req.files["signature"]?.[0]?.path || null,
      addressProof: req.files["addressProof"]?.[0]?.path || null,
    };

    // Create application
    const application = new Application({
      userId: req.userId,
      type: "savings-account",
      accountType: accountType || "basic",
      amount: parseFloat(initialDeposit) || 1000,
      status: "pending",
      personalInfo: {
        fullName,
        email,
        phone: mobile,
        alternatePhone: alternateMobile || "",
        dob: dateOfBirth,
        gender,
        address: `${addressLine1}${addressLine2 ? `, ${addressLine2}` : ""}${landmark ? `, ${landmark}` : ""}`,
        city,
        state,
        pincode,
        panNumber: panNumber.toUpperCase(),
        aadhaarNumber,
      },
      employmentInfo: {
        occupation,
        annualIncome: annualIncome,
      },
      depositInfo: {
        depositType: "savings",
        initialDeposit: parseFloat(initialDeposit),
        sourceOfFunds: sourceOfFunds || "",
      },
      nomineeInfo: {
        name: nomineeName,
        relation: nomineeRelation,
        guardianName: nomineeGuardian || "",
      },
      referralCode: referralCode || "",
      preferences: {
        agreeToSms: agreeToSms === "true" || agreeToSms === true,
        agreeToEmail: agreeToEmail === "true" || agreeToEmail === true,
        agreedToTerms: agreedToTerms === "true" || agreedToTerms === true,
      },
      documents: files,
      submittedAt: new Date(),
    });

    await application.save();

    res.status(201).json({
      success: true,
      message: "Account opening application submitted successfully",
      applicationId: application._id,
      application: {
        id: application._id,
        status: application.status,
        createdAt: application.createdAt,
      },
    });

  } catch (error) {
    console.error("Open account error:", error);
    res.status(500).json({ message: "Failed to submit application", error: error.message });
  }
});

// ==================== DEPOSIT APPLY - FIXED ====================
router.post("/deposit-apply", verifyToken, async (req, res) => {
  try {
    console.log("📥 Deposit apply request received");
    console.log("Body:", JSON.stringify(req.body, null, 2));
    console.log("User ID:", req.userId);
    
    const {
      fullName, email, phone, dob, address, city, state, pincode,
      panNumber, aadhaarNumber, occupation, annualIncome,
      depositType, depositAmount, tenure, payoutOption,
      nominationName, nominationRelation, nominationAge,
      calculatedInterest
    } = req.body;

    // CHECK REQUIRED FIELDS
    const requiredFields = ['fullName', 'email', 'phone', 'depositType', 'depositAmount', 'tenure'];
    const missingFields = requiredFields.filter(field => !req.body[field]);
    
    if (missingFields.length > 0) {
      console.log("❌ Missing fields:", missingFields);
      return res.status(400).json({ 
        success: false, 
        message: `Missing required fields: ${missingFields.join(", ")}`
      });
    }

    // ✅ FIX: Ensure depositType is valid (default to "fixed" if empty)
    const validDepositTypes = ["fixed", "recurring", "daily", "taxsaver", "cumulative", "noncumulative", "savings"];
    const finalDepositType = depositType && validDepositTypes.includes(depositType) ? depositType : "fixed";

    // ✅ FIX: Ensure tenure is a valid number
    const finalTenure = parseInt(tenure) || 12;
    const finalAmount = parseFloat(depositAmount) || 0;

    console.log(`✅ Deposit Type: ${finalDepositType}, Tenure: ${finalTenure}, Amount: ${finalAmount}`);

    // CREATE APPLICATION WITH SAFE DEFAULTS
    const applicationData = {
      userId: req.userId,
      type: "deposit",
      depositType: finalDepositType,
      amount: finalAmount,
      tenure: finalTenure,
      status: "pending",
      personalInfo: {
        fullName: fullName || "",
        email: email || "",
        phone: phone || "",
        alternatePhone: "",
        dob: dob || "",
        gender: "",
        address: address || "",
        city: city || "",
        state: state || "",
        pincode: pincode || "",
        panNumber: panNumber || "",
        aadhaarNumber: aadhaarNumber || "",
      },
      employmentInfo: {
        occupation: occupation || "",
        annualIncome: annualIncome || "",
        employmentType: "",
        monthlyIncome: 0,
      },
      depositInfo: {
        depositType: finalDepositType,
        payoutOption: payoutOption || "maturity",
        interestRate: calculatedInterest?.rate || 0,
        interestEarned: calculatedInterest?.interest || 0,
        maturityAmount: calculatedInterest?.maturityAmount || 0,
        initialDeposit: finalAmount,
        sourceOfFunds: "",
      },
      nomineeInfo: {
        name: nominationName || "",
        relation: nominationRelation || "",
        age: nominationAge || "",
        guardianName: "",
      },
      referralCode: "",
      preferences: {
        agreeToSms: false,
        agreeToEmail: false,
        agreedToTerms: false,
      },
      documents: {
        aadhaarFront: "",
        aadhaarBack: "",
        panCard: "",
        photo: "",
        signature: "",
        addressProof: "",
      },
      submittedAt: new Date(),
    };

    console.log("📝 Creating application with data");
    const application = new Application(applicationData);
    await application.save();
    
    console.log("✅ Application saved successfully, ID:", application._id);

    res.status(201).json({
      success: true,
      message: "Deposit application submitted successfully",
      application: {
        id: application._id,
        status: application.status,
        createdAt: application.createdAt,
      },
    });

  } catch (error) {
    console.error("❌ ERROR:", error);
    console.error("Error name:", error.name);
    console.error("Error message:", error.message);
    
    if (error.name === 'ValidationError') {
      const errors = {};
      for (let field in error.errors) {
        errors[field] = error.errors[field].message;
      }
      return res.status(400).json({ 
        success: false, 
        message: "Validation failed",
        errors: errors
      });
    }
    
    res.status(500).json({ 
      success: false, 
      message: "Server error: " + error.message,
      error: error.message 
    });
  }
});

// ==================== APPLY LOAN ====================
router.post("/apply", verifyToken, async (req, res) => {
  try {
    const {
      fullName, email, phone, dob, address, panNumber,
      employmentType, monthlyIncome,
      loanType, loanAmount, tenure
    } = req.body;

    const application = new Application({
      userId: req.userId,
      type: "loan",
      loanType: loanType,
      amount: loanAmount,
      tenure: tenure,
      status: "pending",
      personalInfo: {
        fullName,
        email,
        phone,
        dob,
        address,
        panNumber,
      },
      employmentInfo: {
        employmentType,
        monthlyIncome,
      },
    });

    await application.save();

    res.status(201).json({
      success: true,
      message: "Application submitted successfully",
      application: {
        id: application._id,
        status: application.status,
        createdAt: application.createdAt,
      },
    });
  } catch (error) {
    console.error("Application error:", error);
    res.status(500).json({ message: "Failed to submit application" });
  }
});

// ==================== GET MY APPLICATIONS ====================
router.get("/my-applications", verifyToken, async (req, res) => {
  try {
    const applications = await Application.find({ userId: req.userId })
      .sort({ createdAt: -1 });
    
    res.json({
      success: true,
      applications: applications.map(app => ({
        id: app._id,
        type: app.type,
        loanType: app.loanType,
        depositType: app.depositType,
        accountType: app.accountType,
        amount: app.amount,
        tenure: app.tenure,
        status: app.status,
        createdAt: app.createdAt,
        personalInfo: app.personalInfo,
      })),
    });
  } catch (error) {
    console.error("Fetch applications error:", error);
    res.status(500).json({ message: "Failed to fetch applications" });
  }
});

// ==================== GET APPLICATION COUNT ====================
router.get("/application-count", verifyToken, async (req, res) => {
  try {
    const pendingCount = await Application.countDocuments({ 
      userId: req.userId, 
      status: "pending" 
    });
    const totalCount = await Application.countDocuments({ userId: req.userId });
    
    res.json({
      success: true,
      pending: pendingCount,
      total: totalCount,
    });
  } catch (error) {
    console.error("Count error:", error);
    res.status(500).json({ message: "Failed to fetch count" });
  }
});

// ==================== GET SINGLE APPLICATION ====================
router.get("/application/:id", verifyToken, async (req, res) => {
  try {
    const application = await Application.findOne({
      _id: req.params.id,
      userId: req.userId,
    });
    
    if (!application) {
      return res.status(404).json({ message: "Application not found" });
    }
    
    res.json({
      success: true,
      application,
    });
  } catch (error) {
    console.error("Fetch application error:", error);
    res.status(500).json({ message: "Failed to fetch application" });
  }
});

export default router;