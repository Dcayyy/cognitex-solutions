import React from "react";
import { Layout, Divider } from "antd";
import HeroSection from "./Hero";
import FeaturesSection from "./Features";
import About from "./About";

const { Content } = Layout;

export const LandingPageContent = ({ isMobile }) => {
    return (
        <Content>
            <HeroSection isMobile={isMobile} />
            <FeaturesSection isMobile={isMobile} />
            <Divider style={{ margin: "2rem 0", borderColor: "#ddd" }} />
            <About isMobile={isMobile} />
        </Content>
    );
};
