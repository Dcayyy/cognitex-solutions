import React from "react";
import { Row, Col, Card, Typography } from "antd";
import { RocketOutlined, LineChartOutlined, SyncOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

const { Title, Paragraph } = Typography;
const MotionCard = motion(Card);

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

const FeaturesSection = ({ isMobile }) => {
    return (
        <section
            id="features"
            style={{ padding: isMobile ? "2rem 1rem" : "4rem 8rem", background: "#fff" }}
        >
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                <Title level={2} style={{ fontSize: isMobile ? "2rem" : "2.5rem", color: "#333" }}>
                    Innovative Features
                </Title>
                <Paragraph style={{ fontSize: "1rem", maxWidth: "600px", margin: "0 auto", color: "#666" }}>
                    Explore cutting-edge solutions designed to elevate your business efficiency and engagement.
                </Paragraph>
            </div>
            <Row gutter={[8, 16]} justify="center">
                <Col xs={24} sm={12} md={8}>
                    <MotionCard
                        hoverable
                        variants={cardVariants}
                        initial="initial"
                        whileHover="hover"
                        whileTap="tap"
                        style={{
                            borderRadius: "10px",
                            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                            maxWidth: "375px",
                            padding: "1rem",
                        }}
                    >
                        <Card.Meta
                            avatar={<RocketOutlined style={{ fontSize: "1.8rem", color: "#ff7f50" }} />}
                            title="Intelligent Automation"
                            description="Streamline your workflows with AI-driven processes and dynamic decision-making."
                        />
                    </MotionCard>
                </Col>
                <Col xs={24} sm={12} md={8}>
                    <MotionCard
                        hoverable
                        variants={cardVariants}
                        initial="initial"
                        whileHover="hover"
                        whileTap="tap"
                        style={{
                            borderRadius: "10px",
                            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                            maxWidth: "375px",
                            padding: "1rem",
                        }}
                    >
                        <Card.Meta
                            avatar={<LineChartOutlined style={{ fontSize: "1.8rem", color: "#ff7f50" }} />}
                            title="Real-Time Insights"
                            description="Gain actionable insights through powerful analytics and data-driven intelligence."
                        />
                    </MotionCard>
                </Col>
                <Col xs={24} sm={12} md={8}>
                    <MotionCard
                        hoverable
                        variants={cardVariants}
                        initial="initial"
                        whileHover="hover"
                        whileTap="tap"
                        style={{
                            borderRadius: "10px",
                            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                            maxWidth: "375px",
                            padding: "1rem",
                        }}
                    >
                        <Card.Meta
                            avatar={<SyncOutlined style={{ fontSize: "1.8rem", color: "#ff7f50" }} />}
                            title="Seamless Integration"
                            description="Easily integrate our AI solutions with your existing tech stack for maximum impact."
                        />
                    </MotionCard>
                </Col>
            </Row>
        </section>
    );
};

export default FeaturesSection;
