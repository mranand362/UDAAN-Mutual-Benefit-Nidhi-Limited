import mongoose from 'mongoose';

const AccountSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  applicationId: {
    type: String,
    unique: true
  },
  personalInfo: {
    fullName: { type: String, required: true },
    dateOfBirth: { type: String, required: true },
    gender: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: String, required: true },
    alternateMobile: { type: String },
    occupation: { type: String, required: true },
    annualIncome: { type: String, required: true }
  },
  identityInfo: {
    panNumber: { type: String, required: true },
    aadhaarNumber: { type: String, required: true }
  },
  addressInfo: {
    addressLine1: { type: String, required: true },
    addressLine2: { type: String },
    city: { type: String, required: true },
    state: { type: String, required: true },
    pincode: { type: String, required: true },
    landmark: { type: String }
  },
  accountDetails: {
    accountType: { type: String, enum: ['savings', 'current', 'salary'], default: 'savings' },
    initialDeposit: { type: Number, required: true },
    nomineeName: { type: String, required: true },
    nomineeRelation: { type: String, required: true },
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
  },
  reviewedAt: Date,
  rejectionReason: String,
  accountNumber: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

AccountSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

const Account = mongoose.model('Account', AccountSchema);
export default Account;