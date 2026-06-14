import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
  role: {
    type: String,
    enum: ["user", "assistant"],
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  suggestions: [
    {
      type: String,
    },
  ],
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const ChatSessionSchema = new mongoose.Schema(
  {
    sessionId: {
      type: String,
      required: true,
      unique: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
    messages: [MessageSchema],
    status: {
      type: String,
      enum: ["active", "closed"],
      default: "active",
    },
    lastActivity: {
      type: Date,
      default: Date.now,
    },
    endedAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

// Auto-close inactive sessions after 1 hour
ChatSessionSchema.index({ lastActivity: 1 });

const ChatSession = mongoose.model("ChatSession", ChatSessionSchema);

export default ChatSession;