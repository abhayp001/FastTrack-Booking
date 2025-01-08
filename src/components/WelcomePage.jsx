import React from 'react';
import { useLocation } from 'react-router-dom';

function WelcomePage() {
  const location = useLocation();
  const userName = location.state?.userName || 'Guest';

  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-semibold mb-4">Welcome!</h1>
        <p className="text-lg text-gray-700">You are logged in as <strong>{userName}</strong>.</p>
      </div>
    </div>
  );
}

export default WelcomePage;
