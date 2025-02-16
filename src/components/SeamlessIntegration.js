import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/SeamlessIntegration.css';

const SeamlessIntegration = ({ openChat }) => {
    return (
        <div>
            <header className="fade-in">
                <h1>Seamless Integration</h1>
            </header>

            <div className="container fade-in">
                <Link className="back-btn" to="/">
                    &larr; Back to Home
                </Link>

                <h2>What is Seamless Integration?</h2>
                <p>
                    Seamless Integration is all about connecting your disparate systems and applications to work together effortlessly. Our solution ensures that data flows smoothly between platforms, eliminating silos and reducing manual effort.
                </p>

                <div className="video-container">
                    <video autoPlay muted loop playsInline poster="/assets/images/placeholder-image.jpg">
                        <source src="../assets/videos/seamless-integration.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <h2>Key Benefits</h2>
                <ul>
                    <li>Unified view of your systems and data</li>
                    <li>Streamlined workflows and reduced manual intervention</li>
                    <li>Improved data accuracy and operational efficiency</li>
                    <li>Faster time-to-market with scalable integration solutions</li>
                </ul>

                <h2>How It Works</h2>
                <p>
                    Our Seamless Integration solution uses advanced APIs and middleware to connect your existing software systems. By automating data exchange and workflow processes, it bridges the gap between legacy systems and modern applications.
                </p>
                <p>
                    This ensures real-time data synchronization and smooth operational flow, allowing your business to adapt quickly to changing market needs.
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

export default SeamlessIntegration;
