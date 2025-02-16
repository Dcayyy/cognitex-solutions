import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/RealTimeInsights.css';

const RealTimeInsights = ({ openChat }) => {
    return (
        <div>
            <header className="fade-in">
                <h1>Real-Time Insights</h1>
            </header>

            <div className="container fade-in">
                <Link className="back-btn" to="/">
                    &larr; Back to Home
                </Link>

                <h2>What is Real-Time Insights?</h2>
                <p>
                    Real-Time Insights empowers businesses with immediate access to critical data. Our solution harnesses advanced analytics and AI to provide up-to-the-minute information, enabling you to make fast, informed decisions that drive growth and performance.
                </p>

                <div className="video-container">
                    <video autoPlay muted loop playsInline poster="/assets/images/placeholder-image.jpg">
                        <source src="../assets/videos/real-time-insights.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <h2>Key Benefits</h2>
                <ul>
                    <li>Immediate access to real-time data</li>
                    <li>Accelerated decision-making process</li>
                    <li>Enhanced operational efficiency</li>
                    <li>Proactive response to market trends</li>
                </ul>

                <h2>How It Works</h2>
                <p>
                    Our Real-Time Insights solution continuously monitors your data streams, transforming raw data into actionable insights through advanced analytics and AI. With interactive dashboards and instant alerts, you can respond proactively to emerging trends and optimize your operations in real time.
                </p>
                <p>
                    Stay ahead of the competition by harnessing the power of live data to drive smarter business decisions.
                </p>
            </div>

            <footer className="fade-in">
                <p>&copy; 2025 AI Automation. All Rights Reserved.</p>
            </footer>

            <div className="chat-btn" onClick={openChat}>
                💬
            </div>
        </div>
    );
};

export default RealTimeInsights;
