import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';
import PhoneInput from './PhoneInput';
import PhoneVerification from './PhoneVerification';
import RoleSelection from './RoleSelection';

const AuthFlow = ({ view, setView }) => {
  const [step, setStep] = useState(view); // 'login', 'signup', 'phone-input', 'otp', 'role-selection'

  const handleSwitchToSignup = () => setStep('signup');
  const handleSwitchToLogin = () => setStep('login');
  
  const handleSendOTP = () => setStep('otp');
  const handleVerifyOTP = () => setStep('role-selection');
  const handleContinueRole = (role) => {
    console.log('Selected role:', role);
    // Proceed to dashboard or onboarding
    setView('landing'); // Temporary
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
