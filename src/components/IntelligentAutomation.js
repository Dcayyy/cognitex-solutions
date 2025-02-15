import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/IntelligentAutomation.css'; // your page-specific styles

const IntelligentAutomation = ({ openChat }) => {
    return (
        <div>
            <header className="fade-in">
                <h1>Intelligent Automation</h1>
            </header>

            <div className="container fade-in">
                {/* Back Button */}
                <Link className="back-btn" to="/">
                    &larr; Back to Home
                </Link>

                {/* Introduction */}
                <h2>What is Intelligent Automation?</h2>
                <p>
                    Intelligent Automation combines advanced technologies such as artificial intelligence (AI), machine learning, and robotic process automation (RPA) to streamline complex business processes. It automates repetitive tasks while making smart, data-driven decisions.
                </p>

                {/* Video Placeholder */}
                <div className="video-container">
                    <video autoPlay muted loop playsInline poster="/assets/images/placeholder-image.jpg">
                        <source src="../assets/videos/intelligent-automation-video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                {/* Key Benefits */}
                <h2>Key Benefits</h2>
                <ul>
                    <li>Reduce manual labor and minimize errors</li>
                    <li>Enhance productivity and operational efficiency</li>
                    <li>Deliver real-time insights and data-driven decision-making</li>
                    <li>Scale operations to meet evolving business demands</li>
                </ul>

                {/* How It Works */}
                <h2>How It Works</h2>
                <p>
                    Our Intelligent Automation solution seamlessly integrates with your existing systems. By leveraging AI algorithms to analyze data in real time, it triggers automated workflows that optimize your operations and empower your team to focus on strategic initiatives.
                </p>
                <p>
                    Whether you’re looking to improve customer engagement or streamline internal processes, our solution adapts to your unique needs and scales with your business.
                </p>
            </div>

            <footer className="fade-in">
                <p>&copy; 2025 AI Automation. All Rights Reserved.</p>
            </footer>

            {/* Floating Chat Button */}
            <div className="chat-btn" onClick={openChat}>
                💬
            </div>
        </div>
    );
};

export default IntelligentAutomation;
