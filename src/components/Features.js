import React from 'react';
import '../styles/Features.css';

const Features = () => {
    return (
        <section id="features" className="features">
            <h2>Innovative Features</h2>
            <p>
                Explore cutting-edge solutions designed to elevate your business efficiency and engagement.
            </p>
            <div className="feature-cards">
                <div className="feature-card">
                    <a href="/intelligent-automation" style={{ color: 'inherit', textDecoration: 'none' }}>
                        <h3>Intelligent Automation</h3>
                        <p>
                            Streamline your workflows with AI-driven processes and dynamic decision-making.
                        </p>
                    </a>
                </div>
                <div className="feature-card">
                    <a href="/real-time-insights" style={{ color: 'inherit', textDecoration: 'none' }}>
                        <h3>Real-Time Insights</h3>
                        <p>
                            Gain actionable insights through powerful analytics and data-driven intelligence.
                        </p>
                    </a>
                </div>
                <div className="feature-card">
                    <a href="/seamless-integration" style={{ color: 'inherit', textDecoration: 'none' }}>
                        <h3>Seamless Integration</h3>
                        <p>
                            Easily integrate our AI solutions with your existing tech stack for maximum impact.
                        </p>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Features;
