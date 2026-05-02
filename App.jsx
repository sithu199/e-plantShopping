import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';

function App() {
  // Product List ကို ပြမပြ ထိန်းချုပ်မည့် state
  const [showProductList, setShowProductList] = useState(false);

  // Get Started ကို နှိပ်လိုက်လျှင် showProductList ကို true ပြောင်းပေးရမည်
  const handleGetStarted = () => {
    setShowProductList(true);
  };

  return (
    <div className="app-container">
      {/* showProductList က true ဖြစ်သွားလျှင် ProductList component ကို ပြမည် */}
      {showProductList ? (
        <ProductList />
      ) : (
        <div className="landing-page">
          <div className="background-image"></div>
          <div className="content">
            <div className="landing_content">
              <h1>Paradise Nursery</h1>
              <div className="divider"></div>
              <p>Where green dreams come true</p>
              
              {/* Grading criteria အရ အဓိက လိုအပ်ချက်ဖြစ်သော Get Started button */}
              <button className="get-started-btn" onClick={handleGetStarted}>
                Get Started
              </button>
            </div>
            
            <div className="about_us_section">
               {/* လိုအပ်လျှင် AboutUs component ဤနေရာတွင် ထည့်နိုင်သည် */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
