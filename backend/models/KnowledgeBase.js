import mongoose from "mongoose";

const KnowledgeBaseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
    },
    excerpt: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ["account", "deposit", "loan", "kyc", "general"],
      default: "general",
    },
    readTime: {
      type: Number,
      default: 5,
    },
    views: {
      type: Number,
      default: 0,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    tags: [String],
  },
  {
    timestamps: true,
  }
);

const KnowledgeBase = mongoose.model("KnowledgeBase", KnowledgeBaseSchema);

export default KnowledgeBase;