import React, { useState } from 'react';
import LandingPage from './pages/LandingPage';
import AuthFlow from './pages/AuthFlow';

function App() {
  const [view, setView] = useState('landing'); // 'landing', 'login', 'signup', 'phone-auth'

  return (
    <div className="min-h-screen font-sans bg-white text-gray-900 selection:bg-emerald-100 selection:text-[#1B5E44]">
      {view === 'landing' ? (
        <LandingPage 
          onGetStarted={() => setView('phone-input')} 
          onLogin={() => setView('login')}
          onSignup={() => setView('signup')}
        />
      ) : (
        <AuthFlow view={view} setView={setView} />
      )}
    </div>
  );
}

export default App;