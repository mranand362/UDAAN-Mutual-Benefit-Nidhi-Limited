import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import User from "../models/User.js";
import Transaction from "../models/Transaction.js";

const router = express.Router();

// Middleware to verify token
const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, "SECRETKEY");
    req.userId = decoded.userId;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

// SIGNUP
router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hashedPassword
    });

    await user.save();

    const token = jwt.sign(
      { userId: user._id },
      "SECRETKEY",
      { expiresIn: "1d" }
    );

    res.json({
      success: true,
      message: "Signup successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        profileImage: user.profileImage || "",
        totalDeposits: user.totalDeposits,
        activeLoans: user.activeLoans,
        totalInvestment: user.totalInvestment,
        memberSince: user.memberSince
      }
    });

  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Wrong password" });
    }

    const token = jwt.sign(
      { userId: user._id },
      "SECRETKEY",
      { expiresIn: "1d" }
    );

    res.json({
      success: true,
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        profileImage: user.profileImage || "",
        totalDeposits: user.totalDeposits || 0,
        activeLoans: user.activeLoans || 0,
        totalInvestment: user.totalInvestment || 0,
        memberSince: user.memberSince
      }
    });

  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// ==================== FORGOT PASSWORD ====================
// Request password reset
router.post("/forgot-password", async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      // For security, don't reveal that user doesn't exist
      return res.status(200).json({ 
        success: true, 
        message: "If an account exists with this email, you will receive a password reset link." 
      });
    }

    // Generate reset token
    const resetToken = crypto.randomBytes(32).toString("hex");
    const resetTokenExpiry = new Date(Date.now() + 3600000); // 1 hour from now

    // Save reset token to user
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpiry = resetTokenExpiry;
    await user.save();

    // In a real application, you would send an email here
    // For development, we'll return the token in the response
    // In production, remove this and implement email sending
    
    console.log(`Password reset token for ${email}: ${resetToken}`);
    
    // For development purposes only - return token in response
    // Remove this in production and implement email sending
    res.json({
      success: true,
      message: "Password reset link sent to your email",
      resetToken: resetToken, // Remove this in production
      resetUrl: `http://localhost:3000/reset-password/${resetToken}`
    });

  } catch (error) {
    console.error("Forgot password error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Reset password with token
router.post("/reset-password", async (req, res) => {
  const { token, newPassword } = req.body;

  try {
    if (!token || !newPassword) {
      return res.status(400).json({ message: "Token and new password are required" });
    }

    if (newPassword.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters" });
    }

    // Find user with valid reset token
    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpiry: { $gt: Date.now() }
    });

    if (!user) {
      return res.status(400).json({ message: "Invalid or expired reset token" });
    }

    // Hash new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    
    // Update user password and clear reset token fields
    user.password = hashedPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpiry = undefined;
    await user.save();

    res.json({
      success: true,
      message: "Password reset successful. Please login with your new password."
    });

  } catch (error) {
    console.error("Reset password error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Verify reset token
router.get("/verify-reset-token/:token", async (req, res) => {
  const { token } = req.params;

  try {
    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpiry: { $gt: Date.now() }
    });

    if (!user) {
      return res.status(400).json({ valid: false, message: "Invalid or expired token" });
    }

    res.json({ valid: true, message: "Token is valid" });

  } catch (error) {
    console.error("Verify token error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// ==================== END OF FORGOT PASSWORD ====================

// GET PROFILE
router.get("/profile", verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-password");
    
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    
    res.json({ 
      success: true, 
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone || "",
        address: user.address || "",
        city: user.city || "",
        state: user.state || "",
        pincode: user.pincode || "",
        occupation: user.occupation || "",
        panCard: user.panCard || "",
        aadharCard: user.aadharCard || "",
        profileImage: user.profileImage || "",
        totalDeposits: user.totalDeposits || 0,
        activeLoans: user.activeLoans || 0,
        totalInvestment: user.totalInvestment || 0,
        memberSince: user.memberSince
      }
    });
  } catch (error) {
    console.error("Profile error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// UPDATE PROFILE - FIXED DEPRECATION WARNING
router.put("/profile", verifyToken, async (req, res) => {
  try {
    const { name, phone, address, city, state, pincode, occupation, panCard, aadharCard, profileImage } = req.body;
    
    const updateData = {};
    if (name !== undefined) updateData.name = name;
    if (phone !== undefined) updateData.phone = phone;
    if (address !== undefined) updateData.address = address;
    if (city !== undefined) updateData.city = city;
    if (state !== undefined) updateData.state = state;
    if (pincode !== undefined) updateData.pincode = pincode;
    if (occupation !== undefined) updateData.occupation = occupation;
    if (panCard !== undefined) updateData.panCard = panCard;
    if (aadharCard !== undefined) updateData.aadharCard = aadharCard;
    if (profileImage !== undefined) updateData.profileImage = profileImage;
    
    // FIXED: Changed from { new: true } to { returnDocument: 'after' }
    const user = await User.findByIdAndUpdate(
      req.userId,
      updateData,
      { returnDocument: 'after', runValidators: true }
    ).select("-password");
    
    res.json({ 
      success: true, 
      message: "Profile updated successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone || "",
        address: user.address || "",
        city: user.city || "",
        state: user.state || "",
        pincode: user.pincode || "",
        occupation: user.occupation || "",
        panCard: user.panCard || "",
        aadharCard: user.aadharCard || "",
        profileImage: user.profileImage || ""
      }
    });
  } catch (error) {
    console.error("Update profile error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// CHANGE PASSWORD
router.put("/change-password", verifyToken, async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;
    const user = await User.findById(req.userId);
    
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    
    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Current password is incorrect" });
    }
    
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save();
    
    res.json({ success: true, message: "Password changed successfully" });
  } catch (error) {
    console.error("Password change error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// UPDATE NOTIFICATION PREFERENCES
router.put("/notifications", verifyToken, async (req, res) => {
  try {
    const { emailNotifications, smsAlerts, transactionAlerts, promotionalEmails, loanReminders, depositMaturityAlerts } = req.body;
    
    // FIXED: Changed from { new: true } to { returnDocument: 'after' }
    await User.findByIdAndUpdate(req.userId, {
      notificationPreferences: {
        emailNotifications,
        smsAlerts,
        transactionAlerts,
        promotionalEmails,
        loanReminders,
        depositMaturityAlerts
      }
    });
    
    res.json({ success: true, message: "Notification preferences updated" });
  } catch (error) {
    console.error("Notification update error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// UPDATE USER PREFERENCES
router.put("/preferences", verifyToken, async (req, res) => {
  try {
    const { language, sessionTimeout, darkMode } = req.body;
    
    // FIXED: Changed from { new: true } to { returnDocument: 'after' }
    await User.findByIdAndUpdate(req.userId, {
      preferences: {
        language,
        sessionTimeout,
        darkMode
      }
    });
    
    res.json({ success: true, message: "Preferences updated" });
  } catch (error) {
    console.error("Preferences update error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// GET ALL SETTINGS
router.get("/settings", verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-password");
    
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    
    res.json({
      success: true,
      settings: {
        profile: {
          name: user.name,
          email: user.email,
          phone: user.phone || "",
          address: user.address || ""
        },
        notifications: user.notificationPreferences || {
          emailNotifications: true,
          smsAlerts: true,
          transactionAlerts: true,
          promotionalEmails: false,
          loanReminders: true,
          depositMaturityAlerts: true
        },
        preferences: user.preferences || {
          language: "en",
          sessionTimeout: "30",
          darkMode: false
        }
      }
    });
  } catch (error) {
    console.error("Get settings error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// DELETE ACCOUNT
router.delete("/account", verifyToken, async (req, res) => {
  try {
    const { password } = req.body;
    const user = await User.findById(req.userId);
    
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Password is incorrect" });
    }
    
    // Delete user and all related data
    await User.findByIdAndDelete(req.userId);
    await Transaction.deleteMany({ userId: req.userId });
    
    res.json({ success: true, message: "Account deleted successfully" });
  } catch (error) {
    console.error("Account deletion error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// GET USER STATS
router.get("/stats", verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    
    res.json({
      success: true,
      totalDeposits: user.totalDeposits || 0,
      activeLoans: user.activeLoans || 0,
      totalInvestment: user.totalInvestment || 0,
      memberSince: user.memberSince
    });
  } catch (error) {
    console.error("Stats error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// GET USER TRANSACTIONS
router.get("/transactions", verifyToken, async (req, res) => {
  try {
    const transactions = await Transaction.find({ userId: req.userId })
      .sort({ date: -1 })
      .limit(10);
    
    res.json({
      success: true,
      transactions: transactions.map(t => ({
        id: t._id,
        type: t.type,
        amount: t.amount,
        date: t.date.toLocaleDateString(),
        status: t.status,
        description: t.description
      }))
    });
  } catch (error) {
    console.error("Transactions error:", error);
    res.json({
      success: true,
      transactions: []
    });
  }
});

export default router;