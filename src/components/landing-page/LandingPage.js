import React, { useState } from 'react';
import {Layout, Grid, Divider} from 'antd';
import logo from '../../assets/logo/logo.png';
import HeaderNavigation from "./HeaderNavigation";
import Footer from "../Footer";
import { useVoiceflow } from "../Voiceflow";
import HeroSection from "./Hero";
import FeaturesSection from "./Features";
import About from "./About";
const { Content } = Layout;

const { useBreakpoint } = Grid;

const LandingPage = () => {
    const [drawerVisible, setDrawerVisible] = useState(false);
    const screens = useBreakpoint();
    const isMobile = !screens.md;

    const toggleDrawer = () => {
        setDrawerVisible(!drawerVisible);
    };

    const { agentLoaded, openChat } = useVoiceflow();

    const headerStyle = {
        background: 'transparent',
        position: 'absolute',
        width: '100%',
        zIndex: 1000,
        padding: '0 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    };

    const logoStyle = {
        height: isMobile ? '150px' : '215px',
        marginTop: isMobile ? '20px' : '85px',
    };

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <HeaderNavigation
                isMobile={isMobile}
                headerStyle={headerStyle}
                logo={logo}
                logoStyle={logoStyle}
                toggleDrawer={toggleDrawer}
                drawerVisible={drawerVisible}
            />

            <Content>
                <HeroSection isMobile={isMobile} />
                <FeaturesSection isMobile={isMobile} />
                <Divider style={{ margin: "2rem 0", borderColor: "#ddd" }} />
                <About isMobile={isMobile} />
            </Content>

            <Footer />
        </Layout>
    );
};

export default LandingPage;
