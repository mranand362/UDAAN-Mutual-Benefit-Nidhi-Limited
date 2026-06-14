import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Why from "./components/Why";
import Team from "./components/Team";
import Footer from "./components/Footer";
import Loan from "./components/Loan";
import Gallery from "./components/Gallery";
import ChatWidget from "./components/ChatWidget"; // ✅ IMPORT CHAT WIDGET

// Pages
import Company from "./pages/Company";
import Apply from "./pages/Apply";
import Deposits from "./pages/Deposits";
import Calculator from "./pages/Calculator";
import Eligibility from "./pages/Eligibility";
import Contact from "./pages/Contact";
import Aboutus from "./pages/Aboutus";
import Mission from "./pages/Mission";
import Policies from "./pages/Policies";
import BoardMembers from "./pages/BoardMembers";
import LoanAgainstDeposit from "./pages/LoanAgainstDeposit";
import PropertyLoan from "./pages/PropertyLoan";
import LoanAgainstPolicy from "./pages/LoanAgainstPolicy";
import Invest from "./pages/Invest";
import InvestApply from "./pages/InvestApply";
import TalkToExpert from "./pages/TalkToExpert";
import ApplyDeposits from "./pages/ApplyDeposits";
import SavingsAccount from "./pages/SavingsAccount";
import MonthlyIncomePlan from "./pages/MonthlyIncomePlan";
import GoldLoan from "./pages/GoldLoan";
import InvestNow from "./pages/InvestNow";
import MyApplications from "./pages/MyApplications";
import OpenAccountForm from "./pages/OpenAccountForm";
import HelpSupport from "./pages/HelpSupport";
import AccountDetails from './components/AccountDetails';

// Auth Pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import Settings from "./pages/Settings";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import Disclaimer from "./pages/Disclaimer";
import FAQ from "./pages/FAQ";
import Support from "./pages/Support";
import Sitemap from "./pages/Sitemap";

// Protected Components
import ProtectedRoute from "./components/ProtectedRoute";
import MyProfile from "./pages/MyProfile";

