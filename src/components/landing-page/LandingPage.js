import React, { useState, useEffect } from 'react';
import { Layout, Grid } from 'antd';
import logo from '../../assets/logo/logo.png';
import { LandingPageContent } from "./LandingPageContent";
import HeaderNavigation from "./HeaderNavigation";
import Footer from "../Footer";
import { useVoiceflow } from "../Voiceflow";

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
            <LandingPageContent isMobile={isMobile}/>
            <Footer />
        </Layout>
    );
};

export default LandingPage;
