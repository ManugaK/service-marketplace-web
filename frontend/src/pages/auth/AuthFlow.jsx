import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import PhoneInput from './PhoneInput';
import PhoneVerification from './PhoneVerification';
import RoleSelection from './RoleSelection';

const AuthFlow = ({ initialView = 'login' }) => {
  const [step, setStep] = useState(initialView);
  const navigate = useNavigate();

  useEffect(() => {
    setStep(initialView);
  }, [initialView]);

  const handleSwitchToSignup = () => setStep('signup');
  const handleSwitchToLogin = () => setStep('login');
  
  const handleSendOTP = () => setStep('otp');
  const handleVerifyOTP = () => setStep('role-selection');
  
  const handleContinueRole = (role) => {
    console.log('Selected role:', role);
    if (role === 'worker') {
      navigate('/worker/dashboard');
    } else {
      navigate('/customer/dashboard');
    }
  };

  switch (step) {
    case 'login':
      return <Login onSwitchToSignup={handleSwitchToSignup} />;
    case 'signup':
      return <Signup onSwitchToLogin={handleSwitchToLogin} />;
    case 'phone-input':
      return <PhoneInput onSendOTP={handleSendOTP} />;
    case 'otp':
      return <PhoneVerification onVerify={handleVerifyOTP} onChangePhone={() => setStep('phone-input')} />;
    case 'role-selection':
      return <RoleSelection onContinue={handleContinueRole} />;
    default:
      return <Login onSwitchToSignup={handleSwitchToSignup} />;
  }
};

export default AuthFlow;



