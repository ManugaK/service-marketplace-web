import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Login from './Login';
import Signup from './Signup';
import PhoneInput from './PhoneInput';
import PhoneVerification from './PhoneVerification';
import RoleSelection from './RoleSelection';

const DEFAULT_PHONE_NUMBER = '+94 77 123 4567';

export default function AuthFlow({ initialView = 'login', entryMode = 'signin' }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [step, setStep] = useState(initialView);
  const [selectedRole, setSelectedRole] = useState('customer');
  const [phoneNumber, setPhoneNumber] = useState(DEFAULT_PHONE_NUMBER);

  const [previousAuthStep, setPreviousAuthStep] = useState('login');
  const [roleBackStep, setRoleBackStep] = useState(null);
  const [postRoleStep, setPostRoleStep] = useState('signup');
  const [loginBackStep, setLoginBackStep] = useState(null);
  const [signupBackStep, setSignupBackStep] = useState('role-selection');

  useEffect(() => {
    setStep(initialView);
    setPhoneNumber(DEFAULT_PHONE_NUMBER);

    if (initialView === 'role-selection' || entryMode === 'signup') {
      setRoleBackStep(null);
      setPostRoleStep('signup');
      setSignupBackStep('role-selection');
      setLoginBackStep(null);
      setPreviousAuthStep('signup');
      return;
    }

    if (initialView === 'login' || entryMode === 'signin') {
      setRoleBackStep(null);
      setPostRoleStep('signup');
      setSignupBackStep('role-selection');
      setLoginBackStep(null);
      setPreviousAuthStep('login');
      return;
    }

    setRoleBackStep(null);
    setPostRoleStep('signup');
    setSignupBackStep('role-selection');
    setLoginBackStep(null);
  }, [initialView, entryMode, location.pathname]);

  const closeFlow = () => {
    navigate('/', { replace: true });
  };

  const goToStep = (nextStep) => {
    setStep(nextStep);
  };

  const handleContinueRole = (role) => {
    setSelectedRole(role);
    setSignupBackStep('role-selection');
    goToStep(postRoleStep);
  };

  const handleCreateAccount = () => {
    setRoleBackStep('login');
    setPostRoleStep('signup');
    goToStep('role-selection');
  };

  const handleSignin = () => {
    setLoginBackStep('signup');
    goToStep('login');
  };

  const handleLoginBack = () => {
    if (loginBackStep) {
      setLoginBackStep(null);
      goToStep(loginBackStep);
      return;
    }

    closeFlow();
  };

  const handleRoleBack = () => {
    if (roleBackStep) {
      setRoleBackStep(null);
      goToStep(roleBackStep);
      return;
    }

    closeFlow();
  };

  const handleSignupBack = () => {
    goToStep(signupBackStep || 'role-selection');
  };

  const handleLoginComplete = () => {
    setPreviousAuthStep('login');
    goToStep('phone-input');
  };

  const handleSignupComplete = () => {
    setPreviousAuthStep('signup');
    goToStep('phone-input');
  };

  const handleSendOtp = (phone) => {
    const cleanedPhone = String(phone || '').trim();

    if (cleanedPhone) {
      setPhoneNumber(cleanedPhone.startsWith('+') ? cleanedPhone : `+94 ${cleanedPhone}`);
    } else {
      setPhoneNumber(DEFAULT_PHONE_NUMBER);
    }

    goToStep('otp');
  };

  const handleVerifyOtp = () => {
    if (selectedRole === 'worker') {
      navigate('/worker/register');
      return;
    }

    navigate('/customer/dashboard');
  };

  switch (step) {
    case 'role-selection':
      return (
        <RoleSelection
          selectedRole={selectedRole}
          onBack={handleRoleBack}
          onContinue={handleContinueRole}
        />
      );

    case 'login':
      return (
        <Login
          onBack={handleLoginBack}
          onCreateAccount={handleCreateAccount}
          onLoginComplete={handleLoginComplete}
        />
      );

    case 'signup':
      return (
        <Signup
          onBack={handleSignupBack}
          onSignin={handleSignin}
          onSignupComplete={handleSignupComplete}
        />
      );

    case 'phone-input':
      return (
        <PhoneInput
          onBack={() => goToStep(previousAuthStep)}
          onSendOtp={handleSendOtp}
        />
      );

    case 'otp':
      return (
        <PhoneVerification
          onBack={() => goToStep('phone-input')}
          onChangePhone={() => goToStep('phone-input')}
          onVerifyCode={handleVerifyOtp}
          phoneNumber={phoneNumber}
        />
      );

    default:
      return (
        <Login
          onBack={handleLoginBack}
          onCreateAccount={handleCreateAccount}
          onLoginComplete={handleLoginComplete}
        />
      );
  }
}
