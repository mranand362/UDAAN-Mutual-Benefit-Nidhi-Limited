import mongoose from "mongoose";

const FAQSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: true,
      trim: true,
    },
    answer: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ["account", "deposit", "loan", "kyc", "general"],
      required: true,
    },
    helpful: {
      type: Number,
      default: 0,
    },
    notHelpful: {
      type: Number,
      default: 0,
    },
    order: {
      type: Number,
      default: 0,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

// Create index for search
FAQSchema.index({ question: "text", answer: "text" });

const FAQ = mongoose.model("FAQ", FAQSchema);

// Seed initial FAQs if none exist
const seedFAQs = async () => {
  const count = await FAQ.countDocuments();
  if (count === 0) {
    const initialFAQs = [
      {
        question: "How do I open an account with Jaynirmala?",
        answer: "You can open an account by clicking on the 'Open Account' button on our website and filling out the online application form. You'll need to provide your personal details, upload KYC documents, and make an initial deposit of minimum ₹1,000. The process takes about 5-10 minutes.",
        category: "account",
        order: 1,
      },
      {
        question: "What are the documents required for KYC?",
        answer: "For KYC verification, you'll need: 1) Aadhaar Card, 2) PAN Card, 3) Passport size photograph, and 4) Address proof (if different from Aadhaar). You can upload these documents during the online application process.",
        category: "kyc",
        order: 2,
      },
      {
        question: "What is the minimum deposit amount?",
        answer: "The minimum deposit amount for opening a savings account is ₹1,000. For fixed deposits, the minimum amount is ₹5,000.",
        category: "deposit",
        order: 3,
      },
      {
        question: "What are the current fixed deposit interest rates?",
        answer: "Fixed deposit interest rates range from 7% to 9.5% per annum depending on the tenure. Senior citizens get an additional 0.5% interest rate. Please check our deposits page for current rates.",
        category: "deposit",
        order: 4,
      },
      {
        question: "How can I apply for a loan?",
        answer: "You can apply for a loan by visiting our nearest branch or through our online loan application form. We offer personal loans, gold loans, business loans, and home loans. Interest rates start from 10.5% per annum.",
        category: "loan",
        order: 5,
      },
      {
        question: "What is the maximum loan amount I can get?",
        answer: "The maximum loan amount depends on the type of loan and your eligibility. Personal loans: up to ₹10 lakhs, Gold loans: up to 75% of gold value, Business loans: up to ₹25 lakhs, Home loans: up to ₹50 lakhs.",
        category: "loan",
        order: 6,
      },
      {
        question: "How can I check my account balance?",
        answer: "You can check your account balance by: 1) Logging into your online account, 2) Using our mobile app, 3) Visiting your nearest branch, or 4) Calling our customer care at +91 73977 82590.",
        category: "account",
        order: 7,
      },
      {
        question: "Is my money safe with Jaynirmala?",
        answer: "Yes, Jaynirmala Mutual Benefit Nidhi Limited is a registered Nidhi company under the Companies Act 2013 and regulated by the Ministry of Corporate Affairs, Government of India. We follow all regulatory guidelines and maintain strict financial discipline.",
        category: "general",
        order: 8,
      },
      {
        question: "What are the operating hours?",
        answer: "Our operating hours are Monday to Saturday, 10:00 AM to 5:00 PM. We remain closed on Sundays and public holidays.",
        category: "general",
        order: 9,
      },
      {
        question: "How can I contact customer support?",
        answer: "You can contact us via: Phone: +91 73977 82590, Email: support@njfnidhi.in, Live Chat available on our website, or visit our branch at No. 362/B, Kamarajar St, Villupuram.",
        category: "general",
        order: 10,
      },
    ];

    await FAQ.insertMany(initialFAQs);
    console.log("Initial FAQs seeded");
  }
};

// Call seed function when the model is imported
seedFAQs();

export default FAQ;