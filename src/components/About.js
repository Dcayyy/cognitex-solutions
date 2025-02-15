import React from 'react';
import '../styles/About.css';

const About = () => {
    return (
        <section id="about" className="about-us">
            <div className="container">
                <h2>About Us</h2>
                <p>
                    At Cognitex Solutions, we're passionate about transforming ideas into impactful digital experiences.
                    Our team of skilled developers, designers, and strategists is dedicated to crafting innovative software
                    solutions that help businesses thrive.
                </p>
                <div className="cards">
                    <div className="card">
                        <h3>Mission</h3>
                        <p>Our mission is to empower businesses through innovative software solutions.</p>
                    </div>
                    <div className="card">
                        <h3>Vision</h3>
                        <p>To be the leading provider of cutting-edge technology solutions.</p>
                    </div>
                </div>
                <div className="values">
                    <h3>Values</h3>
                    <div className="values-grid">
                        <div className="value-item">
                            <h4>Innovation</h4>
                            <p>Continuously exploring new technologies and approaches.</p>
                        </div>
                        <div className="value-item">
                            <h4>Quality</h4>
                            <p>Delivering exceptional results that exceed expectations.</p>
                        </div>
                        <div className="value-item">
                            <h4>Collaboration</h4>
                            <p>Fostering strong partnerships with our clients.</p>
                        </div>
                        <div className="value-item">
                            <h4>Integrity</h4>
                            <p>Conducting business with honesty and transparency.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
