import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

const FooterComponent = () => {
    return (
        <Footer
            style={{
                textAlign: "center",
                background: "#333",
                color: "#fff",
                padding: "1.5rem",
            }}
        >
            &copy; 2025 Cognitex Solutions. All Rights Reserved.
        </Footer>
    );
};

export default FooterComponent;
