import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AuthFlow from './pages/auth/AuthFlow';
import SearchPage from './pages/search/SearchPage';
import CustomerDashboard from './pages/customer/CustomerDashboard';
import WorkerDashboard from './pages/worker/WorkerDashboard';
import WorkerProfile from './pages/worker/WorkerProfile';
import ChatPage from './pages/chat/ChatPage';
import BookingDetails from './pages/booking/BookingDetails';
import BookingReview from './pages/booking/BookingReview';
import BookingPayment from './pages/booking/BookingPayment';
import CancelBooking from './pages/booking/CancelBooking';
import CustomerProfile from './pages/customer/CustomerProfile';

function App() {
  return (
    <Router>
      <div className="min-h-screen font-sans bg-white text-gray-900 selection:bg-emerald-100 selection:text-[#1B5E44]">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/worker/:id" element={<WorkerProfile />} />
          <Route path="/chat" element={<ChatPage />} />
          
          {/* Booking Flow */}
          <Route path="/book/details" element={<BookingDetails />} />
          <Route path="/book/review" element={<BookingReview />} />
          <Route path="/book/payment" element={<BookingPayment />} />
          <Route path="/cancel-booking/:id" element={<CancelBooking />} />

          {/* User Routes */}
          <Route path="/customer/profile" element={<CustomerProfile />} />
          <Route path="/customer/dashboard" element={<CustomerDashboard />} />
          <Route path="/worker/dashboard" element={<WorkerDashboard />} />
          
          {/* Auth Routes */}
          <Route path="/login" element={<AuthFlow initialView="login" />} />
          <Route path="/signup" element={<AuthFlow initialView="signup" />} />
          <Route path="/phone-auth" element={<AuthFlow initialView="phone-input" />} />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;