function App() {
  return (
    <Router>
      {/* Routes without ChatWidget - ChatWidget will be added outside Routes */}
      <Routes>
        {/* ================= HOME PAGE (PUBLIC) ================= */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <About />
              <Services />
              <Why />
              <Team />
              <Footer />
            </>
          }
        />

        <Route
          path="/home"
          element={
            <>
              <Navbar />
              <Hero />
              <About />
              <Services />
              <Why />
              <Team />
              <Footer />
            </>
          }
        />

        {/* ================= AUTHENTICATION (PUBLIC) ================= */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* ================= COMPANY INFO (PUBLIC) ================= */}
        <Route path="/about" element={<><Navbar /><Aboutus /></>} />
        <Route path="/aboutus" element={<><Navbar /><Aboutus /></>} />
        <Route path="/company" element={<><Navbar /><Company /></>} />
        <Route path="/mission" element={<><Navbar /><Mission /></>} />
        <Route path="/policies" element={<><Navbar /><Policies /></>} />
        <Route path="/board" element={<><Navbar /><BoardMembers /></>} />
        <Route path="/services" element={<><Navbar /><Services /></>} />

        {/* ================= DEPOSITS (PUBLIC) ================= */}
        <Route path="/deposits" element={<><Navbar /><Deposits /></>} />

        {/* ================= LOANS (PUBLIC) ================= */}
        <Route path="/loan" element={<><Navbar /><Loan /></>} />
        <Route path="/Invest" element={<><Navbar /><InvestNow /></>} />
        <Route path="/applications" element={<MyApplications />} />
        <Route path="/application/:id" element={<AccountDetails />} />

        {/* ================= TOOLS (PUBLIC) ================= */}
        <Route path="/calculator" element={<><Navbar /><Calculator /></>} />
        <Route path="/eligibility" element={<><Navbar /><Eligibility /></>} />

        {/* ================= CONTACT (PUBLIC) ================= */}
        <Route path="/contactus" element={<><Navbar /><Contact /></>} />
        <Route path="/account" element={<><Navbar /><OpenAccountForm /></>} />

        {/* ================= GALLERY (PUBLIC) ================= */}
        <Route path="/gallery" element={<><Navbar /><Gallery /></>} />

        {/* ================= HELP & SUPPORT (PUBLIC) ================= */}
        <Route path="/help" element={<HelpSupport />} />
        <Route path="/support" element={<HelpSupport />} />
        <Route path="/account-details" element={<AccountDetails />} />
        <Route path="/privacy" element={<><Navbar /><PrivacyPolicy /></>} />
        <Route path="/terms" element={<><Navbar /><TermsOfUse /></>} />
        <Route path="/disclaimer" element={<><Navbar /><Disclaimer /></>} />
        <Route path="/faq" element={<><Navbar /><FAQ /></>} />
        <Route path="/sitemap" element={<><Navbar /><Sitemap /></>} />
        {/* ================= PROTECTED ROUTES (LOGIN REQUIRED) ================= */}

        {/* User Profile */}
        <Route 
          path="/profile" 
          element={
            <ProtectedRoute>
              <MyProfile />
            </ProtectedRoute>
          } 
        />

        {/* Talk to Expert */}
        <Route 
          path="/talk-expert" 
          element={
            <ProtectedRoute>
              <><Navbar /><TalkToExpert /></>
            </ProtectedRoute>
          } 
        />

        {/* Apply Routes */}
        <Route 
          path="/apply" 
          element={
            <ProtectedRoute>
              <><Navbar /><Apply /></>
            </ProtectedRoute>
          } 
        />

        <Route 
          path="/settings" 
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          } 
        />
        
        <Route 
          path="/apply-now" 
          element={
            <ProtectedRoute>
              <><Navbar /><ApplyDeposits /></>
            </ProtectedRoute>
          } 
        />

        <Route 
          path="/apply/savings-account" 
          element={
            <ProtectedRoute>
              <><Navbar /><SavingsAccount /></>
            </ProtectedRoute>
          } 
        />

        <Route 
          path="/apply/monthly-income-plan" 
          element={
            <ProtectedRoute>
              <><Navbar /><MonthlyIncomePlan /></>
            </ProtectedRoute>
          } 
        />

        <Route 
          path="/apply/gold-loan" 
          element={
            <ProtectedRoute>
              <><Navbar /><GoldLoan /></>
            </ProtectedRoute>
          } 
        />

        <Route 
          path="/apply/loan-against-deposit" 
          element={
            <ProtectedRoute>
              <><Navbar /><LoanAgainstDeposit /></>
            </ProtectedRoute>
          } 
        />

        <Route 
          path="/apply/property-loan" 
          element={
            <ProtectedRoute>
              <><Navbar /><PropertyLoan /></>
            </ProtectedRoute>
          } 
        />

        <Route 
          path="/apply/loan-against-policy" 
          element={
            <ProtectedRoute>
              <><Navbar /><LoanAgainstPolicy /></>
            </ProtectedRoute>
          } 
        />

        {/* Invest Routes */}
        <Route 
          path="/invest" 
          element={
            <ProtectedRoute>
              <><Navbar /><Invest /></>
            </ProtectedRoute>
          } 
        />

        <Route 
          path="/invest/fixed-deposit" 
          element={
            <ProtectedRoute>
              <><Navbar /><InvestApply /></>
            </ProtectedRoute>
          } 
        />

        <Route 
          path="/invest/recurring-deposit" 
          element={
            <ProtectedRoute>
              <><Navbar /><InvestApply /></>
            </ProtectedRoute>
          } 
        />

        <Route 
          path="/invest/monthly-income-plan" 
          element={
            <ProtectedRoute>
              <><Navbar /><InvestApply /></>
            </ProtectedRoute>
          } 
        />

        <Route 
          path="/invest/senior-citizen" 
          element={
            <ProtectedRoute>
              <><Navbar /><InvestApply /></>
            </ProtectedRoute>
          } 
        />

        {/* ================= 404 PAGE ================= */}
        <Route
          path="*"
          element={
            <>
              <Navbar />
              <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center px-4">
                <div className="text-center">
                  <h1 className="text-8xl font-bold text-[#0B2A4A] mb-4">404</h1>
                  <div className="w-24 h-24 bg-[#FDB813]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-12 h-12 text-[#FDB813]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
                  <p className="text-gray-600 mb-6">The page you are looking for doesn't exist or has been moved.</p>
                  <a 
                    href="/home" 
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#FDB813] to-[#fec84d] text-[#0B2A4A] rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    Go Back Home
                  </a>
                </div>
              </div>
              <Footer />
            </>
          }
        />
      </Routes>
      
      {/* ✅ GLOBAL CHAT WIDGET - Shows on ALL pages */}
      <ChatWidget />
    </Router>
  );
}

export default App;