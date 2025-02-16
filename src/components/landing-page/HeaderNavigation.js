import React from "react";
import { Layout, Menu, ConfigProvider, Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";

const { Header } = Layout;

const HeaderNavigation = ({
                              isMobile,
                              headerStyle,
                              logo,
                              logoStyle,
                              toggleDrawer,
                              drawerVisible,
                          }) => {
    return (
        <>
            <Header style={headerStyle}>
                <img
                    src={logo}
                    alt="Cognitex Solutions Logo"
                    style={{
                        ...logoStyle,
                        // For mobile devices, move the logo down and to the left.
                        // Adjust these values until you like the positioning:
                        marginTop: isMobile ? "40px" : logoStyle.marginTop,
                        marginLeft: isMobile ? "-15px" : logoStyle.marginLeft,
                    }}
                />

                {isMobile ? (
                    <Button
                        icon={<MenuOutlined />}
                        onClick={toggleDrawer}
                        style={{ marginTop: isMobile ? "20px" : "85px" }}
                    />
                ) : (
                    <div
                        style={{
                            flex: 1,
                            display: "flex",
                            justifyContent: "flex-end",
                            marginTop: "85px",
                        }}
                    >
                        <ConfigProvider
                            theme={{
                                components: {
                                    Menu: {
                                        darkItemSelectedBg: "rgba(34, 139, 34, 0.7)",
                                        darkItemHoverBg: "rgba(82, 196, 26, 0)",
                                        horizontalItemHoverBg: "rgba(34, 139, 34, 0.7)",
                                        horizontalItemBorderRadius: 19,
                                    },
                                },
                            }}
                        >
                            <Menu
                                mode="horizontal"
                                theme="dark"
                                style={{ background: "transparent", borderBottom: "none" }}
                            >
                                <Menu.Item key="home">
                                    <a
                                        onClick={(e) => {
                                            e.preventDefault();
                                            document
                                                .querySelector("#hero")
                                                .scrollIntoView({ behavior: "smooth" });
                                        }}
                                    >
                                        Home
                                    </a>
                                </Menu.Item>
                                <Menu.Item key="features">
                                    <a
                                        onClick={(e) => {
                                            e.preventDefault();
                                            document
                                                .querySelector("#features")
                                                .scrollIntoView({ behavior: "smooth" });
                                        }}
                                    >
                                        Features
                                    </a>
                                </Menu.Item>
                                <Menu.Item key="about">
                                    <a
                                        onClick={(e) => {
                                            e.preventDefault();
                                            document
                                                .querySelector("#about")
                                                .scrollIntoView({ behavior: "smooth" });
                                        }}
                                    >
                                        About Us
                                    </a>
                                </Menu.Item>
                            </Menu>
                        </ConfigProvider>
                    </div>
                )}
            </Header>

            {/* Mobile Drawer Menu */}
            {isMobile && (
                <Drawer
                    title="Navigation"
                    placement="right"
                    onClose={toggleDrawer}
                    visible={drawerVisible}
                >
                    <Menu mode="vertical" theme="light">
                        {/* You can adjust Menu styles here if needed */}
                        <Menu.Item
                            key="home"
                            onClick={() => {
                                document
                                    .querySelector("#hero")
                                    .scrollIntoView({ behavior: "smooth" });
                                toggleDrawer();
                            }}
                        >
                            Home
                        </Menu.Item>
                        <Menu.Item
                            key="features"
                            onClick={() => {
                                document
                                    .querySelector("#features")
                                    .scrollIntoView({ behavior: "smooth" });
                                toggleDrawer();
                            }}
                        >
                            Features
                        </Menu.Item>
                        <Menu.Item
                            key="about"
                            onClick={() => {
                                document
                                    .querySelector("#about")
                                    .scrollIntoView({ behavior: "smooth" });
                                toggleDrawer();
                            }}
                        >
                            About Us
                        </Menu.Item>
                    </Menu>
                </Drawer>
            )}
        </>
    );
};

export default HeaderNavigation;
