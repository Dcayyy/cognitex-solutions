import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from "./components/landing-page/LandingPage";
import IntelligentAutomation from './components/IntelligentAutomation';
import RealTimeInsights from './components/RealTimeInsights';
import SeamlessIntegration from './components/SeamlessIntegration';
import './App.css';
import { Voiceflow } from "./components/Voiceflow";

const Home = () => (
    <>
      <LandingPage />
    </>
);

function App() {
  const { openChat } = Voiceflow();

  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home openChat={openChat} />} />
          <Route path="/intelligent-automation" element={<IntelligentAutomation openChat={openChat} />} />
            <Route path="/real-time-insights" element={<RealTimeInsights openChat={openChat} />} />
            <Route path="/seamless-integration" element={<SeamlessIntegration openChat={openChat} />} />
        </Routes>
      </Router>
  );
}

export default App;
