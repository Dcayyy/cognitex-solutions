import React, {useEffect, useState} from 'react';
import { Layout, Menu, Row, Col, Card, Typography, ConfigProvider } from 'antd';
import { RocketOutlined, LineChartOutlined, SyncOutlined, EyeOutlined, FlagOutlined  } from '@ant-design/icons';
import backgroundVideo from '../assets/videos/landing-page-seamless-loop.mp4';
import logo from '../assets/logo/logo.png';
import EngagingButton from './EngagingButton';
import {motion} from "framer-motion";
import { Divider } from 'antd';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;
const MotionCard = motion(Card);
const cardVariants = {
    initial: { scale: 1 },
    hover: {
        scale: 1.03,
        transition: { type: 'tween', duration: 0.3, ease: 'easeInOut' }
    },
    tap: {
        scale: 0.97,
        transition: { type: 'tween', duration: 0.2, ease: 'easeInOut' }
    }
};

const LandingPage = ({ openChat }) => {
    const [agentLoaded, setAgentLoaded] = useState(false);
    const [agentOpened, setAgentOpened] = useState(false);

    useEffect(() => {
        // Remove previous voiceflow-related items
        Object.keys(localStorage).forEach(key => {
            if (key.startsWith('voiceflow')) {
                localStorage.removeItem(key);
            }
        });

        const script = document.createElement('script');
        script.src = 'https://cdn.voiceflow.com/widget-next/bundle.mjs';
        script.type = 'text/javascript';
        script.async = true;
        script.onload = () => {
            window.voiceflow.chat.load({
                verify: { projectID: '67aae7ddc0b42786788ae81a' },
                url: 'https://general-runtime.voiceflow.com',
                versionID: 'production'
            });
            // Immediately close the chat so it doesn't remain open on refresh
            if (window.voiceflow && window.voiceflow.chat) {
                window.voiceflow.chat.close();
            }
            setAgentLoaded(true);
        };
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const handleChatOpen = () => {
        if (agentLoaded && !agentOpened) {
            window.voiceflow.chat.open();
            setAgentOpened(true);
        } else {
            console.log("Agent already loaded and opened, won't open again.");
        }
    };

    return (
        <Layout style={{ minHeight: '100vh' }}>
            {/* Updated Header */}
            <Header
                style={{
                    background: 'transparent',
                    position: 'absolute',
                    zIndex: 1000,
                    width: '100%',
                    padding: '0 2rem',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {/* Centered Logo */}
                <img
                    src={logo}
                    alt="Cognitex Solutions Logo"
                    style={{ height: '215px', marginTop: '85px' }}
                />
                {/* Navigation positioned a bit to the left */}
                <div
                    style={{
                        position: 'absolute',
                        left: '1rem',
                        top: '65%',
                        transform: 'translateY(-50%)',
                        zIndex: 1001,
                        pointerEvents: 'auto',
                        backgroundColor: 'transparent',
                        minWidth: '350px', // increase this value as needed when navigation button hides
                    }}
                >
                    <ConfigProvider
                        theme={{
                            components: {
                                Menu: {
                                    // When in dark mode, a selected item will have a deep green background with 70% opacity
                                    darkItemSelectedBg: 'rgba(34, 139, 34, 0.7)',
                                    // No hover background unless active (set to transparent)
                                    darkItemHoverBg: 'rgba(82, 196, 26, 0)',
                                    // For horizontal menus, a hover background (deep green at 70% opacity)
                                    horizontalItemHoverBg: 'rgba(34, 139, 34, 0.7)',
                                    // Rounded corners for horizontal items
                                    horizontalItemBorderRadius: 19,
                                },
                            },
                        }}
                    >
                        <Menu
                            mode="horizontal"
                            theme="dark"
                            overflowedIndicator={<span></span>}
                            style={{ background: 'transparent', borderBottom: 'none' }}
                        >
                            <Menu.Item key="home" style={{ width: '100px', textAlign: 'center' }}>
                                <a
                                    href="#hero"
                                    style={{
                                        transition: 'transform 0.3s, box-shadow 0.3s, border-bottom 0.3s',
                                        outline: 'none',
                                        textDecoration: 'none',
                                        background: 'transparent',
                                        color: 'white',
                                    }}
                                    onClick={e => {
                                        e.preventDefault();
                                        document.querySelector('#hero').scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.transform = 'translateX(5px)';
                                        e.currentTarget.style.borderBottom = '2px solid green';
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.transform = 'translateX(0)';
                                        e.currentTarget.style.borderBottom = 'none';
                                    }}
                                    onMouseDown={e => {
                                        e.currentTarget.style.boxShadow = '0 0 10px rgba(255,255,255,0.8)';
                                        e.currentTarget.style.background = 'transparent';
                                    }}
                                    onMouseUp={e => {
                                        e.currentTarget.style.boxShadow = 'none';
                                        e.currentTarget.style.background = 'transparent';
                                    }}
                                    onFocus={e => e.currentTarget.blur()}
                                >
                                    Home
                                </a>
                            </Menu.Item>
                            <Menu.Item key="features" style={{ width: '100px', textAlign: 'center' }}>
                                <a
                                    href="#features"
                                    style={{
                                        transition: 'transform 0.3s, box-shadow 0.3s',
                                        outline: 'none',
                                        textDecoration: 'none',
                                        background: 'transparent',
                                        color: 'white',
                                    }}
                                    onClick={e => {
                                        e.preventDefault();
                                        document.querySelector('#features').scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    onMouseEnter={e => (e.currentTarget.style.transform = 'translateX(5px)')}
                                    onMouseLeave={e => (e.currentTarget.style.transform = 'translateX(0)')}
                                    onMouseDown={e => {
                                        e.currentTarget.style.boxShadow = '0 0 10px rgba(255,255,255,0.8)';
                                        e.currentTarget.style.background = 'transparent';
                                    }}
                                    onMouseUp={e => {
                                        e.currentTarget.style.boxShadow = 'none';
                                        e.currentTarget.style.background = 'transparent';
                                    }}
                                    onFocus={e => e.currentTarget.blur()}
                                >
                                    Features
                                </a>
                            </Menu.Item>
                            <Menu.Item key="about" style={{ whiteSpace: 'normal', width: '100px', textAlign: 'center' }}>
                                <a
                                    href="#about"
                                    style={{
                                        transition: 'transform 0.3s, box-shadow 0.3s',
                                        outline: 'none',
                                        textDecoration: 'none',
                                        background: 'transparent',
                                        color: 'white',
                                    }}
                                    onClick={e => {
                                        e.preventDefault();
                                        document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    onMouseEnter={e => (e.currentTarget.style.transform = 'translateX(5px)')}
                                    onMouseLeave={e => (e.currentTarget.style.transform = 'translateX(0)')}
                                    onMouseDown={e => {
                                        e.currentTarget.style.boxShadow = '0 0 10px rgba(255,255,255,0.8)';
                                        e.currentTarget.style.background = 'transparent';
                                    }}
                                    onMouseUp={e => {
                                        e.currentTarget.style.boxShadow = 'none';
                                        e.currentTarget.style.background = 'transparent';
                                    }}
                                    onFocus={e => e.currentTarget.blur()}
                                >
                                    About Us
                                </a>
                            </Menu.Item>
                        </Menu>
                    </ConfigProvider>
                </div>
            </Header>

            {/* Main Content */}
            <Content>
                {/* Hero Section */}
                <section id="hero" style={{
                    position: 'relative',
                    height: '100vh',
                    overflow: 'hidden'
                }}>
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            minWidth: '100%',
                            minHeight: '100%',
                            transform: 'translate(-50%, -50%)',
                            objectFit: 'cover',
                            filter: 'brightness(0.7)'
                        }}
                    >
                        <source src={backgroundVideo} type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'rgba(0,0,0,0.1)'
                    }}/>
                    <div style={{
                        position: 'relative',
                        zIndex: 2,
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: '#fff',
                        textAlign: 'center',
                        padding: '0 20px'
                    }}>
                        <Title style={{color: '#fff', fontSize: '4rem'}}>
                            Experience the Future of AI
                        </Title>
                        <Paragraph
                            style={{fontSize: '1.2rem', maxWidth: '750px', color: 'white', marginTop: '-1.5rem'}}>
                            Immerse yourself in advanced AI automation that transforms your business in real time.
                        </Paragraph>
                        <EngagingButton
                            onClick={() => {
                                if (window.voiceflow && window.voiceflow.chat) {
                                    window.voiceflow.chat.open();
                                } else {
                                    console.error('Voiceflow chat widget not loaded');
                                }
                            }}
                        >
                            Chat with Our AI
                        </EngagingButton>
                    </div>
                </section>

                {/* Features Section */}
                <section id="features" style={{padding: '4rem 8rem', background: '#fff'}}>
                    <div style={{textAlign: 'center', marginBottom: '3rem'}}>
                        <Title level={2} style={{fontSize: '2.5rem', color: '#333'}}>
                            Innovative Features
                        </Title>
                        <Paragraph style={{fontSize: '1rem', maxWidth: '600px', margin: '0 auto', color: '#666'}}>
                            Explore cutting-edge solutions designed to elevate your business efficiency and engagement.
                        </Paragraph>
                    </div>
                    <Row gutter={[4, 16]} justify="center">
                        <Col xs={24} sm={12} md={8}>
                            <MotionCard
                                hoverable
                                variants={cardVariants}
                                initial="initial"
                                whileHover="hover"
                                whileTap="tap"
                                style={{
                                    borderRadius: '10px',
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                                    maxWidth: '375px',
                                    padding: '1rem',
                                }}
                            >
                                <Card.Meta
                                    avatar={<RocketOutlined style={{fontSize: '1.8rem', color: '#ff7f50'}}/>}
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
                                    borderRadius: '10px',
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                                    maxWidth: '375px',
                                    padding: '1rem',
                                }}
                            >
                                <Card.Meta
                                    avatar={<LineChartOutlined style={{fontSize: '1.8rem', color: '#ff7f50'}}/>}
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
                                    borderRadius: '10px',
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                                    maxWidth: '375px',
                                    padding: '1rem',
                                }}
                            >
                                <Card.Meta
                                    avatar={<SyncOutlined style={{fontSize: '1.8rem', color: '#ff7f50'}}/>}
                                    title="Seamless Integration"
                                    description="Easily integrate our AI solutions with your existing tech stack for maximum impact."
                                />
                            </MotionCard>
                        </Col>
                    </Row>
                </section>

                <Divider style={{ margin: '2rem 0', borderColor: '#ddd' }} />

                <section id="about" style={{ padding: '4rem 14rem', background: '#fff' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <Title level={2} style={{ fontSize: '2.5rem', color: '#333' }}>
                            About Us
                        </Title>
                        <Paragraph style={{ fontSize: '1rem', maxWidth: '600px', margin: '0 auto', color: '#666' }}>
                            At Cognitex Solutions, we're passionate about transforming ideas into impactful digital experiences.
                            Our team of skilled developers, designers, and strategists is dedicated to crafting innovative software
                            solutions that help businesses thrive.
                        </Paragraph>
                    </div>
                    {/* Mission and Vision row */}
                    <Row gutter={[16, 16]} justify="center">
                        <Col xs={24} sm={12} md={8}>
                            <MotionCard
                                hoverable
                                variants={cardVariants}
                                initial="initial"
                                whileHover="hover"
                                whileTap="tap"
                                style={{
                                    borderRadius: '10px',
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                                    marginBottom: '1rem',
                                }}
                            >
                                <Card.Meta
                                    avatar={<FlagOutlined style={{ fontSize: '1.8rem', color: '#ff7f50' }} />}
                                    title="Mission"
                                    description="Our mission is to empower businesses through innovative software solutions."
                                    style={{ textAlign: 'center' }}
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
                                    borderRadius: '10px',
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                                    marginBottom: '1rem',
                                }}
                            >
                                <Card.Meta
                                    avatar={<EyeOutlined style={{ fontSize: '1.8rem', color: '#ff7f50' }} />}
                                    title="Vision"
                                    description="To be the leading provider of cutting-edge technology solutions."
                                    style={{ textAlign: 'center' }}
                                />
                            </MotionCard>
                        </Col>
                    </Row>
                    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                        <Title level={3} style={{ color: '#333' }}>Our Values</Title>
                        <Row gutter={[16, 16]} justify="center">
                            {['Innovation', 'Quality', 'Collaboration', 'Integrity'].map((value) => (
                                <Col key={value} xs={24} sm={12} md={6}>
                                    <MotionCard
                                        hoverable
                                        variants={cardVariants}
                                        initial="initial"
                                        whileHover="hover"
                                        whileTap="tap"
                                        bordered={false}
                                        style={{
                                            background: '#f7f7f7',
                                            borderRadius: '10px',
                                            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                                        }}
                                    >
                                        <Title level={4} style={{ color: '#333' }}>{value}</Title>
                                        <Paragraph style={{ color: '#666' }}>
                                            {value === 'Innovation' && 'Continuously exploring new technologies and approaches.'}
                                            {value === 'Quality' && 'Delivering exceptional results that exceed expectations.'}
                                            {value === 'Collaboration' && 'Fostering strong partnerships with our clients.'}
                                            {value === 'Integrity' && 'Conducting business with honesty and transparency.'}
                                        </Paragraph>
                                    </MotionCard>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </section>
            </Content>

            {/* Footer */}
            <Footer style={{
                textAlign: 'center',
                background: '#333',
                color: '#fff',
                padding: '1.5rem'
            }}>
                &copy; 2025 Cognitex Solutions. All Rights Reserved.
            </Footer>
        </Layout>
    );
};

export default LandingPage;
