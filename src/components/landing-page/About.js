import React from "react";
import { Row, Col, Typography } from "antd";
import { FlagOutlined, EyeOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

const { Title, Paragraph } = Typography;
const MotionCard = motion.div;
const cardVariants = {
    initial: { scale: 1 },
    hover: {
        scale: 1.03,
        transition: { type: "tween", duration: 0.3, ease: "easeInOut" },
    },
    tap: {
        scale: 0.97,
        transition: { type: "tween", duration: 0.2, ease: "easeInOut" },
    },
};

const AboutSection = ({ isMobile }) => {
    return (
        <section
            id="about"
            style={{
                padding: isMobile ? "2rem 1rem" : "4rem 14rem",
                background: "#fff",
            }}
        >
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                <Title
                    level={2}
                    style={{ fontSize: isMobile ? "2rem" : "2.5rem", color: "#333" }}
                >
                    About Us
                </Title>
                <Paragraph
                    style={{
                        fontSize: "1rem",
                        maxWidth: "600px",
                        margin: "0 auto",
                        color: "#666",
                    }}
                >
                    At Cognitex Solutions, we're passionate about transforming ideas into
                    impactful digital experiences. Our team of skilled developers,
                    designers, and strategists is dedicated to crafting innovative software
                    solutions that help businesses thrive.
                </Paragraph>
            </div>

            {/* Mission and Vision Row */}
            <Row gutter={[24, 24]} justify="center" style={{ marginBottom: "2rem" }}>
                <Col xs={isMobile ? 22 : 8}>
                    <MotionCard
                        variants={cardVariants}
                        initial="initial"
                        whileHover="hover"
                        whileTap="tap"
                        style={{
                            borderRadius: "10px",
                            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                            minHeight: "170px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            margin: "0 auto",
                        }}
                    >
                        <div style={{ textAlign: "center", maxWidth: "300px", margin: "0 auto" }}>
                            <FlagOutlined
                                style={{
                                    fontSize: "2rem",
                                    color: "#ff7f50",
                                    marginBottom: "0.5rem",
                                }}
                            />
                            <Title level={4} style={{ margin: 0 }}>
                                Mission
                            </Title>
                            <Paragraph style={{ margin: 0 }}>
                                Our mission is to empower businesses through innovative software
                                solutions.
                            </Paragraph>
                        </div>
                    </MotionCard>
                </Col>
                <Col xs={isMobile ? 22 : 8}>
                    <MotionCard
                        variants={cardVariants}
                        initial="initial"
                        whileHover="hover"
                        whileTap="tap"
                        style={{
                            borderRadius: "10px",
                            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                            minHeight: "170px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            padding: "0.75rem",
                            margin: "0 auto",
                        }}
                    >
                        <div style={{ textAlign: "center", maxWidth: "300px", margin: "0 auto" }}>
                            <EyeOutlined
                                style={{
                                    fontSize: "2rem",
                                    color: "#ff7f50",
                                    marginBottom: "0.5rem",
                                }}
                            />
                            <Title level={4} style={{ margin: 0 }}>
                                Vision
                            </Title>
                            <Paragraph style={{ margin: 0 }}>
                                To be the leading provider of cutting-edge technology solutions.
                            </Paragraph>
                        </div>
                    </MotionCard>
                </Col>
            </Row>

            <div style={{ textAlign: "center", marginTop: "3rem" }}>
                <Title level={3} style={{ color: "#333" }}>
                    Our Values
                </Title>
                <Row gutter={[24, 24]} justify="center">
                    {["Innovation", "Quality", "Collaboration", "Integrity"].map(
                        (value) => (
                            <Col key={value} xs={isMobile ? 22 : 6}>
                                <MotionCard
                                    variants={cardVariants}
                                    initial="initial"
                                    whileHover="hover"
                                    whileTap="tap"
                                    style={{
                                        background: "#f7f7f7",
                                        borderRadius: "10px",
                                        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                                        minHeight: "145spx",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        textAlign: "center",
                                        margin: "0 auto",
                                        padding: "0 20px",
                                    }}
                                >
                                    <div style={{ maxWidth: "250px", margin: "0 auto", padding: "0.4rem" }}>
                                        <Title level={4} style={{ color: "#333", marginBottom: "0.5rem" }}>
                                            {value}
                                        </Title>
                                        <Paragraph style={{ color: "#666" }}>
                                            {value === "Innovation" &&
                                                "Continuously exploring new technologies and approaches."}
                                            {value === "Quality" &&
                                                "Delivering exceptional results that exceed expectations."}
                                            {value === "Collaboration" &&
                                                "Fostering strong partnerships with our clients."}
                                            {value === "Integrity" &&
                                                "Conducting business with honesty and transparency."}
                                        </Paragraph>
                                    </div>
                                </MotionCard>
                            </Col>
                        )
                    )}
                </Row>
            </div>
        </section>
    );
};

export default AboutSection;
