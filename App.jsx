import React from 'react';
import './App.css';

function App() {
  const handleGetStarted = () => {
    console.log("Navigating to product list...");
    // ဤနေရာတွင် Product list page သို့သွားရန် logic ထည့်နိုင်သည်
  };

  return (
    <div className="landing-page">
      <div className="content">
        {/* Paradise Nursery landing page with company name */}
        <h1 style={{ fontSize: '4rem', marginBottom: '10px' }}>
          Paradise Nursery
        </h1>
        <p style={{ fontSize: '1.5rem', fontStyle: 'italic' }}>
          Where green dreams come true
        </p>
        
        {/* "Get Started" button */}
        <button className="get-started-btn" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;
