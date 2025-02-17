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
                        textAlign: "justify",
                        padding: isMobile ? "0.3rem 1.1rem" : "",
                    }}
                >
                    At Cognitex Solutions, we believe every idea holds the power to redefine the digital landscape.
                    Our elite team of Artificial Intelligence engineers, architects, and strategists is dedicated to crafting innovative software solutions
                    that propel your business to new heights. We combine cutting-edge technology with deep industry insights to transform complex challenges
                    into strategic opportunities. Join us on this transformative journey, where your vision meets our expertise,
                    and watch as we create digital experiences that truly inspire.
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
                                Our mission is to revolutionize business with AI automation—unlocking efficiency, innovation, and growth.
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
                                To be the leading provider of cutting-edge AI technology solutions.
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
                                        minHeight: "145px",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        textAlign: "center",
                                        margin: "0 auto",
                                        padding: "10px 20px",
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
                                                "Building lasting partnerships that drive collective success."}
                                            {value === "Integrity" &&
                                                "Upholding unwavering honesty and transparency in everything we do."}
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
