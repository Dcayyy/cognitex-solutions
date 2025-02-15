// src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from "./components/LandingPage";
import IntelligentAutomation from './components/IntelligentAutomation'; // your new page component
import RealTimeInsights from './components/RealTimeInsights'; // your new page component
import SeamlessIntegration from './components/SeamlessIntegration'; // your new page component
import './App.css';

// Create a Home component for the landing page
const Home = ({ openChat }) => (
    <>
      <LandingPage />
    </>
);

function App() {
  useEffect(() => {
    // Asynchronously load the Voiceflow chat widget
    const script = document.createElement('script');
    script.src = 'https://cdn.voiceflow.com/widget-next/bundle.mjs';
    script.type = 'text/javascript';
    script.async = true;
    script.onload = () => {
      window.voiceflow.chat.load({
        verify: { projectID: '67aae7ddc0b42786788ae81a' },
        url: 'https://general-runtime.voiceflow.com',
        versionID: 'production'
      });
    };
    document.body.appendChild(script);

    // Clear chat history on page load
    localStorage.removeItem('voiceflow_conversation');

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const openChat = () => {
    if (window.voiceflow && window.voiceflow.chat) {
      window.voiceflow.chat.open();
    } else {
      // Try again after a short delay
      setTimeout(() => {
        if (window.voiceflow && window.voiceflow.chat) {
          window.voiceflow.chat.open();
        } else {
          console.error('Voiceflow chat widget is not loaded yet.');
        }
      }, 500);
    }
  };

  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home openChat={openChat} />} />
          <Route path="/intelligent-automation" element={<IntelligentAutomation openChat={openChat} />} />
            <Route path="/real-time-insights" element={<RealTimeInsights openChat={openChat} />} />
            <Route path="/seamless-integration" element={<SeamlessIntegration openChat={openChat} />} />
            {/* Add additional routes as needed */}
        </Routes>
      </Router>
  );
}

export default App;
