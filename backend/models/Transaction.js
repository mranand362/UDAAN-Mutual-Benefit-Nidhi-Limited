import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  type: {
    type: String,
    enum: ["deposit", "withdrawal", "interest", "loan_emi", "investment", "payout"],
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "completed", "failed", "credited", "paid", "active"],
    default: "completed",
  },
  description: {
    type: String,
    default: "",
  },
  referenceId: {
    type: String,
    default: "",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Transaction", transactionSchema);