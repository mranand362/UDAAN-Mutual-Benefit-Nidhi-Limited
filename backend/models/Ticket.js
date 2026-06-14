import mongoose from "mongoose";

const ResponseSchema = new mongoose.Schema(
  {
    message: {
      type: String,
      required: true,
    },
    attachments: [
      {
        type: String,
      },
    ],
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const TicketSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    ticketId: {
      type: String,
      required: true,
      unique: true,
    },
    subject: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      enum: ["account", "deposit", "loan", "technical", "other"],
      required: true,
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "medium",
    },
    message: {
      type: String,
      required: true,
    },
    attachments: [
      {
        type: String,
      },
    ],
    status: {
      type: String,
      enum: ["pending", "in-progress", "resolved", "closed"],
      default: "pending",
    },
    responses: [ResponseSchema],
    resolvedAt: {
      type: Date,
    },
    closedAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

// Create index for faster queries
TicketSchema.index({ userId: 1, createdAt: -1 });
TicketSchema.index({ ticketId: 1 });

const Ticket = mongoose.model("Ticket", TicketSchema);

export default Ticket;