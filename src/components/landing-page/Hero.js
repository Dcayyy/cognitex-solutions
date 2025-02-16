import React from "react";
import { Typography } from "antd";
import backgroundVideo from "../../assets/videos/landing-page-seamless-loop.mp4";
import EngagingButton from "../EngagingButton";

const { Title, Paragraph } = Typography;

const HeroSection = ({ isMobile }) => {
    return (
        <section
            id="hero"
            style={{
                position: "relative",
                height: "100vh",
                overflow: "hidden",
            }}
        >
            <video
                autoPlay
                muted
                loop
                playsInline
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    minWidth: "100%",
                    minHeight: "100%",
                    transform: "translate(-50%, -50%)",
                    objectFit: "cover",
                    filter: "brightness(0.7)",
                }}
            >
                <source src={backgroundVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "rgba(0,0,0,0.1)",
                }}
            />
            <div
                style={{
                    position: "relative",
                    zIndex: 2,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#fff",
                    textAlign: "center",
                    padding: "0 20px",
                }}
            >
                <Title style={{ color: "#fff", fontSize: isMobile ? "2.5rem" : "4rem" }}>
                    Experience the Future of AI
                </Title>
                <Paragraph
                    style={{
                        fontSize: isMobile ? "1rem" : "1.2rem",
                        maxWidth: "750px",
                        color: "white",
                        marginTop: isMobile ? "-0.7rem" : "-1.5rem",
                    }}
                >
                    Immerse yourself in advanced AI automation that transforms your business in real time.
                </Paragraph>
                <EngagingButton
                    onClick={() => {
                        if (window.voiceflow && window.voiceflow.chat) {
                            window.voiceflow.chat.open();
                        } else {
                            console.error("Voiceflow chat widget not loaded");
                        }
                    }}
                >
                    Chat with Our AI
                </EngagingButton>
            </div>
        </section>
    );
};

export default HeroSection;
